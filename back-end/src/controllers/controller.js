import mongoose from 'mongoose';
import { gameSchema } from '../models/model';

const GAME_DISPLAY_LIM = 10;

const Game = mongoose.model('games', gameSchema);

export const addNewGame = (req, res) => {
 
    let newGame = new Game(req.body);

    newGame.save((err, game) => {
        if (err) {
            res.send(err);
        }
        res.json(game);
    });
}

export const getGames = (req, res) => {
    
    Game.find({}, (err, game) => {
        if (err) {
            res.send(err);
        }
        console.log(res.json(game));
    }).limit(GAME_DISPLAY_LIM);
}

export const getGameLikeTitle = (req, res) => {
    
Game.find({ name: /.*${req.params.name}.*/}, (err, game) => {
        if (err) {
            res.send(err);
        }
        res.json(game);
    }).limit(GAME_DISPLAY_LIM);
}