const xlsx = require("xlsx");
const path = require("path");
const fs = require("fs");
const Pet = require("../models/Pet");

module.exports.addPet = (req, res) => {
  let pets = [];
  let error = false;
  // Working with excel file
  try {
    const workbook = xlsx.readFile(
      path.join(__dirname, "../petData/uploadedFile.xlsx")
    );
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const worksheetLength = (Object.keys(worksheet).length - 2) / 4;
    for (let i = 2; i <= worksheetLength; i++) {
      const name = worksheet[`A${i}`].v;
      const type = worksheet[`B${i}`].v;
      const breed = worksheet[`C${i}`].v;
      const age = worksheet[`D${i}`].v;
      pets.push(new Pet({ name, type, breed, age }));
    }
  } catch {
    error = true;
  }

  // Deleting UploadedFile
  try {
    fs.unlinkSync(path.join(__dirname, "../petData/uploadedFile.xlsx"));
  } catch (err) {}
  // Saving pets to db
  pets.forEach((pet) => {
    pet
      .save()
      .then((result) => console.log(result))
      .catch((err) => {
        error = true;
        console.log(err);
      });
  });
  if (!error) res.json({ message: "Data Inserted" });
  if (error) res.json({ message: "Please enter a valid file" });
};

module.exports.getAllPets = (req, res) => {
  Pet.find().then((pets) => res.json({ pets, message: "All pets" }));
};

module.exports.getPet = (req, res) => {
  Pet.findById(req.params.pet_id, (err, pet) => {
    if (pet) res.json({ pet, message: "Get pet" });
    if (err) res.json({ message: "No such pet" });
  });
};

module.exports.updatePet = (req, res) => {};

module.exports.deletePet = (req, res) => {};
