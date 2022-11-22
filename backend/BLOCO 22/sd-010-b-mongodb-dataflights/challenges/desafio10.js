db.voos.find({ "empresa.nome": "GOL", ano: 2017 },
  {
    _id: false,
    vooId: true,
    "empresa.nome": true,
    "aeroportoOrigem.nome": true,
    "aeroportoDestino.nome": true,
    ano: 2017,
    mes: true,
  })
.limit(10);