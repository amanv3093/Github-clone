var addfilehidden= document.getElementById("addfile-hidden");
let closefile=document.querySelector("#section-1");
let closefile2=document.querySelector("header");

function menuopen2() {
  var menuopen2 = document.getElementById("openmenu2");
  if (menuopen2.style.display === "block") {
    menuopen2.style.display = "none";
    document.body.style.backgroundColor="transparent";
    
  } else {
    menuopen2.style.display = "block";
    document.body.style.backgroundColor="rgba(175, 184, 193, 0.2)"
   closefile2.style.backgroundColor="transparent";
  }
}
function menuopen() {
          var menuopen = document.getElementById("openmenu");
          if (menuopen.style.display === "block") {
            menuopen.style.display = "none";
            document.body.style.backgroundColor="transparent"
          } else {
            menuopen.style.display = "block";
            document.body.style.backgroundColor="rgba(175, 184, 193, 0.2)"
           closefile2.style.backgroundColor="transparent";
          }
        }
function addfile() {
  if (addfilehidden.style.display === "block") {
    addfilehidden.style.display = "none";
   
   } else{
    addfilehidden.style.display = "block";
    
  }
 
}

let commandpalet1=document.querySelector("#command-plalette-003");

 function commandpalet(){

  if(commandpalet1.style.display==="block"){
    commandpalet1.style.display="none";
    
    document.body.style.backgroundColor="transparent"

  }else{
    commandpalet1.style.display="block";
    document.body.style.backgroundColor="rgba(175, 184, 193, 0.2)"
    closefile2.style.backgroundColor="transparent";
    
  }
 }

  // Search label
  let search00122=document.querySelector("#search-00122");
  function searchlabel() {
    if (search00122.style.display === "block") {
      search00122.style.display = "none";
      document.body.style.backgroundColor="transparent"
    } else{
      search00122.style.display = "block";
      document.body.style.backgroundColor="rgba(175, 184, 193, 0.2)"
      closefile2.style.backgroundColor="transparent";
      
    }
   
  }
  
  closefile.addEventListener("click",()=>{
    addfilehidden.style.display = "none";
    search00122.style.display = "none";
    commandpalet1.style.display="none"
   
    document.body.style.backgroundColor="transparent"
    
  })

  closefile2.addEventListener("click",(e)=>{
    console.log("run")
    // addfilehidden.style.display = "none";
    // search00122.style.display = "none";
    // document.body.style.backgroundColor="transparent"
    if(!(e.target.classList.contains("create-file0032"))){
      console.log("not")
addfilehidden.style.display="none";
// commandpalet1.style.display="none";
// search00122.style.display="none";
// document.body.style.backgroundColor="transparent"

    }
  })
  // create-file-2
  // create-file0032