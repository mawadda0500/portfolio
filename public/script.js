
/* jshint esversion: 6 */
 var x = document.querySelector(".intro");
 var y = document.querySelector(".skills");
 var z = document.querySelector(".ed");

const buttons = document.getElementsByTagName('button');
  var buttonss = Array.from(buttons);
  buttonss.forEach( button=> {
      button.addEventListener('click' ,function(e){

  if(e.target.className=='intro-btn'  ){
    x.style.display = "flex";
  } else{
    x.style.display = "none";
  }

      
 
  if(e.target.className=='skills-btn'  ){
    y.style.display = "block";
  } else{
    y.style.display = "none";
  }

      

  
  if(e.target.className=='edu-btn'  ){
    z.style.display = "block";
  } else{
    z.style.display = "none";
  }

      });
      
  });




