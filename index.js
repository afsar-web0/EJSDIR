const express = require("express");
const app = express();

const port = 8080;

app.set ("view engine", "ejs");

app.get ("/",(req,res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req,res) =>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username]
    console.log(data)
    res.render("instagram.ejs",{ data });
});

app.get ("/rollDice",(req,res) => {
    let diceVal = Math.floor(Math.random () * 6) +1
    res.render("rolldice.ejs", {diceVal});
});

app.listen(port,() => {
    console.log(`listinig on port ${port}`);
});