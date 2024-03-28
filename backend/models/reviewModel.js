const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    user : {type : Types.ObjectId, ref : 'users'},
    product: {type : Types.ObjectId, ref : 'chikanproducts'},
    rating: {type : Number},
    review : {type : String},
    createdAt: Date
});

module.exports = model('reviews', myschema);

