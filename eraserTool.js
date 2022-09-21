function EraserTool() {
	this.icon = "assets/eraser.jpg";
	this.name = "eraser";

	var previousMouseX = -1;
	var previousMouseY = -1;

	var offsetX = 15;
	var offsetY = 15;
	var getArea;

	this.draw = function(){
		//if the mouse is pressed
		if(mouseIsPressed){
			if (previousMouseX == -1){
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}

			else{
				noStroke();
				fill(255);
  				rect(mouseX-offsetX, mouseY-offsetY, offsetX * 2, offsetY * 2);
			}
		}
		else{
			previousMouseX = -1;
			previousMouseY = -1;
		}
	};
}