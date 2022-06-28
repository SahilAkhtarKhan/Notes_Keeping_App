// Function for adding the notes.
function addNote() {
  const noteTitle = document.getElementById("notes__title");
  const noteDescription = document.getElementById("notes__text");
  // Validating if the inputs are empty or not.
  if (noteTitle.value == null) {
    return alert("Please enter the valid input!");
  }
  if (noteDescription.value == null) {
    return alert("Please enter the valid input!");
  }
  // Getting data from localStorage using method.
  const notes = JSON.parse(getNote("notes"));
  if (notes === null) {
    const noteArr = [
      { title: noteTitle.value, description: noteDescription.value },
    ];
    setNote("notes");
  } else {
    notes.push({ title: noteTitle.value, description: noteDescription.value });
    setNote("notes");
  }
  noteTitle = "";
  noteDescription = "";
}
// Function for getting the notes.
function getNote(getNotes) {
  return localStorage.getItem(getNotes);
}
// Function for setting the notes.
function setNote(setNotes) {
  return localStorage.setItem(setNotes);
}
