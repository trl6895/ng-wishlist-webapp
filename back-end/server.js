/*import mongoose from "mongoose";
import express from "express";

export async function mongoSetup() {
    const mongoose = require('mongoose');
    try {
        await mongoose.connect('mongodb://localhost:27017/mocksteam', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
          });
    } catch (error) {
        console.log(error);
    }
    console.log("mongodb setup done");
}*/

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
})

var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080")
})
