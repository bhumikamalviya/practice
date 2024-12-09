const buttons = document.querySelectorAll(".btn");
const btnlength = buttons.length;

for(let i = 0 ; i<btnlength ; i++){
  document.querySelectorAll(".btn")[i].addEventListener("click", ()=>{
      var styletext = document.querySelectorAll(".btn")[i].innerHTML;
      sound(styletext);
      animation(styletext);
  })
}


document.addEventListener("keypress",(event)=>{
    sound(event.key);
    animation(event.key);
});

function sound(key){
    switch(key){
        case "a" : 
        var sound1 = new Audio("guitar-purgatory-255374.mp3");
        sound1.play();
        break;
             
          case "b" : console.log("malviya");          
        break;

          case "w" : 
        break;

          case "j" : 
        break;

          case "k" : 
        break;

          case "l" : 
        break;
    }
}
function animation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (activeButton) {
      activeButton.classList.add("animation");
      setTimeout(() => {
          activeButton.classList.remove("animation");
      }, 100);
  } else {
      console.warn("No button found for key:", currentKey);
  }
}
