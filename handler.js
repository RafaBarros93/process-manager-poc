"use strict";

function hello(params) {
    const slack = ["Slack", "Country", "State"];

    let result = Math.floor(params.value);

    const process = {
        mensage: params.mensage,
        channel: params.channel,
        slack: slack,
        value: result
    };

    return process;
}

exports.hello = hello;
