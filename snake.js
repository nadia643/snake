function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 40;
  this.yspeed = 0;

  this.draw = function() {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(this.x, this.y, scale, scale)
  }

  this.update = function() {
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
}