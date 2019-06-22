db.restaurants.find({})
db.restaurants.find({}, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
db.restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1 })
db.restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1, district: 1, "address.zipcode": 1 }) 
db.restaurants.aggregate([{ $project: { _id: 0, restaurant_id: 1, name: 1, district: 1, cuisine: 1, zipcode: "$address.zipcode" } }]) 
db.restaurants.find({ district: "Bronx" })    
db.restaurants.find({ district: "Bronx" }).limit(5)
db.restaurants.find({ district: "Bronx" }).skip(5).limit(5)
db.restaurants.find({ "address.coord": { $lt: -95.754168 } }) 
db.restaurants.find({ cuisine: { $ne: "American " }, "grades.score": { $gt: 70 }, "address.coord": { $lt: -65.754168 } }) 
db.restaurants.find({ name: { $regex: /^Wil/ } }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 }) 
db.restaurants.find({ name: { $regex: /ces$/ } }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 }) 
db.restaurants.find({ name: { $regex: /Reg/ } }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 })  
db.restaurants.find({ district: "Bronx", cuisine: { $in: ["American ", "Chinese"] } }) 
db.restaurants.find({ district: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 })     
db.restaurants.find({ district: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 })  
db.restaurants.find({ "grades.score": { $lte: 10 } }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 })       
db.restaurants.find({ "address.coord.1": { $gt: 42, $lte: 52 } }, { restaurant_id: 1, name: 1, district: 1, cuisine: 1 })    
db.restaurants.find({}, {}, { sort: ['name', 1] })
db.restaurants.find({}).sort({ name: 1 })
db.restaurants.find({}).sort({ name: -1 })
db.restaurants.find({}).sort({ cuisine: 1, district: -1 })
db.restaurants.find({ "address.street": { $exists: true } }) 
db.restaurants.find({ "address.coord": { $type: "double" } }) 
db.restaurants.find({ name: { $regex: /^Mad/ } }, { name: 1, district: 1, "address.coord": 1, cuisine: 1 })
db.restaurants.aggregate([{ $project: { name: 1, district: 1, longitude: { $arrayElemAt: ["$address.coord", 0] }, latitude: { $arrayElemAt: ["$address.coord", 1] }, cuisine: 1 } }])
