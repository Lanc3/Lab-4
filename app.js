
var game;
var sceneManager;

function main()
{

	var canvas = initCanvas();
	game = new Game(canvas);
	sceneManager = new SceneManager(canvas);
	sceneManager.CurrentScene().Update();
	//game.gameLoop();
	
	document.addEventListener("mousedown", changeScene);
	
	update();

}
function update()
{
	sceneManager.currentScene.Update();
	window.requestAnimationFrame(update);
}
function initCanvas()
{
	var c = document.getElementById("myCanvas");
	c.width = window.innerWidth;
	c.height = window.innerHeight;

	return c;
}

function changeScene(e)
{
	game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);
	// Random colour
	var r = Math.random()*255;
	var g = 0;
	var b = 0;

	// colour
	game.ctx.fillStyle = rgb(r,g,b);
	sceneManager.GoToNextScene();
	
}

function rgb(r, g, b) 
{ 
	return 'rgb('+clamp(Math.round(r),0,255)+', '+0+', '+0+')';
}
/*helper function*/
function clamp(value, min, max)
{ 
	if(max<min) { 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}