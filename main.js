
function spawnImage(){
const images = ['image1.png', 'image2.png', 'image3.png'];

const index = Math.floor(Math.random()*images.length);

const newIMG = document.createElement('img');


newIMG.src = chrome.runtime.getURL('images/'+ images[index]);

// position fixed
newIMG.style.position = "fixed";
// top random
newIMG.style.top = `${Math.random()*100}%`
// bottom random
newIMG.style.left = `${Math.random()*100}%`
// add z axis to a million so it is above everything
newIMG.style.zIndex = 1000000;

document.body.appendChild(newIMG);


newIMG.animate([{transform: "scale(0)", opacity: "0"}, {transform: "scale(1)", opacity: "1"}], {duration: 500, easing: "ease-out"});



newIMG.addEventListener('click', () => {
    newIMG.animate([{transform: "scale(1)", opacity: "1"}, {transform: "scale(0)", opacity: "0"}], {duration: 250, easing: "ease-in"});
    newIMG.remove();
})

}
// spawnImage func, will be called, async at a set interval;
setInterval(spawnImage, 1000);