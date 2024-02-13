const {Schema,model} = require('../connection')

// import Schema from 'mongoose'
const mySchema = new Schema({
    username:String,
    email : String,
    password : String,
    age: Number

})

module.exports = model('users',mySchema);

