const {Schema,model} = require('../connection')

// import Schema from 'mongoose'
const mySchema = new Schema({
    productname:String,
    image : String,
    description : String,
    material: String,
    price: Number

})

module.exports = model('productmodel',mySchema);

