
// when user hover on the picture the sound of the animal plays
  // when user hover on the picture the second picture appear.
  
  const setNewImage = () => {
    document.getElementById("elephant").src="images/elephant3.png";
    console.log('me')
  }
  
  const setOldImage = () => {
    document.getElementById("elephant").src="images/elephant.png";
   }
  
  const setNewImage1 = () => {
    document.getElementById("bear").src="images/bear3.png";
  }
  
  const setOldImage1 = () => {
    document.getElementById("bear").src="images/Bear.png";
  }
  
  const setNewImage2 = () => {
    document.getElementById("lion").src="images/lion3.png";
  }
  
  const setOldImage2 = () => {
    document.getElementById("lion").src="images/Lion.png";
  }
 
  const setNewImage4 = () => {
    document.getElementById("gorilla").src="images/gorilla3.png";
  }
  
  const setOldImage4 = () => {
    document.getElementById("gorilla").src="images/gorilla2.png";
  }

  
  var numberOfAnmials = document.querySelectorAll(".pics").length;

  for (var i = 0; i < numberOfAnmials; i++) {
  
    document.querySelectorAll(".pics")[i].addEventListener("hover", function() {
  
      var imgInnerHTML = this.innerHTML;
  
      makeSound(imgInnerHTML);
  
      imgAnimation(imgInnerHTML);
  
    });
  
  }
  
  document.addEventListener("keypress", function(event) {
  
    makeSound(event.key);
  
    imgAnimation(event.key);
  
  });
  
  
  function playSound(key) {
    switch (key) {


      case "elephant":
        var tom1 = new Audio("https://www.google.com/logos/fnbx/animal_sounds/elephant.mp3");
        tom1.play();
        break;
  
      case "bear":
        var tom2 = new Audio("");
        tom2.play();
        break;
  
      case "lion":
        var tom3 = new Audio("https://www.google.com/logos/fnbx/animal_sounds/lion.mp3");
        tom3.play();
        break;
  
      case "gorilla":
        var tom4 = new Audio('https://sounds.pond5.com/gorillas-roar-sound-effect-236195713_nw_prev.m4a');
        tom4.play();
        break;
  
   
  
      default: console.log(key);
  
    }
    
  }
 
  const loginClick = (event) => {
    event.preventDefault();

};  
const registerClick = (event) => {
  event.preventDefault();
}



 