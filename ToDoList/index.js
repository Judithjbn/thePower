const tasks = [
  {
    title: "Tarea 1",
    completed: true,
  },
  {
    title: "Tarea 2",
    completed: false,
  },
  {
    title: "Tarea 3",
    completed: false,
  },
  {
    title: "Tarea 4",
    completed: false,
  },
];

const complete = (i) => {
  tasks[i].completed = true;
  orderTasks(tasks);
};

const printTasks = (taskToPrint) => {
  const ul = document.classSelector(".list");
  ul.innerHTML = "";

  for (let i = 0; i < taskToPrint.length; i++) {
    const task = taskToPrint[i];
    const li = document.createElement("li");
    li.textContent = task.title;
    li.addEventListener("click", () => complete(i));

    if (task.completed === true) {
      li.className("completed");
    }

    ul.appendChild(li);
  }
};

const orderTasks = (taskToOrder) => {
  taskToOrder.sort((a, b) => {
    if (a.completed && !b.completed) {
      return 1;
    }
    if (!a.completed && b.completed) {
      return -1;
    }
    return 0;
  });

  printTasks(taskToOrder);
};

const button = document.querySelector(".new > button");

button.addEventListener("click", addTask);

const addTask = () => {
  const input = document.querySelector(".new > input");
  const newTask = {
    title: input.value,
    completed: false,
  };
  tasks.unshift(newTask);
  input.value = "";
  printTasks(tasks);
};
