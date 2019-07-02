const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserSchema = new schema({
    Diseases: String,
    Summary: String,
    Causes: String,
    Medicines: String,
    Netural: String,
})


module.exports = mongoose.model("User", UserSchema)