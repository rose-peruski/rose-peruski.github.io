// let buttons = document.querySelectorAll('.ml-2 button')
//     console.log("there are " + buttons.length);
//     console.log(buttons[1].id)

// let buttonIds = [];
//  for (i=0; i<buttons.length; i++){
//     buttonIds[i] = buttons[i].id;
// }

// console.log(buttonIds[1]);

// let h2s = document.querySelectorAll('.ml-2 h2')
//     console.log("there are " + h2s.length);
//     console.log(h2s[1].id)

 
 
// function focusMove(id1, id2){
//     document.getElementById(id1).addEventListener("click", () => {
//         document.getElementById(id2).focus();
//       });
    
//  }   

//     for (i=0; i<buttons.length; i++){
       
//     }


 function previousSlide(id1, id2){
    id1.classList.add('hidden');
    id2.classList.remove('hidden');
}

function nextSlide(x, y) {
    x.classList.add('hidden');
    y.classList.remove('hidden');
}

// function () {

// }
//beginning slide
document.getElementById("slide1button").addEventListener("click", () => {
    document.getElementById("head1").focus();
  });

  document.getElementById("previous1").addEventListener("click", () => {
    document.getElementById("head0").focus();
  });

  //intro
  document.getElementById("next1").addEventListener("click", () => {
    document.getElementById("head2").focus();
  });

  //the need
  document.getElementById("previous2").addEventListener("click", () => {
    document.getElementById("head1").focus();
  });

  document.getElementById("next2").addEventListener("click", () => {
    document.getElementById("head3").focus();
  });
//Past trainings
  document.getElementById("previous3").addEventListener("click", () => {
    document.getElementById("head2").focus();
  });

  document.getElementById("next3").addEventListener("click", () => {
    document.getElementById("head4").focus();
  });
//intro snack talk
  document.getElementById("previous4").addEventListener("click", () => {
    document.getElementById("head3").focus();
  });

  document.getElementById("next4").addEventListener("click", () => {
    document.getElementById("head5").focus();
  });
// format
  document.getElementById("previous5").addEventListener("click", () => {
    document.getElementById("head4").focus();
  });

  document.getElementById("next5").addEventListener("click", () => {
    document.getElementById("head6").focus();
  });
//
  document.getElementById("previous6").addEventListener("click", () => {
    document.getElementById("head5").focus();
  });

  document.getElementById("next6").addEventListener("click", () => {
    document.getElementById("head7").focus();
});
//
  document.getElementById("previous7").addEventListener("click", () => {
    document.getElementById("head6").focus();
  });

  document.getElementById("next7").addEventListener("click", () => {
    document.getElementById("head8").focus();
});
//
  document.getElementById("previous8").addEventListener("click", () => {
    document.getElementById("head7").focus();
  });

  document.getElementById("next8").addEventListener("click", () => {
    document.getElementById("head9").focus();

});
  document.getElementById("previous9").addEventListener("click", () => {
    document.getElementById("head8").focus();
  });

  document.getElementById("next8").addEventListener("click", () => {
    document.getElementById("head0").focus();

});
// function slide4View(){
//     let  x = document.getElementById("slide4");
//     x.classList.remove("hidden");
//     let y = document.getElementById("slide3");
//     y.classList.add("hidden");
// }

// function slide5View(){
//     let  x = document.getElementById("slide5");
//     x.classList.remove("hidden");
//     let y = document.getElementById("slide4");
//     y.classList.add("hidden");
// }

// function slide6View(){
//     let  x = document.getElementById("slide6");
//     x.classList.remove("hidden");
//     let y = document.getElementById("slide5");
//     y.classList.add("hidden");
// }

// function slide7View(){
//     let  x = document.getElementById("slide7");
//     x.classList.remove("hidden");
//     let y = document.getElementById("slide6");
//     y.classList.add("hidden");
// }

// function slide8View(){
//     let  x = document.getElementById("slide8");
//     x.classList.remove("hidden");
//     let y = document.getElementById("slide7");
//     y.classList.add("hidden");
// }

