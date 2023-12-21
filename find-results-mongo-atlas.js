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
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db = client.db(dbName);
    const collection = db.collection('contatti');

    const findAllResult = await collection.find({}).toArray();
    console.log(`CIAO: among all results: `, findAllResult); // NOTE : IDK why is best not to use String Litterals



    const findResult = await collection.findOne({});
    console.log('Found document =>', findResult)
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log("BYE BYE! Connection closed");
  }
}


run().catch(console.dir);

