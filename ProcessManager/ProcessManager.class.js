"use strict";

import mongoose from "mongoose";

mongoose.Promise = global.Promise;

import ProcessesManagers from "./ProcessesManager.model";

import { Slack } from "../Imports/Slack";

export class ProcessManager {
    constructor() {}

    _connect() {
        return mongoose.connect(
            process.env.MONGO_URL ||
                "mongodb://localhost:27017/nucont-process-manager",
            { useNewUrlParser: true }
        );
    }

    /**
     * @public
     * Registra um processo
     * @param {Object} params
     */
    async insert(params = {}) {
        this._connect();

        const process = new ProcessesManagers({
            name: params.name,
            userId: params.userId,
            accountingId: params.accountingId,
            companyId: params.companyId,
            startedAt: new Date(),
            params: params.params
        });

        return await process.save();
    }
    /**
     * @public
     * Atualiza um processo
     * @param {Object} params
     */

    async update(params = {}) {
        this._connect();
        if (params.error) Slack("alert", "Algo de errado", params.error);

        return await ProcessesManagers.update(
            { _id: params._id },

            {
                $set: {
                    finishedAt: new Date(),
                    error: params.error,
                    params: params.error ? params.params : {}
                }
            },
            { new: true }
        );
    }
}
