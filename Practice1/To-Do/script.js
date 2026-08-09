// Grab the HTML elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Add new task when form is submitted
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page from reloading
    
    const taskText = input.value.trim();
    if (taskText === '') return;

    // Create a new list item
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">&times;</button>
    `;
    
    // Add it to the list and clear the input
    list.appendChild(li);
    input.value = ''; 
    input.focus();
});

// Handle clicking on tasks (toggle complete / delete)
list.addEventListener('click', (e) => {
    const target = e.target;
    
    // Toggle completion if the text (span) is clicked
    if (target.tagName === 'SPAN') {
        target.classList.toggle('completed');
    } 
    // Delete task if the 'x' button is clicked
    else if (target.classList.contains('delete-btn')) {
        target.parentElement.remove();
    }
});