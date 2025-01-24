const input=document.querySelector("input");
const lists=document.querySelectorAll("li");
const addBtn=document.querySelector(".add-btn");
const ul=document.querySelector("ul");
;
   
addBtn.addEventListener("click",function(event){
   let newli=document.createElement("li");
   newli.innerText=input.value
   
   ul.append(newli);
  const deleteBtn=document.createElement("button");
  deleteBtn.classList.add("delete")
   deleteBtn.innerText="delete";
   newli.appendChild(deleteBtn);
   input.value="";
  

}) 
ul.addEventListener("click",function(event){
   if(event.target.nodeName=="BUTTON"){
 let listItem=event.target.parentElement;
 listItem.remove();
   }
})

// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//    let par=this.parentNode
//    par.remove();

// }
//     )
// }