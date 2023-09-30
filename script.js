let arr=[{dp:"https://cdn.pixabay.com/photo/2019/03/03/08/25/rabbit-4031334_640.png",story:"https://cdn.pixabay.com/photo/2022/12/18/13/48/skater-7663466_640.png"},
{dp:"https://cdn.pixabay.com/photo/2022/05/19/19/09/avocado-7207993_640.jpg",story:"https://cdn.pixabay.com/photo/2017/01/31/22/45/boy-2027880_640.png"},
{dp:"https://cdn.pixabay.com/photo/2020/10/23/17/52/fox-5679446_640.png",story:"https://cdn.pixabay.com/photo/2017/12/09/11/40/bride-3007721_640.jpg"},
{dp:"https://cdn.pixabay.com/photo/2018/05/26/18/06/dog-3431913_640.jpg",story:"https://cdn.pixabay.com/photo/2023/01/07/09/05/couple-7702846_640.png"},
{dp:"https://cdn.pixabay.com/photo/2018/02/26/11/13/cat-3182830_640.png",story:"https://cdn.pixabay.com/photo/2022/08/04/16/35/couple-7365040_640.png"}]

let str = document.querySelector('.story')
let st=""
arr.forEach(function(dets,idx){
    st += `<div class="st"><img id="${idx}" src="${dets.dp}" alt=""></div>`
    str.innerHTML=st
})
let stry = document.querySelectorAll('.st')
let full = document.querySelector('.full')
let b = str.className
str.addEventListener("click",function(alem){
    if(alem.target.id !== b){
    let a = arr[alem.target.id].story;
    full.style.display="block";
    full.style.backgroundImage=`url(${a})`;
}
    setTimeout(function(){
        full.style.display="none"
    },3000)
})

