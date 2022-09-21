/*
    1. plot out a shape as a series of vertices
        * Add a button for switching between creating new vertices and editing
        * Click the canvas to add a vertex
        * Dont draw right away, add vertex to an array then draw but dont save to canvas
    2. edit the vertices using a mouse drag
        * if editing is on
        * highlight the location of the vertices
        * when mouse pressed is near vertex (using the dist) update the vertex x and y using the mouseX and mouseY
        
    3. confirm the final shape
*/
	//set an icon and a name for the object
	this.icon = "assets";
	this.name = "extendable";

var editButton;
var finishButton;

var editMode = false;
var currentShape = [];

var c;

this.draw = function() {
    c = createCanvas(800, 800);
    background(200);
    noFill();
    loadPixels();
    editButton = createButton('Edit Button');
    editButton.mousePressed(function(){
        if(editMode){
            editMode = false;
            editButton.html('Edit Shape');
        }
        else{
            editMode = true;
            editButton.html('Add Vertices');
        }
    })
    finishButton = createButton('Finish Shape');

    finishButton.mousePressed(function(){
        editMode = false;
        draw();
        loadPixels();
        currentShape = [];

    })

}


function draw() {
    updatePixels();
    if (mousePressedOnCanvas (c) && mouseIsPressed){
        if(!editMode){
        currentShape.push({
            x: mouseX,
            y: mouseY
        });
        }
        else{
            for(var i = 0; i < currentShape.length; i++){
                if(dist(currentShape[i].x,
                    currentShape[i].y,
                    mouseX,
                    mouseY) < 15){
                        currentShape[i].x = mouseX;
                        currentShape[i].y = mouseY;
                    }
            }
        }
    }
    beginShape();
    for(var i = 0; i < currentShape.length; i++){
        vertex(currentShape[i].x,
            currentShape[i].y);
            if(editMode){
                fill('red');
                ellipse(currentShape[i].x,
                currentShape[i].y, 10);
                noFill();
            }
    }
    endShape();

}

function mousePressOnCanvas(canvas) {
    if (mouseX > canvas.elt.offsetleft &&
        mouseX < (canvas.elt.offsetleft +
            canvas.width) &&
            mouseY > canvas.elt.offsetTop &&
            mouseY < (canvas.elt.offsetTop +
            canvas.height)
    ) {
        return true;
    }
    return false;
}