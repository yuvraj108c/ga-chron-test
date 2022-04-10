const sharp = require("sharp");

async function addTextOnImage() {
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
    const image = await sharp(svgBuffer).toFile("outputs/svg-image.png");
  } catch (error) {
    console.log(error);
  }
}

addTextOnImage();
