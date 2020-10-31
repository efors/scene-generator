


const canvas = document.querySelector("canvas");

const cx = canvas.getContext("2d");


const width = canvas.width  = window.innerWidth;
const height = canvas.height = window.innerHeight;

const frame_width = width - 60
const frame_height = height - 60


springPalette = {
    "sky":"#48cae4",
    "crown_left":"#2a9d8f",
    "crown_right":"#264653",
    "trunk":"#e9c46a",
    "grass":"#caffbf",
    "cloud":"#FFFFFF",
    "road": "#cd9777"
}

altPalette = {
    "sky":"#277da1",
    "crown_left":"#43aa8b",
    "crown_right":"#90be6d",
    "trunk":"#f3722c",
    "grass":"#4d908e",
    "cloud":"#FFFFFF", 
    "road":"#cd9777"
}
const color = altPalette;

function random_tree(height, pos_x, pos_y) {
    this.height = height;
    this.width = width;
    this.pos_x = pos_x;
    this.pos_y = pos_y;
};


random_tree.prototype.draw = function () {
    let height = this.height;
    let start_y = this.pos_y;
    let start_x = this.pos_x;

    let end_y = start_y + height;
    let end_x = start_x;

    let width = 50;
    let cpx_left = start_x - width;
    let cpx_right = start_x + width;
    let cpy = start_y + 60;

    // Define trunk
    cx.fillStyle = color.trunk;
    cx.fillRect(end_x - 2, end_y - 2, 4, 10);

    // Define left part of crown
    cx.beginPath();
    cx.moveTo(start_x, start_y);
    cx.lineTo(end_x, end_y);
    cx.quadraticCurveTo(cpx_left, cpy, start_x, start_y);
    cx.closePath();
    cx.stroke();
    cx.fillStyle = color.crown_left;
    cx.fill();

    // Define right part of crown
    cx.beginPath();
    cx.moveTo(start_x, start_y);
    cx.lineTo(end_x, end_y);
    cx.quadraticCurveTo(cpx_right, cpy, start_x, start_y);
    cx.closePath();
    cx.stroke();
    cx.fillStyle = color.crown_right;
    cx.fill();

   

};

function random_cloud(x, y, rad = 10){
    // Looks best between radius 10 and 20
    let radius = rad;
    cx.beginPath();
    cx.arc(x,y,radius,Math.PI*0.5,Math.PI*0);
    cx.arc(x+15,y-10,radius,Math.PI*1,Math.PI*0.5);
    cx.arc(x+30,y-5,radius,Math.PI*1,Math.PI*0);
    cx.arc(x+40,y,radius,Math.PI*1,Math.PI*0.5);
    cx.lineTo(x,y+radius)
    
    // cx.moveTo(x,y);
    // cx.lineTo(x+50,y);
    // cx.quadraticCurveTo(10,10,x+40,y-20);
    cx.stroke();

    cx.fillStyle = color.cloud;
    cx.fill();
 
};

function road(){
    let y_to = frame_height+20
    let y_from = frame_height*(1/3)+19
    let x_from = 300
    let x_to = 200

    let cpx1 = 70
    let cpx2 = 510
    let cpy1 = 400
    let cpy2 = 400

    cx.beginPath();
    cx.moveTo(x_from, y_from);
    cx.bezierCurveTo(cpx1, cpy1, cpx2, cpy2 , x_to, y_to);

    cx.lineTo(x_to+20, y_to)
    cx.bezierCurveTo(cpx2+20, cpy2, cpx1+20, cpy1 , x_from+20, y_from);
    cx.lineTo(x_from, y_from)
    cx.stroke();
    cx.fillStyle = color.road;
    cx.fill();

}

function randint(start, end){
    
    num = Math.floor(Math.random() * end) + start;
    return num;
};

// Draw frame
cx.rect(20,20,frame_width,frame_height);
cx.stroke();

//Draw sky
cx.fillStyle = color.sky;
cx.fillRect(21,21,frame_width-2,frame_height*(1/3));
//Draw grass
cx.fillStyle = color.grass;
cx.fillRect(21,frame_height*(1/3)+19,frame_width-2,frame_height*(2/3));
road();

let tree_counter = 0;
while (tree_counter < randint(3,10)) {
//Let trees only spawn on grass part of scene defined as lowest 2/3 
    x_pos = randint(40, frame_width-40);
    y_pos = randint(frame_height/3-10, (frame_height-400));
    let tree = new random_tree(70, x_pos, y_pos);
    tree.draw();
    tree_counter++;
};

let cloud_counter = 0;
while (cloud_counter < randint(2,6)){
    x_pos = randint(50, frame_width-60);
    y_pos = randint(60, frame_height*(1/24));
    random_cloud(x_pos,y_pos,randint(10,15));
    cloud_counter++;
};

