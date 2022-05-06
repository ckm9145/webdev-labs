let currentFont= 10;

const makeBigger = () => {
   //  alert('make bigger!');
   currentFont+= .8;

   document.querySelector('h1').style.fontSize=`${currentFont+.5}px`;
   document.querySelector('.content').style.fontSize=`${currentFont}px`;


};

const makeSmaller = () => {
   // alert('make smaller!');

   currentFont-= .2;

   document.querySelector("h1").style.fontSize= `${currentFont+5}px`;
   document.querySelector(".content").style.fontSize= `${currentFont}px`;

};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

