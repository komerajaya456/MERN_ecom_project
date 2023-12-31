const fs=require('fs')
const path=require('path')
const sharp = require('sharp');
console.log("hi")
console.log(__dirname)
const pic=__dirname+'/gk.jpg'
// console.log(fs.readFileSync(__dirname/gk.jpg))
const binpic=(fs.readFileSync(pic))

const base64Data = binpic.toString('base64');
console.log(binpic)
// console.log(base64Data)
const byteSize = Buffer.from(base64Data).length;
console.log(`ganesh pic size ${byteSize}`)


// function base64ToImage(base64String, outputFilePath) {
   
//     const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');

//     // Create a buffer from the Base64 data
//     const buffer = Buffer.from(base64Data, 'base64');

//     // Write the buffer to a file
//     fs.writeFileSync(outputFilePath, buffer);

//     console.log('Image saved to:', outputFilePath);
//     sharp(buffer).toFormat('jpeg').pipe(res, { end: true });
// }

// // Replace 'path/to/save/your/output/photo.jpg' with the desired output path
// const outputPath = __dirname+'/gk2.jpg';

// // Replace 'yourBase64StringHere' with the actual Base64-encoded string
// const base64String = base64Data;

// base64ToImage(base64String, outputPath);
