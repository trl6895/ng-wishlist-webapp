import { addNewGame, getGames, getGameLikeTitle } from "../controllers/controller";

const routes = (app) => {
    app.route('/games')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            console.log(getGames.toString());
            
        }, getGames)

        .post(addNewGame);

    app.route('/games/:name')
        .get(getGameLikeTitle);

}

export default routes;