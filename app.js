const sharp = require("sharp");
const axios = require("axios");
const fs = require("fs");
require("dotenv").config();

const IMAGE_PATH = "outputs/image.png";

async function createImageWithText() {
  try {
    const width = 750;
    const height = 483;
    const text = "Sammy the Shark";

    const svgImage = `
    <svg width="${width}" height="${height}">
      <style>
      .title { fill: #001; font-size: 70px; font-weight: bold;}
      </style>
      <text x="50%" y="50%" text-anchor="middle" class="title">${text}</text>
    </svg>
    `;
    const svgBuffer = Buffer.from(svgImage);
    await sharp(svgBuffer).toFile(IMAGE_PATH);
  } catch (error) {
    console.log(error);
  }
}

async function uploadImage() {
  const imageAsBase64 = fs.readFileSync(IMAGE_PATH, "base64");

  const imgurRequest = await axios.post(process.env.API, {
    image: imageAsBase64,
  });

  console.log(imgurRequest.data);
}

(async () => {
  await createImageWithText();
  await uploadImage();
})();
