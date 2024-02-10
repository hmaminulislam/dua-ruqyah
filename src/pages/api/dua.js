const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    await client.connect();
   
    const duaCollection = await client.db("Ird-Fundation").collection('Dua')

    if (req.method === 'GET') {
      const duas = await duaCollection.find({}).toArray()
      res.send({duas})
    }
    
  } finally {
    
   
  }
}

export default run;