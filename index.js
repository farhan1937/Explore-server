// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // MongoDB connection URI
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6u84a8i.mongodb.net/?retryWrites=true&w=majority`;
// // console.log('MongoDB URI:', uri); // Debug log

// // Create a MongoClient
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// // Main function to run the app
// async function run() {
//   try {
//     // Connect to MongoDB
//     await client.connect();
//     console.log("Successfully connected to MongoDB!");

//     // Define the database and collection
//     const touristsCollection = client.db('touristsDB').collection('tourists');

//     // Routes

//     // Get all tourists
//     app.get('/tourists', async (req, res) => {
//       const cursor = touristsCollection.find();
//       const result = await cursor.toArray();
//       res.send(result);
//     });

//     // Get a specific tourist by ID
//     app.get('/tourists/:id', async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: new ObjectId(id) };
//       const result = await touristsCollection.findOne(query);
//       res.send(result);
//     });

//     // Add a new tourist
//     app.post('/tourists', async (req, res) => {
//       const newTourist = req.body;
//       console.log('New Tourist:', newTourist);
//       const result = await touristsCollection.insertOne(newTourist);
//       res.send(result);
//     });

//     // Update a tourist
//     app.put('/tourists/:id', async (req, res) => {
//       const id = req.params.id;
//       const filter = { _id: new ObjectId(id) };
//       const options = { upsert: true };
//       const updatedTourist = req.body;
//       const updateDoc = {
//         $set: {
//           photo: updatedTourist.photo,
//           name: updatedTourist.name,
//           country_Name: updatedTourist.country_Name,
//           location: updatedTourist.location,
//           short_description: updatedTourist.short_description,
//           average_cost: updatedTourist.average_cost,
//           seasonality: updatedTourist.seasonality,
//           travel_time: updatedTourist.travel_time,
//           totalVisitorsPerYear: updatedTourist.totalVisitorsPerYear,
//           user_name: updatedTourist.user_name,
//           User_Email: updatedTourist.User_Email,
//         },
//       };
//       const result = await touristsCollection.updateOne(filter, updateDoc, options);
//       res.send(result);
//     });

//     // Delete a tourist
//     app.delete('/tourists/:id', async (req, res) => {
//       const id = req.params.id;
//       const query = { _id: new ObjectId(id) };
//       const result = await touristsCollection.deleteOne(query);
//       res.send(result);
//     });

//     // Root route
//     app.get('/', (req, res) => {
//       res.send('Tourist management server is running');
//     });

//   } catch (err) {
//     console.error("Error in MongoDB connection or operation:", err);
//   }
// }

// // Run the app
// run().catch(console.dir);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });



const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6u84a8i.mongodb.net/?retryWrites=true&w=majority`;
// console.log('MongoDB URI:', uri); // Debug log
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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    app.get('/tourists', async (req, res) => {
        const cursor = addTourists.find();
        const result = await cursor.toArray();
        res.send(result)
      })

      app.get('/tourists/:id', async (req, res) => {
        const id = req.params.id
        const query = { _id: new ObjectId(id) }
        const result = await addTourists.findOne(query)
        res.send(result)
      })

      app.post('/tourists', async (req, res) => {
        const newCoffee = req.body
        console.log(newCoffee);
        const result = await addTourists.insertOne(newCoffee)
        res.send(result)
        
      })

      app.put('/tourists/:id', async (req, res) => {
        const id = req.params.id
        const filter = { _id: new ObjectId(id) }
        const options = { upsert: true }
        const updateCoffee = req.body
        const coffee = {
          $set: {
            photo: updateTourist.photo,
            name: updateTourist.name,
            country_Name: updateTourist.country_Name,
            location: updateTourist.location,
            short_description: updateTourist.short_description,
            average_cost: updateTourist.average_cost,
            seasonality: updateTourist.seasonality,
            travel_time: updateTourist.travel_time,
            totalVisitorsPerYear: updateTourist.totalVisitorsPerYear,
            user_name: updateTourist.user_name,
            User_Email: updateTourist.User_Email
          }
        }
        const result = await addTourists.updateOne(filter, coffee, options)
        res.send(result)
      })

      app.delete('/tourists/:id', async (req, res) => {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) }
        const result = await addTourists.deleteOne(query);
        res.send(result)
      })
      
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('coffee maker is running ')
  })
  
  
  
  app.listen(port, () => {
    console.log(`Coffee server is running on port: ${port}`);
  })
