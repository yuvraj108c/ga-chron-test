const axios = require("axios");

async function getIpAddress() {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    console.log(response.data.ip);
  } catch (error) {
    console.log(error);
  }
}

getIpAddress();
