const {Schema,model} = require('../connection')

// import Schema from 'mongoose'
const mySchema = new Schema({
    title: {type : String, required: true},
    image: [{type : String, required: true}],
    description : {type : String, required: true},
    material: String,
    embroidery: String,
    price: {type : Number, required: true},
    stiched: Boolean,
    discount: {type : Number, default: 0},
    gender: {type: String, required: true},
    stock: {type: Number},
})

module.exports = model('chikanproducts',mySchema);

