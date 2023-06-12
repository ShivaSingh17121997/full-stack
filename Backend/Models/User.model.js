const mongoose = require("mongoose");
const usereSchema = mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    password: String,
    age: Number,
    city: String,
    is_married: Boolean,
},
{ versionKey: false }
);

const UserModel = mongoose.model("social_user", usereSchema)
module.exports = {
    UserModel
}