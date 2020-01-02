
var section2020_1 = document.getElementById('y2020_1');
var section2019_1 = document.getElementById('y2019_1');
var section2019_2 = document.getElementById('y2019_2');
var section2019_3 = document.getElementById('y2019_3');
var section2017_1 = document.getElementById('y2017_1');
var year=document.getElementsByClassName("year");

section2017_1.onclick = function(){
  var pdf = 'HMxGreenDesign_YuxinCao.pdf';
  window.open('./js/pdf/web/viewer.html?file=http://127.0.0.1:3000/pdf/' + pdf, 'PDF');
};

section2017_1.onmouseover= function(){
  year[0].style.animation="visib .4s forwards";
}

section2017_1.onmouseout= function(){
  year[0].style.animation="none";
}

section2019_1.onclick = function(){
  var pdf = 'MSTU4040_FinalProject_YuxinCao.pdf';
  window.open('./js/pdf/web/viewer.html?file=http://127.0.0.1:3000/pdf/' + pdf, 'PDF');
};

section2019_1.onmouseover= function(){
  year[1].style.animation="visib .4s forwards";
}

section2019_1.onmouseout= function(){
  year[1].style.animation="none";
}

section2019_2.onclick = function(){
  var pdf = 'MSTU4083_FinalProject_YuxinCao.pdf';
  window.open('./js/pdf/web/viewer.html?file=http://127.0.0.1:3000/pdf/' + pdf, 'PDF');
};

section2019_2.onmouseover= function(){
  year[1].style.animation="visib .4s forwards";
}

section2019_2.onmouseout= function(){
  year[1].style.animation="none";
}

section2019_3.onclick = function(){
  var pdf = 'AHA5060_FinalProject_YuxinCao.pdf';
  window.open('./js/pdf/web/viewer.html?file=http://127.0.0.1:3000/pdf/' + pdf, 'PDF');
};

section2019_3.onmouseover= function(){
  year[1].style.animation="visib .4s forwards";
}

section2019_3.onmouseout= function(){
  year[1].style.animation="none";
}



section2020_1.onmouseover= function(){
  year[2].style.animation="visib .4s forwards";
}

section2020_1.onmouseout= function(){
  year[2].style.animation="none";
}
