
let out = "";
let colors = ['#9400D3','#4B0082','#0000FF','#00FF00','#FFFF00','#FF0000'];
let color = 0;
let textLoren = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
// You can change number of bloks)
let bloks = 100;

// Create 100 blocks 
function Create_blocks() {
  for (let i = 1; i < (bloks+1); i++) {
    // title part
    out += '<div class = "title-box position-sticky" >';
    out += '<h4> ' + i + ' headline </h4>';
    out += '</div>';
    // text part
    out += '<div class = " text-box " >';
    out += '<p>' + textLoren + '</p>';
    out += '</div>';
  }
  document.getElementById('out').innerHTML = out;
  Colored_blocks()
 }

// start function create 100 blocks
 Create_blocks();

// colored all blocks in six colors
function Colored_blocks() {
  for (let i = 0; i < bloks; i++) {
    color = color + 1;
    if (color == 6){
      color = 1;
    }
    document.getElementsByClassName('title-box')[i].style.background = colors[color];
  }
}

// Disable (remove position sticky for all titles)
 document.getElementById('Disable').onchange = function() {
   for (let i = 0; i < bloks; i++) {
     document.getElementsByClassName('title-box')[i].classList.remove("position-sticky");
   }
 }

// Initialize (add position sticky for all titles)
 document.getElementById('Initialize').onchange = function() {
   for (let i = 0; i < bloks; i++) {
     document.getElementsByClassName('title-box')[i].classList.add("position-sticky");
   }
 }
