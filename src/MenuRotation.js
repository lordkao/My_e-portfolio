const circle = document.getElementById('circle')
const bottomCircle = document.getElementById('bottom-circle')
const rightCircle = document.getElementById('right-circle')
const leftCircle = document.getElementById('left-circle')
const topCircle = document.getElementById('top-circle')

class competences {
    constructor(elt1,elt2,elt3,elt4){
        this.elt1 = elt1
        this.elt2 = elt2
        this.elt3 = elt3
        this.elt4 = elt4
    }
    topLeft(){
        this.elt1.classList.add('text-top-left')
        this.elt2.classList.add('text-top-left')
        this.elt3.classList.add('text-top-left')
        this.elt4.classList.add('text-top-left')
    }
    topRight(){
        this.elt1.classList.add('text-top-right')
        this.elt2.classList.add('text-top-right')
        this.elt3.classList.add('text-top-right')
        this.elt4.classList.add('text-top-right')
    }
    left(){
        this.elt1.classList.add('text-left')
        this.elt2.classList.add('text-left')
        this.elt3.classList.add('text-left')
        this.elt4.classList.add('text-left')
    }
    right(){
        this.elt1.classList.add('text-right')
        this.elt2.classList.add('text-right')
        this.elt3.classList.add('text-right')
        this.elt4.classList.add('text-right')
    }
    removeTopLeft(){
        this.elt1.classList.remove('text-top-left')
        this.elt2.classList.remove('text-top-left')
        this.elt3.classList.remove('text-top-left')
        this.elt4.classList.remove('text-top-left')
    }
    removeTopRight(){
        this.elt1.classList.remove('text-top-right')
        this.elt2.classList.remove('text-top-right')
        this.elt3.classList.remove('text-top-right')
        this.elt4.classList.remove('text-top-right')
    }
    removeLeft(){
        this.elt1.classList.remove('text-left')
        this.elt2.classList.remove('text-left')
        this.elt3.classList.remove('text-left')
        this.elt4.classList.remove('text-left')
    }
    removeRight(){
        this.elt1.classList.remove('text-right')
        this.elt2.classList.remove('text-right')
        this.elt3.classList.remove('text-right')
        this.elt4.classList.remove('text-right')
    }
}
const competenceTop = new competences(bottomCircle,rightCircle,leftCircle,topCircle)
const menu = () => {
    bottomCircle.addEventListener('click',function(){/*ok*/
        if(circle.classList.contains('rotation-right-180')){/*ok*/
            circle.classList.remove('rotation-right-180')
            competenceTop.removeTopLeft()
        }
        else if(circle.classList.contains('rotation-left-180')){/*ok*/
            circle.classList.remove('rotation-left-180')
            competenceTop.removeTopRight()
        }
        else if(circle.classList.contains('rotation-left-90')){/*ok*/
            circle.classList.remove('rotation-left-90')
            circle.classList.add('rotation-left-180')
            competenceTop.removeRight()
            competenceTop.topRight()
        }
        else if(circle.classList.contains('rotation-right-90')){/*ok*/
            circle.classList.remove('rotation-right-90')
            circle.classList.add('rotation-right-180')
            competenceTop.removeLeft()
            competenceTop.topLeft()
        }
        else{/*ok*/
            circle.classList.add('rotation-right-180')
            competenceTop.topLeft()
        }
    })
    rightCircle.addEventListener('click',function(){/*ok*/
        if(circle.classList.contains('rotation-left-90')){/*ok*/
            circle.classList.remove('rotation-left-90')
            competenceTop.removeRight()
        }
        else if(circle.classList.contains('rotation-right-180')){/*ok*/
            circle.classList.remove('rotation-right-180')
            circle.classList.add('rotation-left-90')
            competenceTop.removeTopLeft()
            competenceTop.right()
        }
        else if(circle.classList.contains('rotation-left-180')){/*ok*/
            circle.classList.remove('rotation-left-180')
            circle.classList.add('rotation-left-90')
            competenceTop.removeTopRight()
            competenceTop.right()
        }
        else if(circle.classList.contains('rotation-right-90')){/*ok*/
            circle.classList.remove('rotation-right-90')
            circle.classList.add('rotation-left-90')
            competenceTop.removeLeft()
            competenceTop.right()
        }
        else{/*ok*/
            circle.classList.add('rotation-left-90')
            competenceTop.right()
        }
    })
    leftCircle.addEventListener('click',function(){/*ok*/
        if(circle.classList.contains('rotation-right-90')){/*ok*/
            circle.classList.remove('rotation-right-90')
            competenceTop.removeLeft()
        }
        else if(circle.classList.contains('rotation-right-180')){/*ok*/
            circle.classList.remove('rotation-right-180')
            circle.classList.add('rotation-right-90')
            competenceTop.removeTopLeft()
            competenceTop.left()
        }
        else if(circle.classList.contains('rotation-left-180')){/*ok*/
            circle.classList.remove('rotation-left-180')
            circle.classList.add('rotation-right-90')
            competenceTop.removeTopRight()
            competenceTop.left()
        }
        else if(circle.classList.contains('rotation-left-90')){/*ok*/
            circle.classList.remove('rotation-left-90')
            circle.classList.add('rotation-right-90')
            competenceTop.removeRight()
            competenceTop.left()
        }
        else{/*ok*/
            circle.classList.add('rotation-right-90')
            competenceTop.left()
        }
    })
    topCircle.addEventListener('click',function(){/*ok*/
        circle.classList.remove('rotation-right-180')
        circle.classList.remove('rotation-left-180')
        circle.classList.remove('rotation-left-90')
        circle.classList.remove('rotation-right-90')
        competenceTop.removeTopRight()
        competenceTop.removeTopLeft()
        competenceTop.removeRight()
        competenceTop.removeLeft()
    })
}
export default menu