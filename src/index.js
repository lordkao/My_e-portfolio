const circle = document.getElementById('circle')
const bottomCircle = document.getElementById('bottom-circle')
const rightCircle = document.getElementById('right-circle')
const leftCircle = document.getElementById('left-circle')
const topCircle = document.getElementById('top-circle')

bottomCircle.addEventListener('click',function(){
    if(circle.classList.contains('rotation-right-180')){
        circle.classList.remove('rotation-right-180')
    }
    else{
        circle.classList.add('rotation-right-180')
    }
})
rightCircle.addEventListener('click',function(){
    if(circle.classList.contains('rotation-left-90')){
        circle.classList.remove('rotation-left-90')
    }
    else{
        circle.classList.add('rotation-left-90')
    }
})
leftCircle.addEventListener('click',function(){
    if(circle.classList.contains('rotation-right-90')){
        circle.classList.remove('rotation-right-90')
    }
    else{
        circle.classList.add('rotation-right-90')
    }
})
topCircle.addEventListener('click',function(){
    circle.classList.remove('rotation-right-180')
    circle.classList.remove('rotation-left-90')
    circle.classList.remove('rotation-right-90')
})