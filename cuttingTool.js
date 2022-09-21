function CuttingTool() {
	this.icon = "assets/cutting.jpg";
	this.name = "cutting";

	var startMouseX = -1;
	var startMouseY = -1;
	var endMouseX = -1;
	var endMouseY = -1;
	var drawing = false;

	var moveMouseX = -1;
	var moveMouseY = -1;
	var moveWidth = 0;
	var moveHeight = 0;

	var getArea;
	var areaSet = false;
	var areaMove = false;
	
	//draws the line to the screen 
	this.draw = function(){
		//draw only when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new line
			if (!areaSet) {
				if(startMouseX == -1){
					startMouseX = mouseX;
					startMouseY = mouseY;
					drawing = true;
					//save the current pixel Array
					loadPixels();
					console.log("startMouseX ======== -1 ");
				} else{
					noFill();
					stroke(102);
					//update the screen with the saved pixels to hide any previous
					//line between mouse pressed and released
					updatePixels();

					//draw the line
					rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
					console.log("startMouseX >>>>>>>>> -1 ");
				}
			} else {
				if(moveMouseX == -1){
					console.log("Move moveMouseX ======== -1");
					moveMouseX = mouseX;
					moveMouseY = mouseY;
					//save the current pixel Array
					loadPixels();
				} else {
					console.log("Move moveMouseX >>>>>>>>> -1");

				}
				drawing = true;
			}

		} else if(drawing){

			if (!areaSet) {
				areaSet = true;
				endMouseX = mouseX;
				endMouseY = mouseY;
				drawing = false;
				console.log(" drawing -- areaSet: false");
			} else {
				console.log("drawing -- areaSet : true");
				moveWidth = mouseX - moveMouseX;
				moveHeight = mouseY - moveMouseY;

				drawing = false;
				if((moveWidth < 3 && moveWidth > -3) || (moveHeight < 3 && moveHeight > -3)) {
					console.log("move exit ");
					loadPixels();
					areaSet = false;
					startMouseX = -1;
					startMouseY = -1;
				} else {
					console.log("move ok ", moveWidth, "  ", moveHeight);
					moveMouseX = -1;
					moveMouseY = -1;

					getArea = get(startMouseX, startMouseY, endMouseX-startMouseX+1, endMouseY-startMouseY+1);
					noStroke();
					fill(255);
					rect(startMouseX, startMouseY,  endMouseX-startMouseX+1, endMouseY-startMouseY+1);
					startMouseX += moveWidth;
					startMouseY += moveWidth;
					set(startMouseX, startMouseY, getArea);
					console.log(moveWidth, "  ", moveHeight);
				}
			}
		}
	};
}