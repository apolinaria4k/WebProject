let map_container = document.getElementById('map-container');
let options_map = {
    once: true,//запуск один раз, и удаление наблюдателя сразу
    passive: true,
    capture: true
};

map_container.addEventListener('click', start_lazy_map, options_map);
map_container.addEventListener('mouseover', start_lazy_map, options_map);
map_container.addEventListener('touchstart', start_lazy_map, options_map);
map_container.addEventListener('touchmove', start_lazy_map, options_map);

let map_loaded = false;
function start_lazy_map() {
    if (!map_loaded) {
        let map_block = document.getElementById('ymap_lazy');
        map_loaded = true;
        map_block.setAttribute('src', map_block.getAttribute('data-src'));
        map_block.removeAttribute('data_src');
        console.log('YMAP LOADED');
    }
}


let slider_wrapper = document.querySelector('.slider-wrapper')
let slides = document.querySelectorAll('.slide')
let sliderWidth = document.querySelector('.slider').offsetWidth
let widthArray = [0]
let slider_wrapper_width = 0
let offset = 0
let step = 1
let dot = 1
let slice = 0
let dots = document.querySelectorAll('.dot')


for (let i = 0; i < slides.length; i++){
    widthArray.push(slides[i].offsetWidth)
    slider_wrapper_width += slides[i].offsetWidth
}
slider_wrapper.style.width = slider_wrapper_width +'px'
console.log(widthArray);

let slide_next_btn = document.querySelector('.slide-next')
console.log(slide_next_btn);

slide_next_btn.addEventListener('click', evt=>{
    // console.log('click')
    slice = slider_wrapper_width - sliderWidth - (offset+widthArray[step])
    if(slice>=0){
        offset = offset + widthArray[step]
        slider_wrapper.style.left = -offset + 'px'


        if(dot > 5){
            dots[dot-1].classList.remove('first')
            dot = 0
            dots[dot].classList.add('first')
            dot++
        }
        else{
            dots[dot-1].classList.remove('first')
            dots[dot].classList.add('first')
            dot++
        }


    }else{
        slider_wrapper.style.left = -(slider_wrapper_width - sliderWidth)+'px'
        offset = 0
        step = -1
    }

    

    if(step + 1 == slides.length){
        step = 0
        offset = 0
    }
    else{
        step++;
    }
    
})