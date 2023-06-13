import express from 'express';
import locationFunction from './location.function.js'

const port = 2000;
const app = express();


app.get("/", async (req, res, next) => {

    try {
        let location =  locationFunction(req);
        
        console.log(location);

        console.log("====================================================")

        res.status(200).json({
            success: true,
            message: 'welcome to pacifiquem\'s server',
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

app.get("/favicon.ico", (req, res) => {
    res.send("D");
});

app.listen(port, () => {
    console.log(`Server is running .....`)
});