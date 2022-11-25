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

 createNewProfile("Sponge Robert", "https://s3forninad.s3.amazonaws.com/mockingspongebobbb.jpg", "The best time to wear a striped sweater is all the time." );
 createNewProfile("Eugene Krabs", "https://s3forninad.s3.amazonaws.com/mrKrabsIsaRobot.jpg", "Hey, that's pretty catchy. Bee-bee-boo-bop, bee-bee-boo-beep. Yeah, that's not bad. I love this young people's music.");
 createNewProfile("Karen", "https://s3forninad.s3.amazonaws.com/karen.jpg", "Plankton, get the secret formula");
// mongoose.connect("mongodb+srv://ass4:mongo4998@cluster0.dqr9rtj.mongodb.net/?retryWrites=true&w=majority",
//     ()=> {
//         //console.log("connection in a pineapple under the sea")
//     },
//     e=> console.error(e)
// )

router.get('/getAllProfiles',cors(), async (req, res) => {
    const all = await profileSchema.find();
    res.send(all);
})

router.get('/getHello',cors(), async (req, res) => {
    res.send("hello");
})

router.post('/addUser', async (req, res) => {
    const name = req.body.name;
    const bio = req.body.bio;
        createNewProfile(name, bio).then(r => {
           res.send("successfully added user");
        });

});

async function createNewProfile(name, pictureURL, bio) {
    const profile = await profileSchema.create(
        {
            fullName: name,
            bio: bio,
            profilePictureURL: pictureURL
        }
    )
}




module.exports = router;
