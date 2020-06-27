const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 40;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

(function setup() {
  snake = new Snake();
  

  window.setInterval(() => {
    // moves the rect along instead of adding more
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.update();
    snake.draw();
  }, 250);
}());

window.addEventListener('keydown', ((evt) => {
  console.log(evt);
  const direction = evt.key.replace('Arrow', '');
  console.log(direction);
  snake.changeDirection(direction);
  
  
}))