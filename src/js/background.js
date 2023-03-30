const bgImg = document.createElement("img")
const imgArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const randomImgIndex = Math.floor(Math.random() * imgArray.length);

bgImg.src = `img/${randomImgIndex}.jpg`
document.body.appendChild(bgImg)