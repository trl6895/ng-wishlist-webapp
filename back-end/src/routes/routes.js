import { addNewGame } from "../controllers/controller";

const routes = (app) => {
    app.route('/game')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            
        }, (req, res, next) => {
            res.send('GET request successful!');
        })

        .post(addNewGame);

}

export default routes;