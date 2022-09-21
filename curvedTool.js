//a tool for drawing straight lines to the screen. Allows the user to preview
//the a line to the current mouse position before drawing the line to the 
//pixel array.
function CurvedTool(){
	this.icon = "assets/curved.jpg";
	this.name = "CurvedTo";

	var startMouseX1 = -1;
	var startMouseY1 = -1;
	var startMouseX2 = -1;
	var startMouseY2 = -1;
	var startMouseX3 = -1;
	var startMouseY3 = -1;
	var startMouseX4 = -1;
	var startMouseY4 = -1;
	
	var drawing = false;

	var btncount = 0;
	var colourP = null;
	colourP = new Colour();
	//draws the line to the screen 
	this.draw = function(){
        
		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new line
			if(btncount == 0){
				if(startMouseX1 == -1){
					startMouseX1 = mouseX;
					startMouseY1 = mouseY;
					console.log('1=> ' + startMouseX1 + ' ' + startMouseY1);
					console.log('width: '+screen.width);
					drawing = true;
					loadPixels();
				}

				else{
					updatePixels();
					stroke(0);
					c1(startMouseX1, startMouseY1, startMouseX1, startMouseY1, mouseX, mouseY, mouseX, mouseY);
				}
			}
			if(btncount == 1){
				drawing = true;			
				updatePixels();
				stroke(0);
				c1(mouseX, mouseY, startMouseX1, startMouseY1, startMouseX2, startMouseY2, startMouseX2, startMouseY2);
				for(var i = 0; i < 3000; i++){
					stroke(255);
					c1(startMouseX1, startMouseY1, startMouseX1, startMouseY1, startMouseX2, startMouseY2, startMouseX2, startMouseY2);
				}
			}
			if(btncount == 2){
				drawing = true;
				updatePixels();
				
				stroke(0);
				c1(startMouseX3, startMouseY3, startMouseX1, startMouseY1, startMouseX2, startMouseY2, mouseX, mouseY);
				for(var i = 0; i < 3000; i++){
					stroke(255);
					c1(startMouseX3, startMouseY3, startMouseX1, startMouseY1, startMouseX2, startMouseY2, startMouseX2, startMouseY2);
				}
			}

		}

		else if(drawing){
			if(btncount == 0){
				loadPixels();
				startMouseX2 = mouseX;
			    startMouseY2 = mouseY;
				console.log('2=> ' + startMouseX2 + ' ' + startMouseY2);
				drawing = false;
			}
			if(btncount == 1){
				loadPixels();
				startMouseX3 = mouseX;
			    startMouseY3 = mouseY;
				console.log('3=> ' + startMouseX3 + ' ' + startMouseY3);
				drawing = false;
			}
			if(btncount == 2){
				loadPixels();
				startMouseX4 = mouseX;
			    startMouseY4 = mouseY;
				console.log('4=> ' + startMouseX4 + ' ' + startMouseY4);				
				//curve(startMouseX3, startMouseY3, startMouseX1, startMouseY1, startMouseX2, startMouseY2, startMouseX4, startMouseY4);
				stroke(0);
				c1(startMouseX3, startMouseY3, startMouseX1, startMouseY1, startMouseX2, startMouseY2, startMouseX4, startMouseY4);
				drawing = false;
			}

			btncount++;
			//console.log(btncount);
			if(btncount == 3){
				loadPixels();
				btncount = 0;
				drawing = false;
				startMouseX1 = -1;
			} 
		}
	};
    function c1(X1,Y1,X2,Y2,X3,Y3,X4,Y4){
		noFill();
		//this.clear();
		curve(X1,Y1,X2,Y2,X3,Y3,X4,Y4);
	}
}

function Colour() {

	//a list of web colour strings
	this.colours = ["black", "silver", "gray", "white", "maroon", "red", "purple",
		"orange", "pink", "fuchsia", "green", "lime", "olive", "yellow", "navy",
		"blue", "teal", "aqua"
	];
	//make the start colour be black
	this.selectedColour = "black";

	var self = this;

	var colourClick = function() {
		//remove the old border
		var current = select("#" + self.selectedColour + "Swatch");
		current.style("border", "0");

		//get the new colour from the id of the clicked element
		var c = this.id().split("Swatch")[0];

		//set the selected colour and fill and stroke
		self.selectedColour = c;
		fill(c);
		stroke(c);

		//add a new border to the selected colour
		this.style("border", "2px solid blue");
		// return c;
	}

	//load in the colours
	this.loadColours = function() {
		//set the fill and stroke properties to be black at the start of the programme
		//running
		fill(this.colours[0]);
		stroke(this.colours[0]);

		//for each colour create a new div in the html for the colourSwatches
		for (var i = 0; i < this.colours.length; i++) {
			var colourID = this.colours[i] + "Swatch";

			//using JQuery add the swatch to the palette and set its background colour
			//to be the colour value.
			var colourSwatch = createDiv()
			colourSwatch.class('colourSwatches');
			colourSwatch.id(colourID);

			select(".colourPalette").child(colourSwatch);
			select("#" + colourID).style("background-color", this.colours[i]);
			colourSwatch.mouseClicked(colourClick)
		}

		select(".colourSwatches").style("border", "2px solid blue");
	};
	//call the loadColours function now it is declared
	this.loadColours();
}