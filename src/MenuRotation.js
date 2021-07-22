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
    suppressionClass(classe){
        this.elt1.classList.remove(classe)
        this.elt2.classList.remove(classe)
        this.elt3.classList.remove(classe)
        this.elt4.classList.remove(classe)
    }
    textOrientation(classe){
        this.elt1.classList.add(classe)
        this.elt2.classList.add(classe)
        this.elt3.classList.add(classe)
        this.elt4.classList.add(classe)
    }
    removeTopLeft(){
        this.suppressionClass('text-top-left')
    }
    removeTopRight(){
        this.suppressionClass('text-top-right')
    }
    removeLeft(){
        this.suppressionClass('text-left')
    }
    removeRight(){
        this.suppressionClass('text-right')
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
            competenceTop.textOrientation('text-top-right')
        }
        else if(circle.classList.contains('rotation-right-90')){/*ok*/
            circle.classList.remove('rotation-right-90')
            circle.classList.add('rotation-right-180')
            competenceTop.removeLeft()
            competenceTop.textOrientation('text-top-left')
        }
        else{/*ok*/
            circle.classList.add('rotation-right-180')
            competenceTop.textOrientation('text-top-left')
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
            competenceTop.textOrientation('text-right')
        }
        else if(circle.classList.contains('rotation-left-180')){/*ok*/
            circle.classList.remove('rotation-left-180')
            circle.classList.add('rotation-left-90')
            competenceTop.removeTopRight()
            competenceTop.textOrientation('text-right')
        }
        else if(circle.classList.contains('rotation-right-90')){/*ok*/
            circle.classList.remove('rotation-right-90')
            circle.classList.add('rotation-left-90')
            competenceTop.removeLeft()
            competenceTop.textOrientation('text-right')
        }
        else{/*ok*/
            circle.classList.add('rotation-left-90')
            competenceTop.textOrientation('text-right')
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
            competenceTop.textOrientation('text-left')
        }
        else if(circle.classList.contains('rotation-left-180')){/*ok*/
            circle.classList.remove('rotation-left-180')
            circle.classList.add('rotation-right-90')
            competenceTop.removeTopRight()
            competenceTop.textOrientation('text-left')
        }
        else if(circle.classList.contains('rotation-left-90')){/*ok*/
            circle.classList.remove('rotation-left-90')
            circle.classList.add('rotation-right-90')
            competenceTop.removeRight()
            competenceTop.textOrientation('text-left')
        }
        else{/*ok*/
            circle.classList.add('rotation-right-90')
            competenceTop.textOrientation('text-left')
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