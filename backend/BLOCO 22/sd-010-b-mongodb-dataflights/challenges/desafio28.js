db.resumoVoos.insertOne({
  empresa: "LATAM AIRLINES BRASIL",
  totalVoosDomesticos: 20026,
});

db.resumoVoos.find({ empresa: "LATAM AIRLINES BRASIL" }, { _id: false });