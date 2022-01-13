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

  function showCollection(title, artist, yearPublished) {
    title = obj.title;
    artist = obj.artist;
    yearPublished = obj.yearPublished;
  find = (collection(),collection(),collection())
    for (let i=0; i<collection.length; i++){
      if (find === collection(), collection(), collection())
      console.log(title + 'by ' + artist + 'published in ' + yearPublished);
      }
  }
  console.log(showCollection(obj.title, obj.artist, obj.yearPublished))


  function isFirstLetter(letter, string) {
    find = (helloName(), helloName())
    for (let i = 0; i < helloName.length; i++) {
      if (find === helloName(0), helloName()) {
        return true
      } else {
        return false
      }
    }
  }
  console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
  console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );



console.log(obj.title)
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
