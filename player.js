function Player()
{
	this.x = 5;
	this.y = 10;
	this.xVelocity = 1;
	this.yVelocity = 0;
	this.gravity = 4;
	this.rect = new Rect(this.x,this.y,75,75);
}

Player.prototype.Init = function()
{
	
}

Player.prototype.draw = function()
{
	game.ctx.fillStyle = rgb(255,0,0,0) ;
	game.ctx.fillRect(this.x,this.y,75,75);
	this.x+=this.xVelocity;
	if(this.x >= game.canvas.width-75)
	{
		this.x = game.canvas.width-75;
		//console.log("bounce off wall");
	}
	if( this.x < 0)
	{
		//console.log("bounce off wall");
		this.x = 0;
	}
	this.yVelocity += this.gravity;
	
	
	this.y += this.yVelocity;
	if( this.y > game.canvas.height-75)
	{
		this.y = game.canvas.height-75;
		//console.log("bounce of bottom");
		//this.yVelocity = 0;
		//this.gravity = 0;
	}
}

Player.prototype.jump = function()
{
	if(this.y >= game.canvas.height-75)
	{
		//gravity = 4;
		this.yVelocity = -40;
		//console.log("jump");
	}
}
Player.prototype.moveLeft = function()
{
	this.xVelocity = -3;
	//console.log("left");
}
Player.prototype.moveRight = function()
{
	this.xVelocity = 3;
	//console.log("right");
}
Player.prototype.intersects = function (rect)
{
	right = false;
	left = false;
	up = false;
	down = false;

	if (this.x < rect.x + 75 &&
   		this.x + 75 > rect.x &&
  		 this.y < rect.y + 75 &&
  		 75 + this.y > rect.y) 
	{

		game.ctx.font="30px Verdana";
		// Create gradient
		var gradient=game.ctx.createLinearGradient(0,0,game.canvas.width,0);
		gradient.addColorStop("0","magenta");
		gradient.addColorStop("0.5","blue");
		gradient.addColorStop("1.0","red");
		// Fill with gradient
		game.ctx.fillStyle=gradient;
		game.ctx.fillText("You win",10,90); 
	}
}