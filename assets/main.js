// Function for adding the notes.
function addNote() {
  const noteTitle = document.getElementById("notes_title")?.value;
  const noteDescription = document.getElementById("notes_text")?.value;

  // Validating if the inputs are empty or not.
  if (!noteTitle) {
    return alert("Please enter the title!");
  }
  if (!noteDescription) {
    return alert("Please enter the description!");
  }

  // Getting data from localStorage using method.
  const notes = JSON.parse(getData("notes")) || [];
  notes.push({ title: noteTitle, description: noteDescription });
  setData("notes", JSON.stringify(notes));

  addNoteToScreen(noteTitle, noteDescription);
  resetForm();
  // console.log("LN26", notes);
}
function resetForm() {
  const noteTitleElem = document.getElementById("notes_title");
  const noteDescriptionElem = document.getElementById("notes_text");
  noteTitleElem.value = "";
  noteDescriptionElem.value = "";
}
// Function for getting the notes.
function getData(key) {
  return localStorage.getItem(key);
}
// Function for setting the notes.
function setData(key, value) {
  return localStorage.setItem(key, value);
}
const div = document.getElementById("notes_list");

// Function to load tha data
function showNotes() {
  // console.log("LN-40  notes_check");
  let notes = JSON.parse(getData("notes"));
  if (notes === null) {
    return;
  }
  // console.log("LN42", notes);
  // console.log("LN45", div);
  for (let i = 0; i < notes.length; i++) {
    const { title, description } = notes[i];
    // console.log("LN46", title, description);
    //   let divElem = document.createElement("div");
    //   // console.log("LN48", divElem);
    //   divElem.innerHTML = `<div class="notes_list_items">
    //   <div class="notes_view_title" id="view_title">
    //     ${title}
    //   </div>
    //   <div class="notes_view_body" id="view_body">
    //     ${description}
    //   </div>
    //   <div class="notes_view_updates" id="view_updated">
    //     Thursday 3:30pm
    //   </div>
    // </div>`;
    //   div.appendChild(divElem);
    addNoteToScreen(title, description);
    // console.log("LN60", divElem);
  }
}
showNotes();

function addNoteToScreen(title, description) {
  const divElem = document.createElement("div");
  // console.log("LN48", divElem);
  divElem.innerHTML = `<div class="notes_list_items">
    <div class="notes_view_title" id="view_title">
      ${title}
    </div>
    <div class="notes_view_body" id="view_body">
      ${description}
    </div>
    <div class="notes_view_updates" id="view_updated">
      Thursday 3:30pm
    </div>
  </div>`;
  div.appendChild(divElem);
}
