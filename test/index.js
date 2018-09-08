// Import stylesheets
import './style.css';

function init() {
  var sceneEl = document.querySelector('a-scene')
  for (var i = 0; i < 6; i++) {
    var boxEl = document.createElement('a-box')
    boxEl.setAttribute('src', '#mTexture')
    sceneEl.appendChild(boxEl)
  }

  console.log('test');

  console.log('aaaaaaaaaaa');
  draw()
}
init()

let t = 0
function draw() {
  t += 1
  var boxes = document.querySelectorAll('a-box')
  for (var i = 0; i < boxes.length; i++) {
    var boxEl = boxes[i]
    var theta = t / 30 + i * Math.PI / 4
    boxEl.object3D.position.x = 2 * Math.sin(theta)
    boxEl.object3D.position.y = 0.5
    boxEl.object3D.position.z = 2 * Math.cos(theta)
  }
  requestAnimationFrame(draw)
}

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;