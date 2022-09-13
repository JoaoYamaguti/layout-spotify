let show = true;

const menuBar = document.querySelector('.menuBar')
menuBar.addEventListener('click', () =>{
    const menu = document.querySelector('.menu')
    menu.classList.toggle('on', show)
    menuBar.classList.toggle('on', show)
    document.body.style.overflow = show? "hidden" : "initial"
    show = !show

})