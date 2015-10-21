

PlayingScene.prototype = new Scene(); //this inherits from Scene

function PlayingScene()
{
	this.title = "Playing";
	
}

PlayingScene.prototype.Update = function()
{
	console.log("Playing");
	game.gameLoop();
}

PlayingScene.prototype.Start = function()
{
	window.addEventListener("keydown",game.handelInput);
}
PlayingScene.prototype.Stop = function()
{
	window.removeEventListener("keydown",game.handelInput);
	game.ctx.clearRect(0,0,1000,1000);
}