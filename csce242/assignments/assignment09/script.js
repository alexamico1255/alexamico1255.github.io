document.getElementById('start-draw').addEventListener('click', function() {
  var numStars = parseInt(document.getElementById('num-stars').value);
  var blackArea = document.getElementById('black-area');
  var errorMessage = document.getElementById('error-message');
  
  if (numStars <= 0 || isNaN(numStars)) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    blackArea.innerHTML = '';
    
    for (var i = 0; i < numStars; i++) {
      var star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.floor(Math.random() * 480) + 'px';
      star.style.top = Math.floor(Math.random() * 480) + 'px';
      blackArea.appendChild(star);
    }
  }
});

document.getElementById('black-area').addEventListener('click', function(event) {
  if (event.target.classList.contains('star')) {
    alert('You clicked star number ' + (Array.from(event.target.parentNode.children).indexOf(event.target) + 1));
  }
});