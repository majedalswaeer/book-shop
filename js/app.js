'use strict';

let mainArr=[];
function All(bookName,bookPages,bookPrice,){
  this.bookName=bookName;
  this.bookPages=bookPages;
  this.bookPrice=bookPrice;

  mainArr.push(this);
}

All.prototype.getBookPages=function(){
  return Math.floor(Math.random() * (500 - 1) + 1);
};

let formEl=document.getElementById('myform');
formEl.addEventListener('submit',getResult);
//___________________________________________________
function getResult(event){

  let bookName=event.target.bookName.value;
  let bookPages=All.prototype.getBookPages();
  let bookPrice=event.target.bookPrice.value;
  new All(bookName,bookPages,bookPrice);
  save();
  getTable();
}
//___________________________________________________
let divEl=document.getElementById('cont');
let tabEl=document.createElement('table');
tabEl.id='mytable';

divEl.appendChild(tabEl);

//___________________________________________________
function getHeader(){
  let trEl=document.createElement('tr');
  tabEl.appendChild(trEl);

  let thEl=document.createElement('th');
  trEl.appendChild(thEl);
  thEl.textContent='Book Name';

  let thEl1=document.createElement('th');
  trEl.appendChild(thEl1);
  thEl1.textContent='Book Pages';

  let thEl2=document.createElement('th');
  trEl.appendChild(thEl2);
  thEl2.textContent='Book Price';

}
getHeader();


function getTable(){
  for(let i=0;i<mainArr.length;i++){
    let trEl2=document.createElement('tr');
    tabEl.appendChild(trEl2);

    let tdEl=document.createElement('td');
    trEl2.appendChild(tdEl);
    tdEl.textContent=mainArr[i].bookName;

    let tdEl1=document.createElement('td');
    trEl2.appendChild(tdEl1);
    tdEl1.textContent=mainArr[i].bookPages;

    let tdEl2=document.createElement('td');
    trEl2.appendChild(tdEl2);
    tdEl2.textContent=mainArr[i].bookPrice;

  }

}

function save(){
  let strOb=JSON.stringify(mainArr);
  localStorage.setItem('items',strOb);
}

function read(){
  let getStr=localStorage.getItem('items');
  let normalOb=JSON.parse(getStr);
  if(normalOb!==null){
    mainArr=normalOb;
  }else{

  }
  getTable();
}



read();
