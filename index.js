const { sequelize, testConnection, Vehicle, Driver } = require("./models"); // index.js is the default entry point.

testConnection();

(async () => {
  // Create
  const newVehicle = await Vehicle.create({
    carPlateNo: "888AA",
    type: "Bike",
  });

  // Update
  newVehicle.type = "Road Bike";
  await newVehicle.save();

  // Delete
  await newVehicle.destroy();

  const results = await Vehicle.findAll({ include: Driver });
  console.log("\n Vehicle.findAll", JSON.stringify(results));

  result = await Vehicle.findAll({ attributes: ["carPlateNo"] }); // Selecting only "carPlateNo"
  console.log("\n attribute", JSON.stringify(results));
  result = await Vehicle.findAll({ where: { type: "Truck" } }); // Select records where type = "Truck"
  console.log("\n where", JSON.stringify(results));
  result = await Vehicle.findAll({ order: [["carPlateNo", "DESC"]] }); // select records order by carPlateNo in descending order
  console.log("\n order", JSON.stringify(results));
})();
