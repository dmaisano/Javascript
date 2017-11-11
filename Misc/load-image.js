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

export default loadImage;
