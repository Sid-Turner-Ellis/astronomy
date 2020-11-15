"use strict"
function print(val){
    console.log(val)
}



//Max words for blog functions
let headerTexts = document.querySelectorAll(".gridwrapper .card p")
for(let i = 0; i<headerTexts.length ; i++){

    let shortText = reduceWords(headerTexts[i].textContent,30)
    headerTexts[i].textContent = shortText
   
}
function reduceWords(str,leng){
    return str.split(" ").slice(0,leng).join(" ") + "...";
  }

//read more button
let blogCards = document.querySelectorAll("#hov p")

for(let i = 0; i<blogCards.length;i++){
    let readBtn = document.createElement("p")
    readBtn.textContent = "Read More"
    readBtn.className = "readBtnClass"
    blogCards[i].appendChild(readBtn)

}



////Image gallery modal

let modal = document.querySelector(".galleryModal")
let gridWrapper = document.querySelectorAll(".Portfolio .wrapper div")
let shownImage = document.getElementById("modalImage")
let imageSrcNum;

gridWrapper.forEach((v,i)=>{
    gridWrapper[i].addEventListener("click",openModal)
})

function openModal(e){
    imageSrcNum = +e.target.className.replace(/[^1234567890]/gi,"")
    updateImg()
    modal.style.display = ""
}
if(modal){
    modal.addEventListener("click",modalFunc)

}

function modalFunc(e){
    if(e.target.className == "galleryModal"){
    modal.style.display = "none"
    }
    if(e.target.id == "right"){
        imageSrcNum++;
        imageSrcNum = imageSrcNum == 36 ? 30 : imageSrcNum
        updateImg()
        print(imageSrcNum)

    }
    if(e.target.id == "left"){
        imageSrcNum--;
        imageSrcNum = imageSrcNum == 29 ? 35 : imageSrcNum
        updateImg()
        print(imageSrcNum)
    }
}

function updateImg(){
    shownImage.src = `Images/${imageSrcNum}.jpg`

}


//list modal
let listmodal = document.querySelector(".modalBurg")
let burg = document.querySelector(".burg")
if(listmodal && burg){
    burg.addEventListener("click",openburg)
    listmodal.addEventListener("click",closeIt)
}


function openburg(e){
    listmodal.style.display = ""
}
function closeIt(e){
    if(e.target.className == "modalBurg"){
    listmodal.style.display = "none"
    }
}