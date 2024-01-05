document.addEventListener('DOMContentLoaded', () => {
    var scene = document.querySelector('.toutDedans')
    var rotate = 0

    window.addEventListener('keydown', (e) => {
        if(e.key == 'q'){
            rotate--
            scene.style.transform = 'rotateY(' + rotate + 'deg)'

        }else if(e.key == 'd'){
            rotate++
            scene.style.transform = 'rotateY(' + rotate + 'deg)'
        }else if(e.key == 'r'){
            scene.style.animation = 'none'
        }
    })


    var villager = document.getElementsByClassName('villager')
    var VillagerBody = document.querySelector('.corps')
    console.log(VillagerBody)
    VillagerBody.addEventListener('click', () => {
        alert('UN EMERAUDE')
    })

})