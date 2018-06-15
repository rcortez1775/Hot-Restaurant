var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//--------------------------------------------------

var currentTables = [
{
name: "Robert",
number: 9099392313,
email: "noo@noo.com",
id: 313
}
]

var waitList = [

]

//---------------------------------------------------

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "Home.html"));
});

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "Reservations.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "Tables.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(currentTables);
});

app.get("/api/waitList", function (req, res) {
    return res.json(waitList);
});

//--------------------------------------------------

app.post("/api/tables", function (req, res) {

    var newCustomer = req.body;

    console.log(newCustomer);

    if (currentTables.length < 5) {
        currentTables.push(newCustomer);
    } else {
        waitList.push(newCustomer)
    }

    res.json(newCustomer);
});

//-------------------------------------------------


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});