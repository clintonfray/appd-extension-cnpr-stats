import dotenv from "dotenv";
import { analyticsApi, customerApi } from "./lib/externalAPI.js";
import { latestTimestamp } from "./lib/lastestTimestamp.js";
import logger from "./startup/logging.js";

dotenv.config();

// get the current datetime
const currentDate = new Date(Date.now());
const currentTimestamp = Math.floor(currentDate.getTime());

let startDate = 0;
let endDate = 0;
let timestamp = 0;
let response = "";

logger.info(`PROCESS STARTED`);

async function subscribe() {
  logger.info("###################################################");
  // Set URL Parameters for the API Events Service
  const url = process.env.APPD_ANALYTICS_URL;
  const body = [{ query: process.env.ADQL_QUERY }];

  // Update Time Range with data from the Analytics Endpoint Data

  try {
    logger.info("TIMESTAMP: STARTED");
    endDate = await latestTimestamp(url);
  } catch (error) {
    logger.error(`TIMESTAMP: ERROR - ${error.message}`);
    await new Promise((resolve) =>
      setTimeout(resolve, process.env.WAIT_TIMEOUT)
    );
    await subscribe();
  }

  if (startDate === 0) {
    startDate = endDate;
  }

  if (endDate === 0) {
    await new Promise((resolve) =>
      setTimeout(resolve, process.env.WAIT_TIMEOUT)
    );
    await subscribe();
  }

  logger.info(
    `START DATE ${new Date(startDate)} ${new Date(startDate).getTime()}`
  );
  logger.info(`END DATE ${new Date(endDate)} ${new Date(endDate).getTime()}`);

  if (startDate === endDate) {
    logger.info("ANALYTICS: NO DATA");
    await new Promise((resolve) =>
      setTimeout(resolve, process.env.WAIT_TIMEOUT)
    );
    await subscribe();
  }
  ////////////////////////////////////////
  // Enabling the long-polling process on the data
  ////////////////////////////////////////

  try {
    logger.info("ANALYTICS: GET DATA");
    response = await analyticsApi(
      `${url}/events/query?start=${startDate}&end=${endDate}`,
      body
    );
  } catch (error) {
    logger.error(`ANALYTICS: ERROR - ${error.message}`);
    await new Promise((resolve) =>
      setTimeout(resolve, process.env.WAIT_TIMEOUT)
    );
    await subscribe();
  }

  switch (response.status) {
    // Status 502 is a connection timeout error,
    // may happen when the connection was pending for too long,
    // and the remote server or a proxy closed it
    // let's reconnect
    case 502:
      logger.error(`ANALYTICS: ERROR - ${response.statusText}`);
      await new Promise((resolve) =>
        setTimeout(resolve, process.env.WAIT_TIMEOUT)
      );
      await subscribe();

    // Successfull Connection
    case 200:
      // Get the data and format it into an array of objects
      const data = await response.data;

      if ("error" in data[0]) {
        logger.error(`ANALYTICS: ERROR IN DATA`);
        await new Promise((resolve) =>
          setTimeout(resolve, process.env.WAIT_TIMEOUT)
        );
        await subscribe();
      }

      const results = data[0].results;
      const fields = data[0].fields;

      startDate = endDate;

      if (results.length > 0) {
        let payload = [];
        results.forEach((row) => {
          let newRow = {};
          row.forEach((val, index) => {
            newRow[fields[index].label] = val;
          });
          payload.push(newRow);
        });

        // Push Data to external URL

        let customerResponse = await customerApi(payload);
        // list the payload on the screen
        if (customerResponse) {
          logger.info(`${payload.length} Record(s) Received`);
        }
      }

      // Restart Polling Process
      await new Promise((resolve) =>
        setTimeout(resolve, process.env.WAIT_TIMEOUT)
      );
      await subscribe();

    default:
      logger.error(response.statusText);
      // Reconnect based on TIMEOUT
      await new Promise((resolve) =>
        setTimeout(resolve, process.env.WAIT_TIMEOUT)
      );
      await subscribe();
  }
}

subscribe();
