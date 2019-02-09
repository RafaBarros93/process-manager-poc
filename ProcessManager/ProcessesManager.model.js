import mongoose from "mongoose";

const Schema = new mongoose.Schema({
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

export default mongoose.model("ProcessesManagers", Schema);
