var modal = document.getElementById("modal-wrap");
  function overlay() {

  	modal.style.visibility = (modal.style.visibility == "visible") ? "hidden" : "visible";
  }
  document.addEventListener('keyup', function(e) {
    if (e.keyCode == 27 && modal.style.visibility === "visible") {
        overlay();
      }
});

function hideOverlay(){
modal.style.visibility = (modal.style.visibility == "hidden") ? "visible" : "hidden";
}
