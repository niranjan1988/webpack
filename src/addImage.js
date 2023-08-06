import kiwi from "./../assets/kiwi.png";

function addImage() {
    const image = document.createElement('img');
    image.width = 500;
    image.src = kiwi;

    const body = document.querySelector("body");
    body.appendChild(image);
}
export default addImage;
