const mongoose = require('mongoose');
const schema = mongoose.Schema;


const MalariaDatailsSchema = new schema({
    Disease: String,
    Summary: String,
    Causes:String,
    Medicines:String,
   Netural: String,
})

module.exports = mongoose.model('MalariaDatails',MalariaDatailsSchema)