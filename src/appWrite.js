const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DB_ID = import.meta.env.VITE_APPWRITE_DB;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION;

import { Client, Databases, Query, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const database = new Databases(client);

export const updateSearchKeyWord = async (searchKeyword, movie) => {
  if (movie.adult) return;
  try {
    const res = await database.listDocuments(DB_ID, COLLECTION_ID, [
      Query.equal("searchKeyword", searchKeyword),
    ]);

    if (res.documents.length > 0) {
      const doc = res.documents[0];
      await database.updateDocument(DB_ID, COLLECTION_ID, doc.$id, {
        count: doc.count + 1,
      });
    } else {
      await database.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
        searchKeyword,
        count: 1,
        movie_id: movie.id,
        adult: movie.adult,
        poster_url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
      });
    }
  } catch (error) {
    console.log("🚀 ~ updateSearchKeyWord ~ error:", error);
  }
};

export const getTrendingList = async () => {
  try {
    const res = await database.listDocuments(DB_ID, COLLECTION_ID, [
      Query.limit(5),
      Query.orderDesc("count"),
    ]);
    console.log(res.documents);
    return res.documents;
  } catch (error) {
    console.error("Error encountered while getTrendingList func", error);
  }
};
