import {MongoClient} from "mongodb";


const url = `mongodb+srv://${process.env.mongodb_id}:${process.env.mongodb_pwd}@cluster0.oqan7ou.mongodb.net/?retryWrites=true&w=majority`;

let connectDB: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url).connect()
}


export {connectDB}