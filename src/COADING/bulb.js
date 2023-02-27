let btn=document.getElementById('togglebtn');
let bulbof=document.getElementById('bulbof');
btn.addEventListener('click', toggleBulb)
function toggleBulb(e){
    if (btn.textContent.includes('on')){
    bulbof.src = "img/bulb_on.jpg";
    btn.textContent="Turn off"
}

else{
    bulbof.src = "img/bulb_of.jpg"
    btn.textContent="Turn on"
    }
}
