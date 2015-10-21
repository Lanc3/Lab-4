SceneOver.prototype = new Scene(); //this inherits from Scene

function SceneOver()
{
	this.title = "Game Over";
	
	
}

SceneOver.prototype.Update = function()
{
	console.log("Game Over");
	game.ctx.font = "140px Verdana"
	game.ctx.fillText("Game Over",game.canvas.width/2-200,game.canvas.height/2);
}

Scene.prototype.Start = function()
{
	window.addEventListener("keydown",game.handelInput);
}
Scene.prototype.Stop = function()
{
	window.removeEventListener("keydown",game.handelInput);
	game.ctx.clearRect(0,0,1000,1000);
}