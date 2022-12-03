const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');
const bgColor = document.querySelector('header')


toggle.addEventListener('click', (e)=>{
    e.preventDefault()
    const visibility = nav.getAttribute('data-visible')
    if(visibility === 'false'){
        bgColor.classList.add('wrapper-bgColor')
        nav.setAttribute('data-visible', true)
        toggle.setAttribute('aria-expanded', true)
    }else{
        bgColor.classList.remove('wrapper-bgColor')
        nav.setAttribute('data-visible', false)
        toggle.setAttribute('aria-expanded', false)
    }
})