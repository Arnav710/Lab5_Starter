// expose.js

window.addEventListener('DOMContentLoaded', init);

function select_horn(event){

  // get the horn selected from the dropdown
  let horn_type = event.target.value;

  // select the image tag and update "src" with the image path of selected horn
  let image = document.querySelector('img');
  let image_path = 'assets/images/' + String(horn_type) + '.svg';
  image.setAttribute("src", image_path);

  // select the audio tag and update the "src" with the audio path of the selected horn
  let audio = document.querySelector('audio')
  let audio_path = 'assets/audio/' + String(horn_type) + '.mp3';
  audio.setAttribute("src", audio_path)
}

function init() {
  
  let dropdown = document.querySelector('select')
  dropdown.addEventListener('change', event => select_horn(event))
}