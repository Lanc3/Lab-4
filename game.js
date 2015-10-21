function Game(canvas)
{
	this.canvas = canvas;
	this.ctx = this.canvas.getContext("2d");
	this.player = new Player();
    this.goal = new Goal();
}
 
Game.prototype.draw = function()
{   
	this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
	this.player.draw(this.canvas);
	this.goal.draw(this.canvas);
	var c = this.canvas;
	if(game.player.intersects(game.goal.rect))
	{
		console.log("hit");
	}
}

Game.prototype.gameLoop = function()
{
	game.draw();
	//window.requestAnimationFrame(game.gameLoop);
}

Game.prototype.handelInput = function(event)
{
	var key = getCharCode(event);
	console.log(key);
	if(key == 32)
	{
		game.player.jump();
	}
	if(key == 68 || key == 39)
	{
		game.player.moveRight();

	}
	if(key == 65 || key == 37)
	{
		game.player.moveLeft();
	}

}
//get the char code for a key press for difrent browsers as diffrent browsers may return odd or diffrent key codes
function getCharCode(event)
{
	if (event.which == null)
	{
		return String.fromCharCode(event.keyCode) // IE
	}
	else if (event.which!=0 && event.charCode!=0)
	{
		return String.fromCharCode(event.which)   // the rest
	} 
	else
	{
		return event.keyCode; // special key
	}
}