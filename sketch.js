const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 40;

const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let fruit; 

(function setup() {
  snake = new Snake();
  fruit = new Fruit();  
  fruit.choseInitialPlace();

  window.setInterval(() => {
    // moves the rect along instead of adding more
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if(snake.eat(fruit)) {
      fruit.choseInitialPlace();
    }

    snake.collided();
    document.querySelector(".score").innerHTML = snake.total;    
    
  }, 250);
}());

window.addEventListener('keydown', ((evt) => {
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);

  
  
}))