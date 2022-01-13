const express = require("express");
const {
  addContact,
  updateContact,
  deleteContact,
  getOneContact,
  getContact,
} = require("../controllers/contact");
const Contact = require("../model/Contact");
const router = express.Router();
router.get("/", getContact);
router.get("/:_id", getOneContact);
router.post("/", addContact);
router.put("/:_id", updateContact);
router.delete("/:_id", deleteContact);

module.exports = router;
