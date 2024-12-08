const todo = document.querySelectorAll("ul > .todo");
const done = document.querySelectorAll("ul > .done");

todo.forEach((item) => {
  item.classList.toggle("todo");
  item.classList.toggle("done");
});

done.forEach((item) => {
  item.classList.toggle("done");
  item.classList.toggle("todo");
});

// for (let i = 0; i < li.length; i++) {
//   if (li[i].className === "todo") {
//     li.classList.remove("todo");
//     li.classList.add("done");
//   } else {
//     li.classList.remove("done");
//     li.classList.add("todo");
//   }
// }

// document.querySelector('.todo > a').className = 'done';
// document.querySelector('.done > a').className = 'todo';
