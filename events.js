// Reference to the event list container
const eventList = document.querySelector('.event-list');

// Load all events from sessionStorage and display them
const loadEvents = () => {
    // Get stored events from session storage
    const storedEvents = JSON.parse(window.sessionStorage.getItem('events')) || [];

    // Clear the event list before loading (just in case)
    eventList.innerHTML = '';

    if (storedEvents.length === 0) {
        eventList.innerHTML = '<li>No events scheduled yet.</li>';
        return;
    }

    // Loop through each event and create a list item for it
    storedEvents.forEach(event => {
        const eventDate = new Date(event.date);
        const eventHTML = `
            <li class="event-card">
                <h3>${event.title}</h3>
                <p><strong>Date:</strong> ${eventDate.toDateString()}</p>
                <p><strong>Sport:</strong> ${event.sport}</p>
            </li>
        `;
        eventList.innerHTML += eventHTML;
    });
};

// Retrieve query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);
const dateParam = urlParams.get('date');
const titleParam = urlParams.get('title');
const sportParam = urlParams.get('sport');

// Format the date from the URL parameter
const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString(); // Formats as "Day Mon Date Year"
};

// Display the details of a specific event if the query parameters are available
const displaySpecificEvent = () => {
    if (dateParam && titleParam && sportParam) {
        eventList.innerHTML = `
            <div class="event-card">
                <h3>${titleParam}</h3>
                <p><strong>Date:</strong> ${formatDate(dateParam)}</p>
                <p><strong>Sport:</strong> ${sportParam}</p>
            </div>
        `;

        // Add a back button for better navigation
        const backButton = document.createElement('button');
        backButton.textContent = 'Back to Full Event List';
        backButton.style.marginTop = '20px';
        backButton.style.padding = '10px 20px';
        backButton.style.backgroundColor = '#007BFF';
        backButton.style.color = '#fff';
        backButton.style.border = 'none';
        backButton.style.borderRadius = '4px';
        backButton.style.cursor = 'pointer';

        backButton.addEventListener('click', () => {
            loadEvents(); // Load all events again
        });

        document.querySelector('.events').appendChild(backButton);
    }
};

// Load all events initially when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (dateParam && titleParam && sportParam) {
        // If query parameters are available, show the specific event details
        displaySpecificEvent();
    } else {
        // Otherwise, show all events
        loadEvents();
    }
});
