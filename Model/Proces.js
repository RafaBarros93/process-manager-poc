const mongoose = require("mongoose");

const Process = mongoose.model("SlackData", {
    accountingId: {
        type: String,
        required: true
    },
    companyId: {
        type: String,
        required: true
    },
    error: {
        type: mongoose.Schema.Types.Mixed,
        required: false
    },
    finishedAt: {
        type: Date,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    params: {
        type: mongoose.Schema.Types.Mixed,
        required: false
    },
    startedAt: {
        type: Date,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
});

module.exports = Process;
