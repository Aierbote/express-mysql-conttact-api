// // imports
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require("dotenv");

dotenv.config(); // Loads variables from `.env` file into `process.env`
// NOTE : Remember to include the `.env` file in your project's version `.gitignore`
const psswrd = process.env.MY_MONGO_ATLAS_PSSWRD;



// variables
const uri = `mongodb+srv://albertocangialosi-node:${psswrd}@eserciziacasa.w9yphbr.mongodb.net/?retryWrites=true&w=majority"`;
const dbName = 'NodeDB'; // Database Name

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
    console.log("CIAO: connecting... ");

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    console.log("CIAO: connected! ");

    const db = client.db(dbName);
    const collection = db.collection('contatti');

    const findSomeResult = await collection.find(
      {},
      { projection: { _id: 0, nome: 1 } }
    ).sort(
      { nome: 1 }
    ).toArray();

    console.log(`Elencando: \n`, findSomeResult);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log("BYE BYE! Connection closed");
  }
}


run().catch(console.dir);

