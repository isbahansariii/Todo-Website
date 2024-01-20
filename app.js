let head = document.querySelector("#head");
let add = document.querySelector("#add");
let input = document.querySelector(".con-input");
let listInput = document.querySelector("#list-input");
let submit = document.querySelector("#submit");
let ul = document.querySelector("ul");
let list = document.querySelectorAll(".list"),
  Delete = document.querySelectorAll(".delete"),
  markAsDone = document.querySelectorAll(".markAsDone");
let delAll = document.querySelector("#deleteAllBtn");

let toDelAll = ()=>{
  list.forEach((el)=>{
    el.remove();
  });
}

let toDelete = () => {
  Delete.forEach((el) => {
    el.addEventListener("click", () => {
      el.parentElement.remove();
    });
  });
};

let getMarked = () => {
  markAsDone.forEach((el) => {
    el.addEventListener("click", () => {
        el.parentElement.style.backgroundColor = "green";
    });
  });
};

let updateList = () => {
  list = document.querySelectorAll(".list");
  Delete = document.querySelectorAll(".delete");
  markAsDone = document.querySelectorAll(".markAsDone");
  getMarked();
  toDelete();
};

let createList = (inputVal) => {
  let div = document.createElement("div");
  let li = document.createElement("li");
  let delBtn = document.createElement("button");
  let delIcon = document.createElement("i");
  let readBtn = document.createElement("button");
  let readIcon = document.createElement("i");

  div.classList.add("list", "cursor");

  // list properties
  li.classList.add("list-el");
  li.innerText = `🔥 ${inputVal}`;

  // class property given del button
  delBtn.classList.add("delete", "cursor");
  delIcon.classList.add("fa", "fa-trash");
  delBtn.title = "Delete";
  delIcon.ariaHidden = "true";

  // class property given mark as read btn
  readBtn.classList.add("markAsDone", "cursor");
  readIcon.classList.add("fa", "fa-check-circle");
  readBtn.title = "Mark as done";
  readIcon.ariaHidden = "true";

  // adding element in right position
  delBtn.append(delIcon);
  readBtn.append(readIcon);

  div.append(li);
  div.append(delBtn);
  div.append(readBtn);

  ul.prepend(div);
  updateList();
};

let getTodoInput = () => {
  let inputTodo = listInput.value;
  createList(inputTodo);
  listInput.value = "";
};

let updateTodoList = () => {
  getTodoInput();
};

// styling purpose
let hideInput = () => {
  input.classList.add("hide");
};
// styling purpose
let showInput = () => {
  input.classList.remove("hide");
};

submit.addEventListener("click", updateTodoList);
submit.addEventListener("click", hideInput);
add.addEventListener("click", showInput);
delAll.addEventListener("click", toDelAll);
