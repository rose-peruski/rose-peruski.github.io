


let h2s = document.querySelectorAll('.ml-2 h2')
    console.log("there are " + h2s.length);
    console.log(h2s[1].id)

 
 



 function previousSlide(id1, id2){
    id1.classList.add('hidden');
    id2.classList.remove('hidden');
    pageTitle(id2);
}

function nextSlide(x, y) {
    x.classList.add('hidden');
    y.classList.remove('hidden');
    pageTitle(y);
}

function pageTitle(id1) {
  console.log(id1.id);
  newID = id1.id;
  newID = newID.slice(5)-1;
  h2Text = h2s[newID].innerHTML;
  //h2ID = h2.id[newID.slice(5,5)]
  //newID = newID.slice()
  
  document.title = h2Text + " - Snack Talk"
 // document.title=
}
//beginning slide
document.getElementById("next0").addEventListener("click", () => {
    document.getElementById("head1").focus();
  });

  document.getElementById("previous1").addEventListener("click", () => {
    document.getElementById("head0").focus();
    console.log("I hit it")
  });

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

  document.getElementById("next9").addEventListener("click", () => {
    document.getElementById("head10").focus();

});

document.getElementById("previous10").addEventListener("click", () => {
  document.getElementById("head9").focus();
});

document.getElementById("next10").addEventListener("click", () => {
  document.getElementById("head0").focus();

});
