const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
    title:String,
    body: String,
    device:String,
    no_of_comments: Number,
    userId:String
},{
    versionKey:false
});

const PostModel = mongoose.model("User_Post", postSchema)

module.exports = {PostModel}