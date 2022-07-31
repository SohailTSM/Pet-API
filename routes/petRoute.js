const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "../petData" });

const router = express.Router();
const {
  addPet,
  getAllPets,
  getPet,
  updatePet,
  deletePet,
} = require("../controllers/petController");

router.post("/", upload.single("uploadedFile"), addPet);

router.get("/", getAllPets);

router.get("/:pet_id", getPet);

router.patch("/:pet_id", updatePet);

router.delete("/:pet_id", deletePet);

module.exports = router;
