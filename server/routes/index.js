var express = require('express');
var router = express.Router();
const cors = require('cors');
const mongoose = require('mongoose')

const profileSchema = require("./profileSchema") //import that model created in userSchemaMongo.js

//mongoose.connect("mongodb://localhost:27017/myapp");

mongoose.connect("mongodb://mongo:27017/mongocontainer",
    ()=> {
        console.log("connection in a pineapple under the sea")
    },
    e=> console.error(e)
)


// mongoose.connect("mongodb+srv://ass4:mongo4998@cluster0.dqr9rtj.mongodb.net/?retryWrites=true&w=majority",
//     ()=> {
//         //console.log("connection in a pineapple under the sea")
//     },
//     e=> console.error(e)
// )

router.get('/getAllProfiles',cors(), async (req, res) => {
    console.log("trying to get all profiles");
    const all = await profileSchema.find();
    console.log("made it past schema.find()!");
    res.send(all);
})

router.get('/getHello',cors(), async (req, res) => {
    console.log("getting hello");
    res.send("hello");
})

router.post('/addUser', async (req, res) => {
    const name = req.body.name;
    console.log("trying to add a user");
    const bio = req.body.bio;
    //console.log(name, pictureURL, bio);
    //console.log("adding user to bikini bottom...");
        createNewProfile(name, bio).then(r => {
           res.send("successfully added user");
        });

});

async function createNewProfile(name, pictureURL, bio) {
    const profile = await profileSchema.create(
        {
            fullName: name,
            bio: "texas texas texas",
            profilePictureURL: "https://s3forninad.s3.amazonaws.com/sandy.jpg"
        }
    )
}




module.exports = router;
