// Select DOM elements
const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date");

// Get current date, year, and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// Full month names array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

//  events array
let events = [
];

// Load events from session storage and merge with static events
const loadStoredEvents = () => {
    const storedEvents = JSON.parse(window.sessionStorage.getItem('events')) || [];
    // Only add unique events to avoid duplication
    storedEvents.forEach(event => {
        const eventDate = new Date(event.date);
        if (!events.some(e => e.date.getTime() === eventDate.getTime() && e.title === event.title)) {
            events.push({
                date: eventDate,
                title: event.title,
                sport: event.sport
            });
        }
    });
};

// Render the calendar
const renderCalendar = () => {
    // Load stored events
    loadStoredEvents();

    let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay() || 7; // Adjust for Sunday start
    let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay() || 7;
    let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = "";

    // Previous month's inactive days
    for (let i = firstDayOfMonth - 1; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    // Current month's active days
    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && currMonth === date.getMonth() && currYear === date.getFullYear() ? "active" : "";
        let isScheduled = "";
        let eventDetails = "";

        // Check if the day has a scheduled event
        const event = events.find(
            event =>
                event.date.getUTCDate() === i &&
                event.date.getUTCMonth() === currMonth &&
                event.date.getUTCFullYear() === currYear
        );

        if (event) {
            isScheduled = "scheduled";
            eventDetails = event.title;
        }

        liTag += `<li class="${isToday} ${isScheduled}" title="${eventDetails}">${i}</li>`;
    }

    // Next month's inactive days
    for (let i = 1; i <= 7 - lastDayOfMonth; i++) {
        liTag += `<li class="inactive">${i}</li>`;
    }

    // Update the DOM
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;

    // Add click event listeners
    document.querySelectorAll('.days li').forEach(day => {
        day.addEventListener('click', () => {
            if (day.classList.contains('scheduled')) {
                const event = events.find(
                    e => e.date.getUTCDate() === parseInt(day.innerText) &&
                        e.date.getUTCMonth() === currMonth &&
                        e.date.getUTCFullYear() === currYear
                );
                if (event) {
                    window.location.href = `events.html?date=${event.date.toISOString()}&title=${encodeURIComponent(event.title)}&sport=${event.sport}`;
                }
            } else if (!day.classList.contains('inactive')) {
                window.location.href = 'addevent.html';
            }
        });
    });
};

// Call renderCalendar on load
renderCalendar();