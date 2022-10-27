//A list that shows all of the user's added bookmarks.
const bookmarkData = document.getElementById("addBookmark").value;

const saveBookMark = [];

document.getElementById("saveBtn").addEventListener("click", function() {
  
  //Get the value of the input field
  const bookmarkData = document.getElementById("addBookmark").value;

  //Create a new list item
  const newBookmark = document.createElement("li");

  //Add the bookmark to the list
  newBookmark.innerHTML = bookmarkData;
  console.log(bookmarkData);

  saveBookMark.push(bookmarkData)
  console.log(bookmarkData);

  //Add the new bookmark to the list
  document.getElementById("").append(newBookmark);
});







