document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const form = document.getElementById('create-task-form');

  // Add event listener for the submit event
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Your additional logic can go here
    // For example, you can access the input values:
    const taskDescription = document.getElementById('new-task-description').value;
    const taskUser = document.getElementById('new-task-user').value;
    const taskDuration = document.getElementById('new-task-duration').value;
    const taskDueDate = document.getElementById('new-task-due-date').value;

    // Log the input values for demonstration
    console.log('Task description:', taskDescription);
    console.log('User:', taskUser);
    console.log('Duration:', taskDuration);
    console.log('Due Date:', taskDueDate);
  });
});