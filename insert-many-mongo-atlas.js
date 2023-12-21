// // imports
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require("dotenv");

dotenv.config();  // Loads variables from `.env` file into `process.env`
// NOTE : Remember to include the `.env` file in your project's version `.gitignore`
const psswrd = process.env.MY_MONGO_ATLAS_PSSWRD;


// variables
const uri = `mongodb+srv://albertocangialosi-node:${psswrd}@eserciziacasa.w9yphbr.mongodb.net/?retryWrites=true&w=majority"`;
const dbName = 'NodeDB'; // Database Name
const collectionName = "contatti";
const manyPeople = [
  {
    "nome": "Rita",
    "telefono": "222775588",
    "email": "rita@cat.com"
  },
  {
    "nome": "Fatima",
    "telefono": "888661144",
    "email": "fatima@change.com"
  },
  {
    "nome": "Erika",
    "telefono": "434535636",
    "email": "erika@cim.com"
  },
  {
    "nome": "Chiara",
    "telefono": "1234509876",
    "email": "chiara@fer.com"
  },
];

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

    const insertResult = await collection.insertMany(manyPeople);
    console.log(`${manyPeople.length} Documenti inseriti =>`, insertResult);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


run().catch(console.dir);

