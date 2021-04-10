document.addEventListener('DOMContentLoaded', () => {
  // create input field
  const newInput = document.createElement('input');
  newInput.setAttribute('id', 'input');
  document.getElementById('root').appendChild(newInput);

  // create a button to add new task
  const addButton = document.createElement('button');
  addButton.setAttribute('id', 'button');
  addButton.innerText = 'add';
  addButton.addEventListener('click', () => {
    addTask(document.getElementById('input').value);
  });
  document.getElementById('root').appendChild(addButton);

  // create list to display tasks
  const newList = document.createElement('ul');
  newList.setAttribute('id', 'ul');
  document.getElementById('root').appendChild(newList);

  // grab all tasks
  fetch('/task')
    .then((data) => data.json())
    .then((data) => {
      data.map((task) => {
        // add task to list
        createNewItem(task);
      });
    });
});

function addTask(newTask) {
  // prepare body
  const body = { task: newTask };

  // make post request
  fetch('/task', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      createNewItem(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function deleteTask(id) {
  // prepare body
  const taskId = { _id: id };

  // make delete request
  fetch('/task', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskId),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
  document.getElementById(id).remove();
}

function createNewItem(task) {
  const newTask = document.createElement('li');
  newTask.innerHTML = `${task.task}`;
  newTask.setAttribute('id', `${task._id}`);

  // create a button to delete task
  const deleteButton = document.createElement('button');
  deleteButton.addEventListener('click', (event) => {
    deleteTask(event.target.parentNode.id);
  });
  deleteButton.innerText = 'remove';

  document.getElementById('ul').appendChild(newTask).appendChild(deleteButton);
}
