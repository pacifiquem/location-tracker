import express from 'express';
import locationFunction from './location.function.js'

const port = 2000;
let app = express();

app.get("/", async (req, res, next) => {

    try {
        let location =  locationFunction(req);

        res.status(200).json({
            success: true,
            message: 'welcome to M.Pac\'s server',
            locationData: location
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