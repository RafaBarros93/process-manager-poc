"use strict";
var mongoose = require("mongoose");
const Process = require("./Model/Proces");
mongoose.connect("mongodb://process:slack123@ds161794.mlab.com:61794/process", {
    useNewUrlParser: true
});

const insert = (params) => {
    const process = new Process({
        name: params.name,
        userId: params.userId,
        accountingId: params.accountingId,
        companyId: params.companyId,
        startedAt: new Date(),
        params: params.params
    });

    return process.save();
};

const update = (params) => {};

exports.insert = insert;
exports.update = update;
