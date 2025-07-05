let btn=document.querySelector("#btn");
let body=document.querySelector("body");
let currmode="light"
btn.addEventListener("click",() => {
    if(currmode=== "light"){
        currmode="dark";
        body.classList.add("light");
        body.classList.remove("dark");
    } else{
        currmode ="light";
        body.classList.add("dark");
        body.classList.remove("light");
    }
     console.log(currmode);
});
