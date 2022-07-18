import { analyticsApi } from "./externalAPI.js";
////////////////////////////////////////
// Get the latest timestamp from the analytics server
////////////////////////////////////////
async function latestTimestamp(url) {
  let response = [];
  let data = [];
  try {
    let result = await analyticsApi(`${url}/events/query`, [
      {
        query: process.env.ADQL_LATEST_TIMESTAMP,
      },
    ]);
    // console.log(result.data);
    response = await result.data;
    data = response[0].results[0][0];
    return data;
  } catch (error) {
    // console.log("ERROR", "Fetching Latest Time", error.message);
    throw new Error(error.message);
  }
}

export { latestTimestamp };
