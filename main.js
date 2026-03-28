const todoForm = document.getElementById("form");
const todoInput = document.getElementById("input");
const todoList = document.getElementById("list");

console.log(todoForm, todoInput, todoList);

function addTodo(e) {
  e.preventDefault();

  const inputningQiymati = todoInput.value.trim();

  const newLi = document.createElement("li");
  newLi.className = "w-full bg-white p-4 rounded flex justify-between";

  newLi.innerHTML = `
    <div class="flex items-center gap-3">
      <h2 class="text-black font-bold">
        Reja nomi: <span class="text-red-600">${inputningQiymati}</span>
      </h2>
      <input type="checkbox"/>
    </div>

    <div>
      <button class="edit btn btn-warning">Edit</button>
      <button class="delete btn btn-secondary">Delete</button>
    </div>
  `;

  todoList.append(newLi);

  todoInput.value = "";
}

todoForm.addEventListener("submit", addTodo);