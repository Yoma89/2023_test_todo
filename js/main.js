// ! =============== localStorage ==========================

// localStorage
// console.log(localStorage);

// * метод setItem
// для отправки данных
localStorage.setItem('name', 'Emil');
let obj = {
    city: 'LA',
    country: 'US',
};
localStorage.setItem('location', JSON.stringify(obj))
// Для отправки данных в localStorage используется метод setItem, который принимает 2 аргумента: название ключа и данные в формате JSON.stringify

// * метод getItem
//  для получения данных из localStorage. Принимает один аргумент - ключ.
//  Данные приходят в формате JSON.stringify, поэтому при получении нужно перевести в JSON.parse

let data1 = localStorage.getItem('name');
console.log(data1);

let data2 = JSON.parse(localStorage.getItem('location'));
console.log(data2);

// * removeItem
// удаляет ключ
// localStorage.removeItem('location');

// * clear
// удаляет все
// localStorage.clear();

// localStorage.setItem('example', 'Будет храниться даже если закроем браузер и закоментируем данный код');


// ! ====================== sessionStorage ==========================

// * очищается при закрытии вкладки или браузера
// sessionStorage.setItem('example', 'Не будет храниться даже если закроем браузер и закоментируем данный код');

// ! ============ CRUD --- Create / Read / Update / Delete ===============================

// todo --------------- ToDo List --------------------------------------

// let form = document.querySelector('form');
// let inp = document.querySelector('form input');
// let ul = document.querySelector('ul');

// ! create
// function createTask () {
// * создаем пустой массив если поле пустое
//     if (localStorage.getItem('tasks-data') === null) {
//         localStorage.setItem('tasks-data', '[]');
//     }
// }

// form.addEventListener('submit', () => {
//     createTask();
// });

let form = document.querySelector("form");
let inpTask = document.querySelector("form input");
let list = document.querySelector("ul");

// ! create
function createTask() {
  if (!localStorage.getItem("tasks-data")) {
    localStorage.setItem("tasks-data", "[]");
  }

  let data = JSON.parse(localStorage.getItem('tasks-data'));
  console.log(data);
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let obj = {task: inpTask.value};
    let data = JSON.parse(localStorage.getItem('tasks-data'));
    data.push(obj)
    localStorage.setItem('tasks-data', JSON.stringify(data));
    // в аргумент функции добавляем объект
    setItemObjTask(obj);

    createTask();
});

