// connectionstring
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const connectionString = process.env.ATLAS_URI;

//mongo client
const { MongoClient } = require("mongodb");                                                                                                                               
const client = new MongoClient(connectionString);

//project db
const dbName = "CurrVitae";
async function run() {
    try {
        await client.connect();
        console.log("Successfully connected to Atlas");

         const db = client.db(dbName);
         const profile = db.collection("Profile");

        //Create a new document                                                                                                                                           
         let profileDoc = {
             "name": { "first": "Helene","middle": "Øygarden", "last": "Bakken" },
             "birth": new Date(1988, 2, 18),                                                                                                                                                                                                                                                              
             "location": "Horten, Norway",
             "strengths": ["Team Player", "Organized", "Quick Learner"],
             "skills" : ["React", "Chakra UI", "Next.js", "Azure Storage", "Azure App Service", "PostgresSQL", "NextAuth", "Nginx", "Leadership", "Atomic Design", "MySQL", "BurpSuite", "Azure AD", "Material Design UI", "PHP", "Yii", "Scrum", "Vagrant", "Material Design Bootstrap", "Cronjobs", "Git", "Trello", "Vue3", "Jira", "Postman", "HTML", "CSS", "Agile", "JSON", "Rest API", "Mendix"],
             "socials" : [
                 {"icon": "<LinkedIn />", "link": "https:www.linkedin.com/in/helenebakken/", "label": "LinkedIn"},
                 {"icon": "<GitHub />", "link": "https:github.com/eneleh88", "label": "GitHub"},
               ],
         }
        
         const p = await profile.insertOne(profileDoc);
        //Find and return the document
         const filter = { "name.last": "Bakken" };
         const document = await profile.findOne(filter);
         console.log("Document found:\n" + JSON.stringify(document));

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);