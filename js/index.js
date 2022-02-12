let bulb = document.getElementById('bulb')
let text = document.getElementsByClassName('text')
let header = document.getElementById('header');
let click = document.getElementById('click');
let textShadow = document.getElementsByClassName('shadow')
let downloadBtn = document.getElementsByClassName('downloadBtn')

let on = false

function changeStyle(headerCol, textCol, textAnim, clickDis, textShAnim, dBtnVis){

    header.style.color = headerCol;
    text[0].style.color = textCol;
    text[0].style.animation = textAnim;
    click.style.display = clickDis;
    textShadow[0].style.animation = textShAnim;
    downloadBtn[0].style.visibility = dBtnVis;
}


bulb.onclick = function(){
    if(on == false){
        bulb.style.background = 'rgb(36,0,29)';
        bulb.style.background = 'linear-gradient(158deg, rgba(36,0,29,1) 0%, rgba(121,9,64,1) 48%, rgba(0,52,255,1) 100%)';
        changeStyle('white', 'white', 'glow 1s ease-in-out infinite alternate', 'none', 'shadowGlow 1s ease-in-out infinite alternate', 'visible')

        on = true;
    }
    else{
        bulb.style.background = 'rgb(46, 46, 45)';
        changeStyle('rgb(90, 90, 90)', 'rgb(19, 19, 19)', 'none', 'block', 'none', 'hidden');
        on = false
    }
}