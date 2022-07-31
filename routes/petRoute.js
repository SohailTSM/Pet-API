const express = require("express");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../petData"));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + ".xlsx");
  },
});

const upload = multer({ storage: storage });
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
