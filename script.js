var addfilehidden= document.getElementById("addfile-hidden");
let closefile=document.querySelector("#section-1");
let closefile2=document.querySelector("header");



function addfile() {
  if (addfilehidden.style.display === "block") {
    addfilehidden.style.display = "none";
   

  
  } else{
    addfilehidden.style.display = "block";
    
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
    document.body.style.backgroundColor="transparent"
    
  })