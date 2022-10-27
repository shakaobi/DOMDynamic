//A list that shows all of the user's added bookmarks.
const bookmarkData = document.getElementById("#addBookmarkLink").value;
const saveBookArray = document.getElementById("#addBookmarkName").value;
const addBtn = document.querySelector("#addBtn");
const bookmarkList = document.querySelector("#bookmarkList");


const bookMarkArray = [];

document.getElementById("saveBtn").addEventListener("click", function() {

//Get the value of the input field
const bookmarkData = document.getElementById("addBookmarkLink").value;
const saveBookArray = document.getElementById("addBookmarkName").value;

//Create a new list item
const newBookmark = document.createElement("li");

//Add the bookmark to the list
newBookmark.innerHTML = bookmarkData;
newBookmark.innerHTML = saveBookArray;
console.log(bookmarkData, saveBookArray);

bookMarkArray.push(bookmarkData, saveBookArray)


// let userInput = addBookmarkLink.value.toLowerCase().split(" ").join("");



//Add the new bookmark to the list
document.getElementById("main").append(bookMarkArray);
});




