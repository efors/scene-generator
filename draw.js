

const canvas = document.querySelector("canvas");

const cx = canvas.getContext("2d");


const width = canvas.width  = window.innerWidth;
const height = canvas.height = window.innerHeight;

const frame_width = width - 60
const frame_height = height - 60
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
    cx.fillStyle = "#e9c46a";
    cx.fillRect(end_x - 2, end_y - 2, 4, 10);

    // Define left part of crown
    cx.beginPath();
    cx.moveTo(start_x, start_y);
    cx.lineTo(end_x, end_y);
    cx.quadraticCurveTo(cpx_left, cpy, start_x, start_y);
    cx.closePath();
    cx.stroke();
    cx.fillStyle = "#2a9d8f";
    cx.fill();

    // Define right part of crown
    cx.beginPath();
    cx.moveTo(start_x, start_y);
    cx.lineTo(end_x, end_y);
    cx.quadraticCurveTo(cpx_right, cpy, start_x, start_y);
    cx.closePath();
    cx.stroke();
    cx.fillStyle = "#264653";
    cx.fill();

   

};

function randint(start, end){
    
    num = Math.floor(Math.random() * end) + start;
    return num;
}


cx.rect(20,20,frame_width,frame_height);
cx.stroke();

cx.fillStyle = "#48cae4";
cx.fillRect(21,21,frame_width-2,frame_height*(1/3));
cx.fillStyle = "#caffbf";
cx.fillRect(21,frame_height*(1/3)+19,frame_width-2,frame_height*(2/3));

let counter = 0
while (counter < randint(3,10)) {
//Let trees only spawn on grass part of scene defined as lowest 2/3 
    x_pos = randint(40, frame_width-40);
    y_pos = randint(frame_height/3-10, (frame_height-300));
    let tree = new random_tree(70, x_pos, y_pos);
    tree.draw();
    counter++;
}

