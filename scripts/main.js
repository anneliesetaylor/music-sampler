
let audioDivs = document.querySelectorAll('.audio-div');
let albumCovers = document.querySelectorAll('.albumcovers');

function hideAll() {
  audioDivs.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();


albumCovers.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAll();

    // here is a switch statement to handle opening the right div

    switch (e.target.getAttribute('id')) {
      case 'bcos':
        document.querySelector('#corduroydreams')
        	.style.display = 'block';
        break;
      case 'apricotprincess':
        document.querySelector('#television')
        	.style.display = 'block';
        break;
      case 'pony':
        document.querySelector('#tenten')
        .style.display = 'block';
        break;
      case 'uno':
        document.querySelector('#unosingle')
        .style.display = 'block';
        break;
      case 'bestfriend':
        document.querySelector('#bfsingle')
        .style.display = 'block';
        break;
      case 'sunflower':
        document.querySelector('#sunflowersingle')
        .style.display = 'block';
        break;
    } // end of switch
    // switch does not need default for this

    let players = document.querySelectorAll('audio');
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });


  } // end of function for clicking

}); // end of forEach()
