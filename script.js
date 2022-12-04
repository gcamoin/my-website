const img = document.createElement("img");
img.src = "https://goremountain.com/wp-content/uploads/sites/4/2020/08/Gondola_blue_sky-3-scaled.jpg"
img.onclick = function() {
    window.location.href = 'https://goremountain.com/'
};
const src = document.getElementById("state 1")
src.appendChild(img);
img.className = "picture1"

const img2 = document.createElement("img")
img2.src = "https://urbansherpatravel.com/images/photos/killington_lift.jpg"
img2.onclick = function() {
    window.location.href = 'https://www.killington.com/'
};
const src2 = document.getElementById("state 2")
src2.appendChild(img2);
img2.className = "picture2"

const img3 = document.createElement("img")
img3.src = "https://www.skimag.com/wp-content/uploads/2020/10/ski1120-rge07-brettonwoods-courtesy-1.jpg"
img3.onclick = function() {
    window.location.href = 'https://www.brettonwoods.com/'
};
const src3 = document.getElementById("state 3")
src3.appendChild(img3);
img3.className = "picture3"

const img4 = document.createElement("img")
img4.src = "https://www.mtnscoop.com/media/images/2018/12/Sugarloaf-1024x478.jpg"
img4.onclick = function() {
    window.location.href = 'https://www.sugarloaf.com/'
};
const src4 = document.getElementById("state 4")
src4.appendChild(img4);
img4.className = "picture4"