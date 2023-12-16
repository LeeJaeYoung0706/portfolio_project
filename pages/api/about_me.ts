import {connectDB} from "@/lib/mongo/MongoDBConnection";

export default async function handler() {
  const client = await connectDB;

  const db = client.db('leejaeyoung_portfolio');
  const array = await db.collection('project').find().toArray();

  console.log(array)
}