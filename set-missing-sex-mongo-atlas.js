// // imports
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require("dotenv");

dotenv.config();  // Loads variables from `.env` file into `process.env`
// NOTE : Remember to include the `.env` file in your project's version `.gitignore`
const psswrd = process.env.MY_MONGO_ATLAS_PSSWRD;


// variables
const uri = `mongodb+srv://albertocangialosi-node:${psswrd}@eserciziacasa.w9yphbr.mongodb.net/?retryWrites=true&w=majority`;  // NOTE : removing `&w=majority` from connection string // NOTE : LOOOOOL  there was an extra `"` double quote which caused this kind of error, it wasn't `&w=majority` 'S FAULT:
// source :
//    https://stackoverflow.com/questions/65305856/no-write-concern-mode-named-majority-found-in-replica-set-configuration-err
const dbName = 'NodeDB'; // Database Name
const collectionName = "contatti";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    console.log("CIAO: ci stiamo connettendo! ");

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    console.log("CIAO: ci siamo connessi! ");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);


    // with my small collection all female names end in `-a`
    function assignSexByName(nome) {
      console.log("Assignando il genere corretto");
      return nome.endsWith("a") ? "F" : "M";
    }


    // add a field for all with default as "M"
    const setNewGenere = await collection.updateMany(
      // first thing first, finding the documents with missing `sex` field
      { genere: { $exists: false } },
      {
        $set: {
          genere: "M"
        }
      }
    );
    console.log(`${setNewGenere.matchedCount} Documenti Aggiornati =>`, setNewGenere);



    const updateCorrectGenere = await collection.updateMany(
      // let's try a simple filter regex here
      { nome: { $regex: /a$/ } },

      // second, setting a value all "-a" ending name to `F`
      {
        $set: {
          genere: "F"
        }
      }
    );

    console.log(`${updateCorrectGenere.matchedCount} Documenti Aggiornati =>`, updateCorrectGenere);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


run().catch(console.dir);

