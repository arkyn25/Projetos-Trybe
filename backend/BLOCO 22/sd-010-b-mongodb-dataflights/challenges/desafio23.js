db.voos.find(
  { 
    $and: [
      { litrosCombustivel: { $lte: 1000 } },
      { litrosCombustivel: { $exists: true } },
    ],
  },
  { _id: false, vooId: true, litrosCombustivel: true },
).limit(1);