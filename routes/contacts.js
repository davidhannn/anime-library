const express = require("express");
const router = express.Router();

//@route    GET api/contacts
//@descr   Get all users contacts
//@access   Private
router.get("/", (req, res) => {
  res.send("Get all Contacts");
});

//@route    Post api/contacts
//@descr   Add new Contact
//@access   Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

//@route    Put api/contacts/:id
//@descr    Update Contact
//@access   Private
router.put("/:id", (req, res) => {
  res.send("Update contacts");
});

//@route    Delete api/contacts/:id
//@descr    Delete Contact
//@access   Private
router.delete("/:id", (req, res) => {
  res.send("Delete contacts");
});

module.exports = router;
