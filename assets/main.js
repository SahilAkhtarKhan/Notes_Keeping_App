// Function for adding the notes.
function addNote() {
  const noteTitle = document.getElementById("notes__title");
  const noteDescription = document.getElementById("notes__text");
  // Validating if the inputs are empty or not.
  if (!noteTitle.value) {
    return alert("Please enter the title!");
  }
  if (!noteDescription.value) {
    return alert("Please enter the description!");
  }
  // Getting data from localStorage using method.
  let notes = JSON.parse(getData("notes"));
  let notesArr = [];
  if (notes === null) {
    notesArr = [{ title: noteTitle.value, description: noteDescription.value }];
    setData("notes", JSON.stringify(notesArr));
  } else {
    notes.push({ title: noteTitle.value, description: noteDescription.value });
    setData("notes", JSON.stringify(notes));
  }
  noteTitle.value = "";
  noteDescription.value = "";
}
// Function for getting the notes.
function getData(key) {
  return localStorage.getItem(key);
}
// Function for setting the notes.
function setData(key, value) {
  return localStorage.setItem(key, value);
}
