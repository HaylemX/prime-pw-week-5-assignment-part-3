console.log('***** Music Collection *****')

let collection = []



function addToCollection(title, artist, yearPublished) {
  let obj = {}

    obj.title = title,
    obj.artist = artist,
    obj.yearPublished = yearPublished


collection.push(obj.title,obj.artist,obj.yearPublished);

  return obj
  // return object
  }

  const myList = new addToCollection('Good Things Fall Apart','Illenium', 2020);
  const myList1 = new addToCollection('Truthhurts','Blah', 2021);
  const myList2 = new addToCollection('Call of Faith','Shining', 1923);
  const myList3 = new addToCollection('Truthhurts','Blah', 2021);
  const myList4 = new addToCollection('Happy Life','Movies', 2025);
  const myList5 = new addToCollection('Blues','Neat', 2024);
  // adding addToCollection parameter values

  collection.push(myList, myList1,myList2,myList3,myList4,myList5);
  // pushing new objects into collection array

  console.log(myList);
  console.log(myList1);
  console.log(myList2);
  console.log(myList3);
  console.log(myList4);
  console.log(myList5);
  // console logs all albums

console.log(collection);



/*
function addToCollection(title, artist, yearPublished) {
    this.title = title;
    this.artist = artist;
    this.yearPublished = yearPublished;

  return this
  // return object
  }

  const myList = new addToCollection('Good Things Fall Apart','Illenium', 2020);
  const myList1 = new addToCollection('Truthhurts','Blah', 2021);
  const myList2 = new addToCollection('Call of Faith','Shining', 1923);
  const myList3 = new addToCollection('Truthhurts','Blah', 2021);
  const myList4 = new addToCollection('Happy Life','Movies', 2025);
  const myList5 = new addToCollection('Blues','Neat', 2024);
  // adding addToCollection parameter values

  collection.push(myList, myList1,myList2,myList3,myList4,myList5);
  // pushing new objects into collection array

console.log(myList);
console.log(myList1);
console.log(myList2);
console.log(myList3);
console.log(myList4);
console.log(myList5);
// console logs all albums

console.log(collection);
//console logs collection array

function showCollection

*/
