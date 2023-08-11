import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
// const API_URL = "https://secrets-api.appbrewery.com/random";

// 2. Create an express app and set the port number.
const app = express();
const port = 3000;

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4.add a get route
app.get("/", async (req, res) => {
    try {
      const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    //   res.render("index.ejs", { cocktail: result.data.strDrink});
      res.render("index.ejs", { content: result.data.drinks[0] });

    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

// 6. Listen on your predefined port and start the server.
app.listen(port , () => {
    console.log(`Server is running on port ${port}.`);
});
