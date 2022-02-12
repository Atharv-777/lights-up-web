let bulb = document.getElementById('bulb')
let text = document.getElementsByClassName('text')
let header = document.getElementById('header');
let click = document.getElementById('click');
let textShadow = document.getElementsByClassName('shadow')

let on = false

bulb.onclick = function(){
    if(on == false){
        bulb.style.background = 'rgb(36,0,29)';
        bulb.style.background = 'linear-gradient(90deg, rgba(36,0,29,1) 0%, rgba(121,9,64,1) 48%, rgba(0,52,255,1) 100%)';
        header.style.color = 'white';
        text[0].style.color = 'white';
        text[0].style.animation = 'glow 1s ease-in-out infinite alternate';
        click.style.display = 'none';
        textShadow[0].style.animation = 'shadowGlow 1s ease-in-out infinite alternate'
        on = true
    }
    else{
        bulb.style.background = 'rgb(46, 46, 45)';
        header.style.color = 'color: rgb(90, 90, 90);';
        text[0].style.color = 'rgb(43, 43, 43)';
        text[0].style.animation = 'none';
        click.style.display = 'block';
        textShadow[0].style.animation = 'none'
        on = false
    }
}