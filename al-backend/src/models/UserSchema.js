const {Schema} = require('mongoose');

const UserSchema  = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, lowercase: true, required: true, unique: true},
    password: {type:String, required: true}
});




module.exports = UserSchema;