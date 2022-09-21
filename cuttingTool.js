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
					console.log("Rect create clicked up-->" + startMouseX + ' : ' + startMouseY);
				} else{
					noFill();
					stroke(0);
					//update the screen with the saved pixels to hide any previous
					//line between mouse pressed and released
					updatePixels();

					//draw the line
					rect(startMouseX, startMouseY, mouseX - startMouseX, mouseY - startMouseY);
					console.log("Rect create clicked on-->" + mouseX + ' : ' + mouseY);
				}
			} else {
				if(moveMouseX == -1){
					moveMouseX = mouseX;
					moveMouseY = mouseY;
					//save the current pixel Array
					console.log("Rect move clicked up-->" + moveMouseX + ' : ' + moveMouseY);
					loadPixels();
				} else {
					updatePixels();
					console.log("Rect move clicked on-->" + mouseX + ' : ' + mouseY);
				}
				drawing = true;
			}

		} else if(drawing){

			if (!areaSet) {
				areaSet = true;
				endMouseX = mouseX;
				endMouseY = mouseY;
				drawing = false;
				console.log("Rect create click off-->" + endMouseX + ' : ' + endMouseY);
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

					getArea = get(startMouseX + 3, startMouseY + 3, endMouseX - startMouseX - 8, endMouseY - startMouseY - 8);
					noStroke();
					fill(255);
					rect(startMouseX - 1, startMouseY - 1,  endMouseX - startMouseX + 3, endMouseY - startMouseY + 3);
					startMouseX += moveWidth;
					startMouseY += moveHeight;
					console.log("22-->" + startMouseX + ' : ' + startMouseY);
					set(startMouseX, startMouseY, getArea);
					//console.log(moveWidth, "  ", moveHeight);
					updatePixels();
					startMouseX = -1;
					startMouseY = -1;
					areaSet = false;
				}
			}
		}
	};
}