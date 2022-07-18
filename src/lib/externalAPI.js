import axios from "axios";
import logger from "../startup/logging.js";

////////////////////////////////////////
// AppDynamics API Events Server HTTP Call Function
////////////////////////////////////////

async function analyticsApi(url, payload) {
  try {
    const response = await axios.post(url, JSON.stringify(payload), {
      headers: {
        Accept: "application/vnd.appd.events+json;v=2",
        "Content-Type": "application/vnd.appd.events+json;v=2",
        "X-Events-API-Key": process.env.APPD_EVENTS_API_KEY,
        "X-Events-API-AccountName": process.env.APPD_GLOBAL_ACCOUNT_NAME,
      },
    });
    return response;
  } catch (error) {
    logger.error(error.message);
    throw error;
  }
}

////////////////////////////////////////
// Customer API Call
////////////////////////////////////////

async function customerApi(payload) {
  const extURL = process.env.CUSTOMER_API;
  try {
    payload.forEach(async (obj) => {
      try {
        let response = await axios.post(extURL, JSON.stringify(obj), {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        logger.error(`CUSTOMER API: ${error.message}`);
      }
    });
    return true;
  } catch (error) {
    logger.error(`CUSTOMER API: ${error.message}`);
    return false;
  }
}

export { analyticsApi, customerApi };
