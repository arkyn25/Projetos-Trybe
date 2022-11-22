db.voos.find(
  { $and: [
    { litrosCombustivel: { $lte: 600 } },
    { "empresa.nome": { $nin: ["GOL", "AZUL"] } },
    { litrosCombustivel: { $exists: true } },
  ],
 }, { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true },
).limit(1);