

var express = require('express');
//const { default: mongoose } = require('mongoose');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
})

var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/mocksteam');

    const gameSchema = new mongoose.Schema({
        img_url: String,
        date: String,
        developer: String,
        publisher: String,
        full_desc: Object,
        requirements: Object,
        popu_tags: [String],
        price: Number,
        url_info: Object,
        name: { type: String,
            required: true },
        categories: [String],
        wishlisted: Boolean
    },
    {
        collection: "games"
    });

    const Game = new mongoose.model('games', gameSchema);
    /*
    const chic = new Game({ name: 'Chicory: A Colorful Tale'});
    console.log(chic.name);

    await chic.save();
    */
    //console.log(await Game.find({$or: [{name: 'Among Us'}, {publisher: /Annapurna.*/}]}, { name: 1, developer: 1, publisher: 1, _id: 0 }));
    /*
    await Game.updateMany(
            {},
            { $set : { "wishlisted": false }}
        );
    */

    /*
    const kittySchema = new mongoose.Schema({
        name: String
    });

    const Kitten = mongoose.model('Kitten', kittySchema);

    const silence = new Kitten({ name: 'Silence' });
    console.log(silence.name);

    await silence.save();
    */
};
/*
async () => {
    const mongoose = require('mongoose');
    try {
        await mongoose.connect('mongodb://localhost:27017/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
    } catch (error) {
        console.log(error);
    }
    console.log("mongodb setup done");
}
*/
//var db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//const connection = mongoose.connection;
//const steamdb = connection.useDb('mocksteam');
//console.log(steamdb);



async function queryFunc (query) {
    console.log(await query.exec());
}

//queryFunc(Game.findOne({ name: 'Among Us'}));