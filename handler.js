"use strict";
var mongoose = require("mongoose");
const Process = require("./Model/Proces");
mongoose.connect(
    "mongodb://process:slack123@ds161794.mlab.com:61794/process",
    { useNewUrlParser: true }
);

const insert = (params) => {
    /* var slackDataSchema = new Schema({
        mensage: { type: String, required: true },
        channel: String
    });

    var Process = mongoose.model("SlackData", slackDataSchema); */

    const process = new Process({
        mensage: params.mensage,
        channel: params.channel
    });

    return process.save();
};

const update = (params) => {};

exports.insert = insert;
exports.update = update;
