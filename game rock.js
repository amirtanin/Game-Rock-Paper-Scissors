let imagItem = document.querySelectorAll('.image-item');
let cpuImage = document.querySelectorAll('.image-cpu');
for(let i = 0 ;i <= imagItem.length -1;i ++){
    imagItem[i].addEventListener('click',()=>{
        selectionItem(i);
        randomCpu = Math.floor((Math.random()*10)/4);
        cpuImage[randomCpu].classList.remove('hidden');
        gamelogic(i,randomCpu)
        
        console.log(randomCpu)
        
    })
}

function selectionItem(i){
    for(let j = 0 ;j <= imagItem.length -1;j++){
        if(j !==i){
        imagItem[j].classList.add('hidden');
        }
    }
}
const refreshfunction = ()=>{
    for(let i = 0 ;i <= imagItem.length -1;i ++){
        imagItem[i].classList.remove('hidden');
        cpuImage[i].classList.add('hidden');
    }
}
document.querySelector('#refreshbutton').addEventListener('click',refreshfunction)




document.addEventListener('keydown',(l)=>{
    if(l.key == 'r'){
        refreshfunction();
    }
})
   





function gamelogic(user,cpu){
    let userPoint = document.querySelector('#userscore');
    let cpuPoint = document.querySelector('#cpuscore');
    if (user !== cpu){
        if (user == 0){
            if (cpu == 1){
                userPoint.innerHTML = Number(userPoint.innerHTML)+1
            }else{
                cpuPoint.innerHTML = Number(cpuPoint.innerHTML)+1
            }
        }
        if (user == 1){
            if (cpu == 0){
                cpuPoint.innerHTML = Number(cpuPoint.innerHTML)+1;
            }else{
                userPoint.innerHTML = Number(userPoint.innerHTML)+1
            }
        }
        if (user == 2){
            if (cpu == 0){
                userPoint.innerHTML = Number(userPoint.innerHTML)+1
            }else{
                cpuPoint.innerHTML = Number(cpuPoint.innerHTML)+1;
            }
        }
    }

}