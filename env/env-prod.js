process.env.MONGO_URL = "mongodb://process:slack123@ds161794.mlab.com:61794/process"
process.env.env = "prod";

module.exports = () => "prod";