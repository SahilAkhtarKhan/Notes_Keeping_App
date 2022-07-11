// Function for adding the notes to local storage.

function addNote() {
  const noteTitle = document.getElementById("notes_title")?.value;
  const noteDescription = document.getElementById("notes_text")?.value;

  // Validating if the inputs are empty or not.

  if (!noteTitle && !noteDescription) {
    return alert("Please enter the valid input!");
  }
  if (!noteTitle) {
    return alert("Please enter the title!");
  }
  if (!noteDescription) {
    return alert("Please enter the description!");
  }

  // Retreiving data from localStorage.
  let notes = JSON.parse(getData("notes")) || [];
  notes.push({
    title: noteTitle,
    description: noteDescription,
    noteId: noteUniqueId(),
  });
  setData("notes", JSON.stringify(notes));

  addNoteToScreen(noteTitle, noteDescription, noteUniqueId());
  resetForm();
}

//Generating unique ID

function noteUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

// Function for resetting the form after inputs.

function resetForm() {
  const noteTitleElem = document.getElementById("notes_title");
  const noteDescriptionElem = document.getElementById("notes_text");
  noteTitleElem.value = "";
  noteDescriptionElem.value = "";
}

// Function for getting the notes from local storage.

function getData(key) {
  return localStorage.getItem(key);
}

// Function for setting the notes in local storage.

function setData(key, value) {
  return localStorage.setItem(key, value);
}

const notesContainer = document.getElementById("notes_list");
const totalNotesQty = document.getElementById("totalNotesQty");

// Function to load tha notes

function showNotes() {
  notesContainer.innerHTML = "";
  totalNotesQty.innerText = 0;
  let notes = JSON.parse(getData("notes"));
  if (notes === null) {
    return;
  }
  for (let i = 0; i < notes.length; i++) {
    const { title, description, noteId } = notes[i];
    addNoteToScreen(title, description, noteId);
  }
  const totalNotes = notes.length;
  totalNotesQty.innerText = `${totalNotes}`;
}
showNotes();

// Function for current date.

function currentDate() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDay();
  return `${day}/${month}/${year}`;
}

// Function to add the note on screen.

function addNoteToScreen(title, description, id) {
  document.getElementById("add_note_text").style.display = "none";
  const divElem = document.createElement("div");

  // edit button operation
  let editButtonDiv = document.createElement("div");
  editButtonDiv.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
  editButtonDiv.addEventListener("click", () => {
    return editNote(title, description, id);
  });
  // edit button operation end

  // delete button operation
  let deleteButtonDiv = document.createElement("div");
  deleteButtonDiv.innerHTML = `<i class="fa-regular fa-trash-can"></i>`;
  deleteButtonDiv.addEventListener("click", () => {
    return deleteNote(id);
  });
  // delete button operation end

  divElem.innerHTML = `<div class="notes_list_items">
  <div class= "edit_delete">
  <div id="editNote"></div>
  <div id="deleteNote"></div>    
    </div>
    <div class="notes_view_title" id="view_title">
      ${title}
    </div>
    <div class="notes_view_body" id="view_body">
      ${description}
    </div>
    <div class="note_mark_date">
    <i class="fa-regular fa-bookmark"></i>
    <div class="notes_view_updates" id="view_updated">
      ${currentDate()}
    </div>
    </div>
  </div>`;
  divElem.querySelector("#editNote").appendChild(editButtonDiv);
  divElem.querySelector("#deleteNote").appendChild(deleteButtonDiv);
  totalNotesQty.innerText = `${Number(totalNotesQty.innerText) + 1}`;
  notesContainer.prepend(divElem);
}

// Function to edit the notes.

function editNote(title, description, id) {
  let noteTitle = document.getElementById("notes_title");
  let noteDescription = document.getElementById("notes_text");
  noteTitle.value = title;
  noteDescription.value = description;
  deleteNote(id);
}

// Function to delete the notes.

function deleteNote(x) {
  let notes = JSON.parse(getData("notes"));
  let deleteElem = notes.findIndex((deleteId) => deleteId.noteId === x);
  notes.splice(deleteElem, 1);
  setData("notes", JSON.stringify(notes));
  showNotes();
}

// Function to search notes

function searchNotes() {
  let notes = JSON.parse(getData("notes"));
  // console.log("LN132", notes);
}

// Function dark theme

function darkModeIcon() {
  const darkModeIcon = document.querySelector(".darkMode");
  darkModeIcon.addEventListener(("onmouse", () => {}));
}

function darkTheme() {
  const body = document.querySelector("*");
  body.classList.toggle("darkMode");
  const searchBox = document.querySelector(".search_box");
  searchBox.classList.toggle("darkMode");
  const addBtn = document.getElementById("add_btn");
  addBtn.classList.toggle("darkMode");
}
