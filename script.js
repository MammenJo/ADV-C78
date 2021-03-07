var reasons= [" Ajit ", 
"   Liya", 
" Johanna", 
"Jaydon"];
var images= ["https://thumbs.dreamstime.com/b/angry-mood-indian-cartoon-man-father-vector-illustration-angry-mood-indian-cartoon-man-father-vector-illustration-148889258.jpg",
"https://thumbs.dreamstime.com/z/modern-life-sunglasses-retro-cartoon-female-housewife-mom-vector-illustration-modern-life-sunglasses-retro-cartoon-148959275.jpg",
"https://i.pinimg.com/originals/2b/5f/61/2b5f611332511552e3b05ec73887f105.png",
"https://p7.hiclipart.com/preview/981/1001/235/q-version-cartoon-avatar-comics-significant-other-hand-painted-cartoon-cute-boy.jpg",];
var i = 0;
function next(){
  document.getElementById ("img1").src= images[i];
  document.getElementById ("1stp"). innerHTML= reasons[i];
i++;
if (i == 5) {i = 0}; }