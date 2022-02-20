const images = ["kaudo.png", "mountine.jfif", "river.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

console.log(bgImage);

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);