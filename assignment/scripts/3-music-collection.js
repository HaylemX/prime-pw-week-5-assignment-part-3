console.log('***** Music Collection *****')

let collection = []



function addToCollection(title, artist, yearPublished) {
  let obj = {}

    obj.title = title;
    obj.artist = artist;
    obj.yearPublished = yearPublished;


	collection.push(obj);
  return obj;


// pushes obj object literal into collection array
  // return object
  }

  const myList0 = new addToCollection('Good Things Fall Apart','Illenium', 2020);
  const myList1 = new addToCollection('Truthhurts','Blah', 2021);
  const myList2 = new addToCollection('Call of Faith','Shining', 1923);
  const myList3 = new addToCollection('Truthhurts','Blah', 2021);
  const myList4 = new addToCollection('Happy Life','Movies', 2025);
  const myList5 = new addToCollection('Blues','Neat', 2024);

/* console.log(collection); */

function showCollection(array) {
	console.log(array);
/*
  return array.map((item) => {
  console.log("test", item);
  })
*/

}



showCollection(collection);

console.log(collection)
// console logs my updated collection array



function showCollection(array) {
  console.log(array.length);
  // console logs length of collection aray
  for (let i of array) {
    console.log(`${i.title} by ${i.artist} published in ${i.yearPublished}`);
    // console logs title,artist and yearPublished together
  }
}






function findByArtist(artist){
  let artistArray=[];
  // starts with empty array
  for (let i = 0; i<collection.length; i++){
    if (collection[i].artist === artist){
      artistArray.push(collection.artist[i]);
      // pushes value into artist
    }
  }
console.log(artist);

}

findByArtist('Good Things Fall Apart');





/*
function findByArtist() {

  for (let i=0;i<collection.length;i++) {
  if (collection.artist[i] === for (let i= 0; i < array.length; i++)   {
    artistList.push(collection.artist[i])
} {
  console.log(artistList);
}


/*

let tracks = [];
function addTracks(name, duration) {
  const track = {};
  track.name = name,
  track.duration = duration
  track.push(track);
}

addToTracks('Clues', '3:02');
addToTracks('Bluesa', '6:32');


function album(playlist) {
  let songList = addToCollection();
  console.log('songList inside ')
}

*/
