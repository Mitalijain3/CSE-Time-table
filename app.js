//jshint version: 6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const https = require("https");
const _ = require("lodash");
const { RSA_NO_PADDING } = require("constants");
const app = express();
app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
let details = [
    { class_n: "Slot-A", faculty: "B.s", meet: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown" },
    { class_n: "Slot-B", faculty: "B.s", meet: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown" },
    { class_n: "Slot-C", faculty: "B.s", meet: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown" },
    { class_n: "Slot-D", faculty: "B.s", meet: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown" },
    { class_n: "Slot-E", faculty: "B.s", meet: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown" },
    { class_n: "Slot-H", faculty: "B.s", meet: "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown" },
    { status: "Break" },
    { status: "No class now" },
    { status: "Slot-1: Demo, Miscellaneous class" },
    { status: "Guest lecture" },
    { status: "No class today" }
]
let n;
app.get("/", function(req, res) {
    let today = new Date();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let day = today.getDay();
    if (day === 1) {
        if (hour >= 9 && hour < 10) {
            n = 0;
        } else if (hour >= 10 && hour < 11) {
            n = 1;
        } else if (hour >= 11 && hour < 12) {
            n = 2;
        } else if (hour >= 12 && hour < 13) {
            n = 3;
        } else if (hour >= 13 && hour < 14) {
            n = 6;
            res.render("enjoy", { details: details, n: n });
        } else if (hour >= 14 && hour < 15) {
            n = 4;
        } else if (hour >= 16 && hour < 17) {
            n = 5;
        } else {
            n = 7;
            res.render("enjoy", { details: details, n: n });
        }
    } else if (day === 2) {
        if (hour >= 9 && hour < 10) {
            n = 1;
        } else if (hour >= 10 && hour < 11) {
            n = 2;
        } else if (hour >= 11 && hour < 12) {
            n = 3;
        } else if (hour >= 12 && hour < 13) {
            n = 4;
        } else if (hour >= 13 && hour < 14) {
            n = 6;
            res.render("enjoy", { details: details, n: n });
        } else if (hour >= 14 && hour < 15) {
            n = 0;
        } else if (hour >= 16 && hour < 17) {
            n = 5;
        } else {
            n = 7;
            res.render("enjoy", { details: details, n: n });
        }
    } else if (day === 3) {
        if (hour >= 9 && hour < 10) {
            n = 2;
        } else if (hour >= 10 && hour < 11) {
            n = 3;
        } else if (hour >= 11 && hour < 12) {
            n = 4;
        } else if (hour >= 12 && hour < 13) {
            n = 0;
        } else if (hour >= 13 && hour < 14) {
            n = 6;
            res.render("enjoy", { details: details, n: n });
        } else if (hour >= 14 && hour < 15) {
            n = 1;
        } else if (hour >= 16 && hour < 17) {
            n = 5;
        } else {
            n = 7;
            res.render("enjoy", { details: details, n: n });

        }
    } else if (day === 3) {
        if (hour >= 9 && hour < 10) {
            n = 3;
        } else if (hour >= 10 && hour < 11) {
            n = 4;
        } else if (hour >= 11 && hour < 12) {
            n = 0;
        } else if (hour >= 12 && hour < 13) {
            n = 1;
        } else if (hour >= 13 && hour < 14) {
            n = 6;
            res.render("enjoy", { details: details, n: n });
        } else if (hour >= 14 && hour < 15) {
            n = 2;
        } else if (hour >= 16 && hour < 17) {
            n = 5;
        } else {
            n = 7;
            res.render("enjoy", { details: details, n: n });
        }
    } else if (day === 4) {
        if (hour >= 9 && hour < 10) {
            n = 4;
        } else if (hour >= 10 && hour < 11) {
            n = 0;
        } else if (hour >= 11 && hour < 12) {
            n = 1;
        } else if (hour >= 12 && hour < 13) {
            n = 2;
        } else if (hour >= 13 && hour < 14) {
            n = 6;
            res.render("enjoy", { details: details, n: n });
        } else if (hour >= 14 && hour < 15) {
            n = 3;
        } else if (hour >= 16 && hour < 17) {
            n = 5;
        } else {
            n = 7;
            res.render("enjoy", { details: details, n: n });
        }
    } else if (day === 5) {
        if (hour >= 9 && hour < 17) {
            n = 4;
        } else {
            n = 8;
        }
    } else if (day === 6) {
        if (hour >= 9 && hour < 17) {
            n = 4;
        } else {
            n = 9;
        }
    } else if (day === 5) {

        n = 10;
        res.render("enjoy", { details: details, n: n });

    }

    res.render("home", { details: details, n: n });
})
app.get("/update", function(req, res) {
    res.render("update");
})
app.post("/update", function(req, res) {
    const details_add = {
        class_n: req.body.class,
        faculty: req.body.faculty,
        meet: req.body.meet,
        status: req.body.status
    };
    details.push(details_add);
    console.log(details);
    res.redirect("/update");
})
app.listen(3000, function() {
    console.log("Server 3000 is running on port!");
})