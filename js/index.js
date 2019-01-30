

for(var i = 0 ; i < document.querySelectorAll(".drum").length ; i++ ) {
    document.querySelectorAll(".drum")[i].addEventListener("click" , function () {
    //alert("Button is clicked mate") ;

    playSound(this.innerHTML) ;

  }) ;
}

document.addEventListener("keydown" , function(e) {
   playSound(e.key) ;

}) ;


function playSound(keyToPlay) {
  switch(keyToPlay) {
    case 'w':
      var audio = new Audio('sounds/crash.mp3') ;
      audio.play() ;
      break ;
      case 'a':
        audio = new Audio('sounds/kick-bass.mp3') ;
        audio.play() ;
        break ;
      case 's':
        audio = new Audio('sounds/snare.mp3') ;
        audio.play() ;
        break ;
      case 'd':
        audio = new Audio('sounds/tom-1.mp3') ;
        audio.play() ;
        break ;
      case 'j':
        audio = new Audio('sounds/tom-2.mp3') ;
        audio.play() ;
        break ;
      case 'k':
          audio = new Audio('sounds/tom-3.mp3') ;
          audio.play() ;
          break ;
      case 'l':
          audio = new Audio('sounds/tom-4.mp3') ;
          audio.play() ;
          break ;
      default:
        break ;
  }
}
