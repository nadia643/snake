function Fruit() {
  this.x;
  this.y;

  // the function makes the square flash diff colours
  // function getRandomColour(){
  //   let red = Math.floor(Math.random()* 255);
  //   let green = Math.floor(Math.random() * 255);
  //   let blue = Math.floor(Math.random() * 255);
  
  //   return "rgb("+red+","+green+"," +blue+" )";  
  // }
  // this makes it a diff colour on every refresh of the page
  let red = Math.floor(Math.random()* 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let getRandomColour = "rgb("+red+","+green+"," +blue+" )";

  this.choseInitialPlace = function() {
    this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
    this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;

  }

  this.draw = function() {
    ctx.fillStyle = getRandomColour;
    ctx.fillRect(this.x, this.y, scale, scale)
  }
}