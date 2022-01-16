console.log('***** Music Collection *****')

let collection = []



function addToCollection(title, artist, yearPublished,...tracks) {
  let obj = {}

    obj.title = title,
    obj.artist = artist,
    obj.yearPublished = yearPublished,
    obj.tracks = tracks

collection.push(obj);
// pushes obj object literal into collection array
  return obj
  // return object
  }

  const myList0 = new addToCollection('Good Things Fall Apart','Illenium', 2020);
  const myList1 = new addToCollection('Truthhurts','Blah', 2021);
  const myList2 = new addToCollection('Call of Faith','Shining', 1923);
  const myList3 = new addToCollection('Truthhurts','Blah', 2021);
  const myList4 = new addToCollection('Happy Life','Movies', 2025);
  const myList5 = new addToCollection('Blues','Neat', 2024);
  // adding addToCollection parameter values

/*
  console.log(myList0);
  console.log(myList1);
  console.log(myList2);
  console.log(myList3);
  console.log(myList4);
  console.log(myList5);
  // console logs all albums
  */

console.log(addToCollection(collection));




function showCollection(array) {
  console.log(array.length);
  for (let i of array) {
    console.log(`${i.title} by ${i.artist} published in ${i.yearPublished}`);
  }
}

console.log(showCollection(collection));










/*

var jerry = {
  weight: 179
}

var Malcom = {
  weight: 178
}

var Bob = {
  weight: 1478
}

var people = {jerry: jerry, malcom: Malcom, bob: Bob}

for(var person in people){
  if(people.hasOwnProperty(person)){
    console.log('hello', people[person].weight);
  }
}

for( let album in collection){
  if (collection.hasAlbum(album)){
    console.log(collection[album].title)
  }
}


  function showCollection(title, artist, yearPublished) {
    let obj = {}

      obj.title = title,
      obj.artist = artist,
      obj.yearPublished = yearPublished

    for (let i=0; i<collection.length; i++){
      console.log(title + 'by ' + artist + 'published in ' + yearPublished);
      }
  }
  console.log(showCollection());




// console logs updated collection array list













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
