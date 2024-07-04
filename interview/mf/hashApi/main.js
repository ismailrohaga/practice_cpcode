"use strict";

const axios = require("axios");

async function main(argv) {
  /**
   * このコードは引数と標準出力を用いたサンプルコードです。
   * このコードは好きなように編集・削除してもらって構いません。
   *
   * This is a sample code to use arguments and outputs.
   * You can edit and even remove this code as you like.
   */
  if (argv.length === 0) {
    console.error("No query parameter provided. Usage: node main.js <query>");
    process.exit(1);
  }

  const query = argv[0];

  try {
    const response = await axios.get(
      "http://challenge-server.code-check.io/api/hash",
      {
        params: {
          q: query,
        },
      },
    );

    if (response.status === 200) {
      console.log(`Query: ${response.data.q}`);
      console.log(`Hash: ${response.data.hash}`);
    } else {
      console.error(`Unexpected response code: ${response.status}`);
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      console.error("400 Bad Request: Missing or invalid query parameter");
    } else {
      console.error(`Error: ${error.message}`);
    }
  }
}

main(process.argv.slice(2));
