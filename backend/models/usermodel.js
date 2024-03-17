const {Schema,model} = require('../connection')

// import Schema from 'mongoose'
const mySchema = new Schema({
    username:String,
    email : String,
    password : String,
    age: Number,
    role : {type: String, default: 'user'},
    avatar: {type : String , default: 'avatar_placeholder.webp'}
})

module.exports = model('users',mySchema);

