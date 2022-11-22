db.voos.find(
  { "passageiros.pagos": { $gt: 7000 } },
  { vooId: true, _id: false, mes: true, ano: true },
).limit(1);