"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

function hello(params) {
    mongoose.connect(
        "mongodb://localhost:27017/test",
        { useMongoClient: true }
    );

    const process = {
        mensage: params.mensage,
        channel: params.channel
    };
    var slackDataSchema = new Schema(
        {
            mensage: { type: String, required: true },
            channel: String
        },
        { collection: "slack" }
    );

    var Process = mongoose.model("SlackData", slackDataSchema);

    var data = new Process(process);
    data.save();

    return data;
}

exports.hello = hello;
