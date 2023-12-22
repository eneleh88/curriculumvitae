// connectionstring
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const connectionString = process.env.ATLAS_URI;

//mongo client
const { MongoClient } = require("mongodb");                                                                                                                               
const client = new MongoClient(connectionString);

async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);