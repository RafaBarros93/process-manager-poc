const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const slackDataSchema = new Schema({
    mensage: { type: String, required: true },
    channel: String
});

const Process = mongoose.model("SlackData", slackDataSchema);

module.exports = Process;
