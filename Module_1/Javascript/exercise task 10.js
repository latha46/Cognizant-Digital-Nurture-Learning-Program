// Sample event list
const events = [
  { id: 1, name: "Music Festival", date: "2025-06-01", category: "music", seats: 100 },
  { id: 2, name: "Art Workshop", date: "2025-06-10", category: "art", seats: 20 },
  { id: 3, name: "Tech Conference", date: "2025-07-05", category: "tech", seats: 50 },
];

// Function to display event info with default parameters
const displayEvent = ({ name, date, seats } = {}) => {
  if (!name) {
    console.log("No event data provided.");
    return;
  }
  console.log(`Event: ${name}, Date: ${date}, Seats available: ${seats}`);
};

// Clone event list before filtering to keep original intact
const filterEventsByCategory = (eventList, category = "music") => {
  // Using spread operator to clone array
  const clonedList = [...eventList];
  // Filter using destructuring to extract category from event object
  return clonedList.filter(({ category: cat }) => cat === category);
};

// Usage
displayEvent(events[0]);  // Using destructuring & default params
const musicEvents = filterEventsByCategory(events);  // Defaults to 'music' category

console.log("Filtered Events:", musicEvents);

// Output each filtered event
musicEvents.forEach(event => displayEvent(event));
