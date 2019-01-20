"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect(
    "mongodb://process:slack123@ds161794.mlab.com:61794/process",
    { useNewUrlParser: true }
);

function insert(params) {
    var slackDataSchema = new Schema({
        mensage: { type: String, required: true },
        channel: String
    });

    var Process = mongoose.model("SlackData", slackDataSchema);

    const process = new Process({
        mensage: params.mensage,
        channel: params.channel
    });

    return process.save();
}

exports.insert = insert;
