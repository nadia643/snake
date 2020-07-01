function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 40;
  this.yspeed = 0;
  this.total = 0;
  // this array stores the co-ords of where the snake is
  this.tail = [];

  this.draw = function() {
    ctx.fillStyle = "#FFFFFF";

    // loop through the tatil below and draw each rect
    for(let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale)

    }

    ctx.fillRect(this.x, this.y, scale, scale)
  }

  this.update = function() {
    // go throught he snake's tail adn shift it to the left
    for(let i=0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    // this.total is the amount of fruit we've eaten
    this.tail[this.total - 1] = { x: this.x, y: this.y };

    this.x += this.xspeed;
    this.y += this.yspeed;

    if(this.x > canvas.width) {
      this.x = 0;
    }
    if(this.y > canvas.height) {
      this.y = 0;
    }
    if(this.x < 0) {
      this.x = canvas.width;
    }
    if(this.y < 0) {
      this.y = canvas.height;
    }
    
  }


  // has an argument of direction and has 4 possible cases
  this.changeDirection = function(direction) {
    switch(direction) {
      case 'Up':
        this.xspeed = 0;
        this.yspeed = - scale *1;
        break;
        case 'Down':
        this.xspeed = 0;
        this.yspeed = scale *1;
        break;
        case 'Left':
        this.xspeed = -scale *1;
        this.yspeed = 0;
        break;
        case 'Right':
        this.xspeed = scale *1;
        this.yspeed = 0;
        break;
    }
  }

  this.eat = function(fruit) {
    if((this.x === fruit.x) && (this.y === fruit.y)) {
      this.total++;
      return true;
    }
    return false
  }
  
  this.collided = function() {
    // for every section of the tail, must check if the head is colliding with it
    for(let i = 0; i < this.tail.length; i++) {
      if(this.x === this.tail[i].x && this.y === this.tail[i].y) {
        this.total = 0;
        this.tail = [];
        
      }
    }
  }
}