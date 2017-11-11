// const poly = require('babelify-es6-polyfill');

let loadImage = (url) => {
  return new Promise( (resolve, reject) => {
    let image = new Image();

    image.onload = () => resolve(image);

    image.onerror = () => {
      let msg = `Could not load image at ${url}`;

      reject(new Error(msg));
    }

    image.src = url;
  });
}

let addImg = (src) => {
  let imgElem = document.createElement("img");
  imgElem.src = src;
  document.body.appendChild(imgElem);
}

let images = [
  'https://deathtothestockphoto.com/wp-content/uploads/Death_to_Stock_Photography_RideorDie_14-1024x683.jpeg',
  'https://deathtothestockphoto.com/wp-content/uploads/MS16_DTS_Tactile-7-1024x683.jpeg',
  'https://deathtothestockphoto.com/wp-content/uploads/Death_to_stock_photography_wild_11-1024x683.jpeg',
  'https://deathtothestockphoto.com/wp-content/uploads/SAM_0958-1024x683.jpeg',
  'https://entropy/src/I-don\'t-exist.jpeg'
];

Promise.all([
  loadImage(images[0]),
  loadImage(images[1]),
  loadImage(images[2]),
  loadImage(images[3]),
  // loadImage(images[4]) // will throw an error as per the promise reject implemented in loadImage()
]).then( (images) => {
  console.log(images);

  images.forEach(img => addImg(img.src))
}).catch( (error) => {
  console.log(error);
});
