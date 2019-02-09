const slack = require("slack-notify")(
    "https://hooks.slack.com/services/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"
);

export const Slack = (type, text, fields, channel = "#processes") => {
    const alerts = ["alert", "bug", "note", "success"];

    if (!alerts.includes(type)) return;

    return slack[type]({ channel, text, fields });
};
