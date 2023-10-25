const One=document.getElementById("one")
const Two=document.getElementById("two")
const Three=document.getElementById("three")
const Four=document.getElementById("four")
const FIve=document.getElementById("five")
const Six=document.getElementById("six")
const General=document.getElementById("colors__wrapper")
console.log(One,Two,)



One.addEventListener("click",()=>{window.localStorage.setItem("site_theme","34313D"),One.innerText="chosen"})
Two.addEventListener("click",()=>{window.localStorage.setItem("site_theme","3A3054"),Two.innerText="chosen"} )
Three.addEventListener("click",()=>{window.localStorage.setItem("site_theme","4B3F6B"),Three.innerText="chosen"} )
Four.addEventListener("click",()=>{window.localStorage.setItem("site_theme","4B3F6B"),Four.innerText="chosen"} )
FIve.addEventListener("click",()=>{window.localStorage.setItem("site_theme","EFF1F7"),FIve.innerText="chosen" })
Six.addEventListener("click",()=>{window.localStorage.setItem("site_theme","2BD0D0"),Six.innerText="chosen"} )