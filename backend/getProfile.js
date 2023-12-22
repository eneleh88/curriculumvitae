// connectionstring
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const connectionString = process.env.ATLAS_URI;

//mongo client
const { MongoClient } = require("mongodb");                                                                                                                               
const client = new MongoClient(connectionString);

//project db
const dbName = "CurrVitae";

async function getProfile() {
  let myProfile;
  try {
    const database = client.db(dbName);
    const profiles = database.collection("Profile");
    const queryBirthDate = new Date(1988, 2, 18);

    myProfile = await profiles.findOne({ birth: queryBirthDate });

    console.log(myProfile);
  } finally {
    await client.close();
  }

  return myProfile;
}
getProfile().catch(console.dir);
module.exports = getProfile;
