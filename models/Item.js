const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = Item = mongoose.model('item',ItemSchema);


//or you can directly write schema in second parameter of mongoose.model


