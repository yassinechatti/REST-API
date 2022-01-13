exports.addContact = async (req, res) => {
  try {
    const newContact = req.body;
    if (!newContact.name || !newContact.email) {
      return res.status(400).send({ msg: "Name and email are required!!!" });
    }
    const contactToFind = await Contact.findOne({ email: newContact.email });
    if (contactToFind) {
      return res.status(400).send({ msg: "email already exists" });
    }
    const contactAdded = new Contact({ ...newContact });
    await contactAdded.save();
    res.status(200).send({ msg: "Contact added", contact: contactAdded });
  } catch (error) {
    res.status(400).send({ msg: "Contact cannot be added", error });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const { _id } = req.params;
    const contactToUpdate = req.body;

    if (!contactToUpdate) {
      return res.status(400).send({ msg: "cannot be found with this id!!!" });
    }
    await Contact.updateOne({ _id }, { $set: { ...contactToUpdate } });
    res.status(200).send({ msg: "Contact updated" });
  } catch (error) {
    res.status(400).send({ msg: "Contact cannot be updated", error });
  }
};
exports.deleteContact = async (req, res) => {
  try {
    const { _id } = req.params;
    // const contactToDelete = req.body;
    await Contact.deleteOne({ _id });
    res.status(200).send({ msg: "Contact deleted" });
  } catch (error) {
    res.status(400).send({ msg: "Contact cannot be deleted", error });
  }
};
exports.getOneContact = async (req, res) => {
  try {
    const { _id } = req.params;
    const contactToFind = await Contact.findOne({ _id });
    res.status(200).send({ msg: "Contact found", contactToFind });
  } catch (error) {
    res.status(400).send({ msg: "Contact cannot be found", error });
  }
};
exports.getContact = async (req, res) => {
  try {
    const contactsToFind = await Contact.find();
    res.status(200).send({ msg: "Contact found", contactsToFind });
  } catch (error) {
    res.status(400).send({ msg: "Contacts cannot be found", error });
  }
};
