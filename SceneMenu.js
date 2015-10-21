SceneMenu.prototype = new Scene(); //this inherits from Scene

function SceneMenu()
{
	isStart = false;
	this.title = "Menu";
	this.buttonGame = new button("Start",game.canvas.width/2,300);
	this.buttonOption = new button("options",game.canvas.width/2,400)
	this.buttonExit = new button("Exit",game.canvas.width/2,500)
	this.cursorX;
	this.cursorY;
	document.addEventListener("click", printMousePos);
}

SceneMenu.prototype.Update = function()
{
	console.log("Menu");
	
	this.buttonGame.draw(game.canvas)
	this.buttonOption.draw(game.canvas)
	this.buttonExit.draw(game.canvas)
	if(this.buttonGame.intersects(new Rect(this.cursorX,this.cursorY,2,2)))
    {
    	isStart = true;
    	console.log("AHHHHH")
    }
}
function printMousePos(e) {
    cursorX = e.clientX;
    cursorY = e.clientY;
    
   // alert("X: " + cursorX + " Y: " + cursorY);
}

SceneMenu.prototype.Start = function()
{
	window.addEventListener("keydown",game.handelInput);
	
}
SceneMenu.prototype.Stop = function()
{
	window.removeEventListener("keydown",game.handelInput);
	document.removeEventListener("click", printMousePos);
	game.ctx.clearRect(0,0,1000,1000);
}