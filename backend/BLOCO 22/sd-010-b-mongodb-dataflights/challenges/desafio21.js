db.voos.find(
  { litrosCombustivel: { $gte: 1000 } },
  { vooId: true, _id: false },
).limit(1);