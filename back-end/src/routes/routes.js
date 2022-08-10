import { addNewGame, getGames } from "../controllers/controller";

const routes = (app) => {
    app.route('/game')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            
        }, getGames)

        .post(addNewGame);

}

export default routes;