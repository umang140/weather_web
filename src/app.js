const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const hbs = require('hbs');
;
const staticpath = path.join(__dirname,"../public");
const temppath = path.join(__dirname,"../");
const parsepath = path.join(__dirname,"../partical");

app.set("view engine","hbs");
app.use(express.static(staticpath));
hbs.registerPartials(parsepath);

app.get("/" , (req,res) => {
    res.render('index');
});
app.get("/about" , (req,res) => {
    res.render('about');
});
app.get("/weather" , (req,res) => {
    res.render("weather");
});
app.get("*" , (req,res) => {
    res.render("404", {
        errormeg: "oops page not found!"
    });
});

app.listen(PORT , ()=>{
    console.log(`my port is running on ${PORT}`);
});