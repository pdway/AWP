var count = 0;
var count1 = 0;
function likecount() {
    let likecount = document.querySelector("#like1");
    count++;
    likecount.innerHTML = count;
}

function dislikecount() {
    let dislikecount = document.querySelector("#like2");
    count--;

}

function ipbox() {
    let boxvalue = document.querySelector("#ip1").value;

}