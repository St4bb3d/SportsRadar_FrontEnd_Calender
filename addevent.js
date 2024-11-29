// Reference to the form element
const eventForm = document.getElementById('eventForm');

// Event listener for form submission
eventForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get form input values
    const title = document.getElementById('title').value;
    let date = new Date(document.getElementById('date').value);
    const time = document.getElementById('time').value;
    const location = document.getElementById('location').value;
    const sportType = document.getElementById('sportType').value;

    // Correct the date to prevent timezone issues
    date.setUTCHours(0, 0, 0, 0); // Set time to midnight UTC to avoid timezone shifts

    // Validate the input
    if (!title || !date || !time || !location || !sportType) {
        alert('Please fill out all fields before adding an event.');
        return;
    }

    // Create a new event object
    const newEvent = {
        date: date.toISOString(),
        title: `${sportType}: ${title}`,
        sport: sportType
    };

    // Save the event to sessionStorage
    const storedEvents = JSON.parse(window.sessionStorage.getItem('events')) || [];
    storedEvents.push(newEvent);
    window.sessionStorage.setItem('events', JSON.stringify(storedEvents));

    // Alert the user and redirect back to the calendar
    alert('Event added successfully!');
    window.location.href = 'index.html';
});
