
var section2019_1 = document.getElementById('y2019_1');
var section2019_2 = document.getElementById('y2019_2');
var section2019_3 = document.getElementById('y2019_3');

section2019_1.onclick = function(){
  var pdf = 'MSTU4040_FinalProject_YuxinCao.pdf';
  window.open('./js/pdf/web/viewer.html?file=http://127.0.0.1:3000/pdf/' + pdf, 'PDF');
};

section2019_2.onclick = function(){
  var pdf = 'MSTU4083_FinalProject_YuxinCao.pdf';
  window.open('./js/pdf/web/viewer.html?file=http://127.0.0.1:3000/pdf/' + pdf, 'PDF');
};

section2019_3.onclick = function(){
  var pdf = 'AHA5060_FinalProject_YuxinCao.pdf';
  window.open('./js/pdf/web/viewer.html?file=http://127.0.0.1:3000/pdf/' + pdf, 'PDF');
};
