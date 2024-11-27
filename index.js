//const variables
const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

//array of dates of events scheduled
const events = [new Date(2024, 10, 7), new Date(2024, 10, 28), new Date(2024, 10, 10)];

/*
// Reference to the UL element
const listContainer = document.getElementById('myList');

// Generate list items and add them to the UL
events.forEach(item => {
    const li = document.createElement('li'); // Create a new <li> element
    li.textContent = events; // Set the text content to the array value
    listContainer.appendChild(li); // Append the <li> to the UL
});

*/



const renderCalendar = () =>
{
            let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
                firstDayofMonth = (firstDayofMonth === 0) ? 6 : firstDayofMonth - 1; // Adjust to make Sunday the start of the week

            let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
                lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
                lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month

            let liTag = "";





            //PREVIOUS MONTH LIST ITEMS - INACTIVE
            for (let i = firstDayofMonth; i > 0; i--)
            { // creating li of previous month last days
                liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
            }



            // CURRENT MONTH LIST ITEMS - ACTIVE
            for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
                let isToday = ""; // Initialize as empty

                // Check if the current iteration matches today's date
                if (i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear()) {
                    isToday = "active"; // Set to "active" by default for today's date
                }

                // Loop through events to check if the date matches an event
                for (let j = 0; j < events.length; j++) {
                    if (
                        events[j].getDate() === i &&
                        events[j].getMonth() === currMonth &&
                        events[j].getFullYear() === currYear
                    ) {
                        isToday = "scheduled"; // Override to "scheduled" if there's a matching event
                        break; // Exit the loop since we found a match
                    }
                }

                // Add the list item with the appropriate class
                liTag += `<li class="${isToday}">${i}</li>`;
            }






            //NEXT MONTH LIST ITEMS - INACTIVE
                    for (let i = lastDayofMonth; i < 7; i++)
                    {
                        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
                    }
                    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
                    daysTag.innerHTML = liTag;

}
//calling the function
renderCalendar();