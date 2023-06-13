import express from 'express';
import locationFunction from './location.function.js'
import morgan from "morgan";

const port = 2000;
let app = express();

morgan("tiny");


app.get("/", async (req, res, next) => {

    try {
        let location =  locationFunction(req);

        res.status(200).json({
            success: true,
            message: 'welcome to M.Pac\'s server',
            locationInfo: location
        });
        
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
        console.log(error)
    }

});

app.listen(port, () => {
    console.log(`Server is running .....`)
});