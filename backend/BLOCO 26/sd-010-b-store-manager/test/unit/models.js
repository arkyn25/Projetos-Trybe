const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');

const getConnection = require('./testConnection');
const productsModel = require('../../models/productsModel');
const { after, before } = require('mocha');

describe('Testa produtos', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    await connectionMock.db('StoreManager').collection('products').deleteMany({});
    MongoClient.connect.restore();
  });

  describe('Testa se cria produto', ()=> {
    describe('Quando insere com sucesso!', () => {
      let response;

      before(async () => {
        response = await productsModel.create('Caixas de banana', 50);
      });

      after(async () => {
        await connectionMock.db('StoreManager').collection('products').deleteMany({});
      });

      it('Retorna um Objeto', async () => {
        const response = await productsModel.getAll();
        expect(response.body).to.be.a('object');
      });

      it('Possui chaves "_id", "name", "quantity"', async () => {
        const { products } = productsModel.getAll();
        expect(products).to.include.keys('_id', 'name', 'quantity');
      });

      it('Possui a chave "products"', async () => {
        const response = await productsModel.getAll();
        expect(response).to.have.property('products');
      });
      
      it('a chave products é um array', async () => {
        const { products } = productsModel.getAll();
        expect(products).to.be.an('array');
      });
    });

    describe('Quando falha inserção', () => {
      let response;

      before(async ()=> {
        response = await productsModel.create('Caixa');
      });

      after(async () => {
        await connectionMock.db('StoreManager').collection('products').deleteMany({});
      });

      describe('Testa a letura dos produtos', () => {
        describe('Quando é feito a leitura com sucesso', () => {
          let response;

          before(async () => {
            response = await productsModel.getAll();
          });

          it('O resultado deve ser um array', () => {
            expect(response).to.be.a('array');
          });

          it('O resultado deve ser um array apenas com objetos', () => {
            response.forEach((product) => expect(product).to.be.a('object'));
          });
        });
      });

      describe('Testa a busca de produtos por "id" ', () => {
        describe('Quando a busca é feita com sucesso', () => {
          let response;

          before(async ()=> {
            response = await productsModel.create('Produto', 50);
          });

          after(async () => {
            await connectionMock.db('StoreManager').collection('products').deleteMany({});
          });

          it('O resultado deve ser um objeto', async () => {
            const findProduct = await productsModel.getById(response._id);

            expect(findProduct).to.be.a('object');
          });

          it('O resultado deve conter as chaves "_id", "name", "quantity"', async () => {
            const findProduct = await productsModel.getById(response._id);

            expect(findProduct).to.include.all.keys('_id', 'name', 'quantity');
          });

          describe('Quando falha na busca por id', () => {
            describe('Quando produto nao existe', () => {
              it('Deve-se retornar null', async () => {
                const inexistentId = 999999;
                const findProduct = await productsModel.getById(inexistentId);

                expect(findProduct).to.be.null;
              });
            });
          });
        });
      });
      describe('Testa a atualizacão de produtos', async () => {
        const fakeProduct = {_id, name: 'Bananas', quantity: 10 };
        before(async () => {
          productsUpdate = await productsModel.create(fakeProduct);
        });

        after(async () => {
          await connectionMock.db('StoreManager').collection('products').deleteMany({});
        });

        describe('Quando atualização é realizada com sucesso', () => {
          it('O retorno deve ser o esperado', async () => {
            await productsModel.update(fakeProduct);
            const updatedProduct = await productsModel.getById(fakeProduct._id);

            expect(updatedProduct.name).to.be.equal('Bananas');
            expect(updatedProduct.quantity).to.be.equal(10);
          });
        });
        describe('Quando há erro na atualização', () => {
          it('Deve-se retornar null', async () => {
            const invalidId = '111';
            const updatedProduct = await productsModel.update(invalidId, '', 0);
    
            expect(updatedProduct).to.be.null;
          });
        });
      });

      describe('Testa a deleção de produtos', () => {
        describe('Quando a deleção é realizada com sucesso', () => {
          const fakeProduct = { name: 'Bananas', quantity: 10 };
          before(async () => {
            productToBeDeleted = await productsModel.create(fakeProduct);
          });

          it('Deve retornar um array', async () => {
    
            const products = await productsModel.getAll();
    
            expect(products).to.be.a('array');
          });
    
          it('O array nao deve conter o produto', async () => {
            await productsModel.excluse(fakeProduct._id);
    
            const products = await productsModel.getById(fakeProduct._id);
            expect(products).to.be.null;
          });
        });
      });
    });
  });
});
