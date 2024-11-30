//HARDCODE JSON FILE
const jsonData = {
    "data": [{
        "season": 2024,
        "status": "played",
        "timeVenueUTC": "00:00:00",
        "dateVenue": "2024-01-03",
        "stadium": null,
        "homeTeam": {
            "name": "Al Shabab",
            "officialName": "Al Shabab FC",
            "slug": "al-shabab-fc",
            "abbreviation": "SHA",
            "teamCountryCode": "KSA",
            "stagePosition": null
        },
        "awayTeam": {
            "name": "Nasaf",
            "officialName": "FC Nasaf",
            "slug": "fc-nasaf-qarshi",
            "abbreviation": "NAS",
            "teamCountryCode": "UZB",
            "stagePosition": null
        },
        "result": {
            "homeGoals": 1,
            "awayGoals": 2,
            "winner": "Nasaf",
            "message": null,
            "goals": [],
            "yellowCards": [],
            "secondYellowCards": [],
            "directRedCards": []
        },
        "stage": {
            "id": "ROUND OF 16",
            "name": "ROUND OF 16",
            "ordering": 4
        },
        "group": null,
        "originCompetitionId": "afc-champions-league",
        "originCompetitionName": "AFC Champions League"
    }, {
        "season": 2024,
        "status": "scheduled",
        "timeVenueUTC": "16:00:00",
        "dateVenue": "2024-01-03",
        "stadium": null,
        "homeTeam": {
            "name": "Al Hilal",
            "officialName": "Al Hilal Saudi FC",
            "slug": "al-hilal-saudi-fc",
            "abbreviation": "HIL",
            "teamCountryCode": "KSA",
            "stagePosition": null
        },
        "awayTeam": {
            "name": "Shabab Al Ahli",
            "officialName": "SHABAB AL AHLI DUBAI",
            "slug": "shabab-al-ahli-club",
            "abbreviation": "SAH",
            "teamCountryCode": "UAE",
            "stagePosition": null
        },
        "result": {
            "homeGoals": 0,
            "awayGoals": 0,
            "winner": null,
            "winnerId": null,
            "message": null,
            "goals": [],
            "yellowCards": [],
            "secondYellowCards": [],
            "directRedCards": [],
            "scoreByPeriods": null
        },
        "stage": {
            "id": "ROUND OF 16",
            "name": "ROUND OF 16",
            "ordering": 4
        },
        "group": null,
        "originCompetitionId": "afc-champions-league",
        "originCompetitionName": "AFC Champions League"
    }, {
        "season": 2024,
        "status": "scheduled",
        "timeVenueUTC": "15:25:00",
        "dateVenue": "2024-01-04",
        "stadium": null,
        "homeTeam": {
            "name": "Al Duhail",
            "officialName": "AL DUHAIL SC",
            "slug": "al-duhail-sc",
            "abbreviation": "DUH",
            "teamCountryCode": "QAT",
            "stagePosition": null
        },
        "awayTeam": {
            "name": "Al Rayyan",
            "officialName": "AL RAYYAN SC",
            "slug": "al-rayyan-sc",
            "abbreviation": "RYN",
            "teamCountryCode": "QAT",
            "stagePosition": null
        },
        "result": {
            "homeGoals": 0,
            "awayGoals": 0,
            "winner": null,
            "winnerId": null,
            "message": null,
            "goals": [],
            "yellowCards": [],
            "secondYellowCards": [],
            "directRedCards": [],
            "scoreByPeriods": null
        },
        "stage": {
            "id": "ROUND OF 16",
            "name": "ROUND OF 16",
            "ordering": 4
        },
        "group": null,
        "originCompetitionId": "afc-champions-league",
        "originCompetitionName": "AFC Champions League"
    }, {
        "season": 2024,
        "status": "scheduled",
        "timeVenueUTC": "08:00:00",
        "dateVenue": "2024-01-04",
        "stadium": null,
        "homeTeam": {
            "name": "Al Faisaly",
            "officialName": "Al Faisaly FC",
            "slug": "al-faisaly-fc",
            "abbreviation": "FAI",
            "teamCountryCode": "KSA",
            "stagePosition": null
        },
        "awayTeam": {
            "name": "Foolad",
            "officialName": "FOOLAD KHOUZESTAN FC",
            "slug": "foolad-khuzestan-fc",
            "abbreviation": "FLD",
            "teamCountryCode": "IRN",
            "stagePosition": null
        },
        "result": {
            "homeGoals": 0,
            "awayGoals": 0,
            "winner": null,
            "winnerId": null,
            "message": null,
            "goals": [],
            "yellowCards": [],
            "secondYellowCards": [],
            "directRedCards": [],
            "scoreByPeriods": null
        },
        "stage": {
            "id": "ROUND OF 16",
            "name": "ROUND OF 16",
            "ordering": 4
        },
        "group": null,
        "originCompetitionId": "afc-champions-league",
        "originCompetitionName": "AFC Champions League"
    }, {
        "season": 2024,
        "status": "scheduled",
        "timeVenueUTC": "00:00:00",
        "dateVenue": "2024-01-19",
        "stadium": null,
        "homeTeam": null,
        "awayTeam": {
            "name": "Urawa Reds",
            "officialName": "Urawa Red Diamonds",
            "slug": "urawa-red-diamonds",
            "abbreviation": "RED",
            "teamCountryCode": "JPN",
            "stagePosition": null
        },
        "result": null,
        "stage": {
            "id": "FINAL",
            "name": "FINAL",
            "ordering": 7
        },
        "group": null,
        "originCompetitionId": "afc-champions-league",
        "originCompetitionName": "AFC Champions League"
    }]

}

// Extract events from JSON data
const convertJsonToEventArray = (data) => {
    return data.map(event => {
        return {
            date: new Date(event.dateVenue),
            title: `${event.homeTeam ? event.homeTeam.name : 'TBD'} vs. ${event.awayTeam.name}`,
            sport: event.originCompetitionName
        };
    });
};

// Add the events from JSON data to the existing events array
const jsonEvents = convertJsonToEventArray(jsonData.data);
let events = jsonEvents;



// Select DOM elements
const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date");

// Get current date, year, and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// Full month names array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
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
    // Load events from sessionStorage and merge with json events
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
                event.date.getDate() === i &&
                event.date.getMonth() === currMonth &&
                event.date.getFullYear() === currYear
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
                    e => e.date.getDate() === parseInt(day.innerText) &&
                        e.date.getMonth() === currMonth &&
                        e.date.getFullYear() === currYear
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