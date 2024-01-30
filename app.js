var inputBox = document.getElementById('input');
var unorderedList = document.getElementById('todolist');
var s = [];
let addBtn = document.getElementById('button');
addBtn.addEventListener('click', function () {
  s.push(inputBox.value);
  inputBox.value = '';
  list();
});

function list() {
  //making unordered list's inner html to empty string because the given input should not repeat again
  unorderedList.innerHTML = '';
  s.forEach((element, index) => {
    const Li = document.createElement('li');
    Li.textContent = element;
    Li.style.marginBottom = '20px';
    Li.style.padding = '20px';
    Li.style.boxShadow = '-1px -1px 5px 0px gray';
    Li.style.borderBottom = '5px solid #7055d3';

    var editBtn = document.createElement('span');
    editBtn.textContent = 'Edit';
    editBtn.style.marginRight = '5px';
    editBtn.style.marginLeft = '270px';
    editBtn.style.cursor = 'pointer';
    editBtn.addEventListener('click', function () {
      var value = prompt('Enter your edited todo:', element);
      if (value) {
        s[index] = value;
        list();
      }
    });

    Li.appendChild(editBtn);

    var delBtn = document.createElement('span');
    delBtn.textContent = '|x';
    delBtn.style.cursor = 'pointer';
    delBtn.addEventListener('click', function () {
      s.splice(index, 1);
      list();
    });

    Li.appendChild(delBtn);
    unorderedList.appendChild(Li);
  });
}
