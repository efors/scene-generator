const canvas = document.querySelector("canvas");

const cx = canvas.getContext("2d");


const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;


function tree(height, width, pos_x, pos_y){
    this.height = height; 
    this.width = width;
    this.pos_x, 
    this.pos_y
}


tree.prototype.draw = function() {

cx.rect(18,59,4,10);
cx.stroke();
cx.fillStyle = "#e9c46a";
cx.fill();

cx.beginPath();
cx.moveTo(20, 10);
cx.lineTo(20, 60);
cx.quadraticCurveTo(50, 50, 20, 10);
cx.closePath();
cx.stroke();
cx.fillStyle = "#2a9d8f";
cx.fill();

cx.beginPath();
cx.moveTo(20, 10);
cx.lineTo(20, 60);
cx.quadraticCurveTo(-10, 60, 20, 10);
cx.closePath();
cx.stroke();
cx.fillStyle = "#264653";
cx.fill();
};

tree.prototype.draw = function() {

    cx.rect(18,59,4,10);
    cx.stroke();
    cx.fillStyle = "#e9c46a";
    cx.fill();
    
    cx.beginPath();
    cx.moveTo(20, 10);
    cx.lineTo(20, 60);
    cx.quadraticCurveTo(50, 50, 20, 10);
    cx.closePath();
    cx.stroke();
    cx.fillStyle = "#2a9d8f";
    cx.fill();
    
    cx.beginPath();
    cx.moveTo(20, 10);
    cx.lineTo(20, 60);
    cx.quadraticCurveTo(-10, 60, 20, 10);
    cx.closePath();
    cx.stroke();
    cx.fillStyle = "#264653";
    cx.fill();
    };

let first_tree = new tree(10,2)

first_tree.draw()