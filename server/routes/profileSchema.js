const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullName: String,
    bio: String,
    profilePictureURL: String
})

module.exports = mongoose.model("userProfile", userSchema) //this will be the name of the collection we will see inside mongo, then pass it the schema

