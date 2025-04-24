let User = 0;
let Computer = 0;
let choices = document.querySelectorAll(".choice");
function Compgen(){
    let Arr =["rock","paper","scissors"];
    return Arr.at(Math.floor(Math.random()*3))
}
choices.forEach((i)=>{
    i.addEventListener("click",()=>{
        let ID = i.getAttribute("id");
        Game(ID);

    })
})
const Game = (ID)=>{  
   let Gen = Compgen();
     let You =document.getElementById("you");
     let Comp = document.getElementById("comp");
     let Msg = document.getElementById("msg");
   if (ID==Gen){
        Msg.querySelector("p").style.backgroundColor="green"
         Msg.querySelector("p").innerText = `Its a Draw as you both selected ${Gen}`
   }
   else if ((ID =="rock" && Gen =="scissors") || (ID == "scissors" && Gen =="paper") ||(ID == "paper" && Gen =="rock") ){
        User++;
        You.querySelector("h2").innerText = User;
        Msg.querySelector("p").style.backgroundColor="Yellow"
        Msg.querySelector("p").innerText = `You Win as you selected ${ID} and computer selected ${Gen}`
   }
   else{
    Computer++;
    Comp.querySelector("h2").innerText = Computer;
    Msg.querySelector("p").style.backgroundColor="red"
    Msg.querySelector("p").innerText = `You Lose as you selected ${ID} and computer selected ${Gen}`
   }
}


