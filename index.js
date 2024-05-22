const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { log } = require("console");

const USERS = [];

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/avr", function (req, res) {
    res.sendFile(path.join(__dirname, "/avr-usage.html"));
});

app.get("/books-borrowed", function (req, res) {
    res.sendFile(path.join(__dirname, "/books-borrowed.html"));
});

app.get("/books-returned", function (req, res) {
    res.sendFile(path.join(__dirname, "/books-returned.html"));
});

app.get("/calendar", function (req, res) {
    res.sendFile(path.join(__dirname, "/books-returned.html"));
});

app.get("/documents", function (req, res) {
    res.sendFile(path.join(__dirname, "/books-returned"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"), { USERS });
});

app.post("/new-user", (req, res) => {
    const { body } = req;

    USERS.push(body);

    console.log(USERS);

    res.send({ message: "Added User" });
});

app.listen(3000, () => {
    console.log("Active");
});
