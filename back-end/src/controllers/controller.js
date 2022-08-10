import mongoose from 'mongoose';
import { gameSchema } from '../models/model';

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