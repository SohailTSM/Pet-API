const express = require("express");
const router = express.Router();
const {
  addPet,
  getAllPets,
  getPet,
  updatePet,
  deletePet,
} = require("../controllers/petController");

router.post("/", addPet);

router.get("/", getAllPets);

router.get("/:pet_id", getPet);

router.patch("/:pet_id", updatePet);

router.delete("/:pet_id", deletePet);

module.exports = router;
