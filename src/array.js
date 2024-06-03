const calendarArray = [
  {
    month: "january",
    days: [
      {
        date: "1",
        dateInclusive: true,
        eventScheduled: false,
      },
      {
        date: "2",
        dateInclusive: true,
        eventScheduled: true,
      },
      {
        date: "3",
        dateInclusive: true,
        eventScheduled: false,
      },
      {
        date: "4",
        dateInclusive: true,
        eventScheduled: true,
      },
      {
        date: "5",
        dateInclusive: true,
        eventScheduled: true,
      },
      {
        date: "6",
        dateInclusive: true,
        eventScheduled: false,
      },
      {
        date: "7",
        dateInclusive: true,
        eventScheduled: false,
      },
    ],
  },

  {
    month: "february",
    days: [
      {
        date: "1",
        dateInclusive: true,
        eventScheduled: false,
      },
      {
        date: "2",
        dateInclusive: true,
        eventScheduled: true,
      },
      {
        date: "3",
        dateInclusive: true,
        eventScheduled: false,
      },
      {
        date: "4",
        dateInclusive: true,
        eventScheduled: false,
      },
      {
        date: "5",
        dateInclusive: true,
        eventScheduled: true,
      },
      {
        date: "6",
        dateInclusive: true,
        eventScheduled: false,
      },
      {
        date: "7",
        dateInclusive: true,
        eventScheduled: true,
      },
    ],
  },
];


  // Function to get the first six scheduled events
  const getFirstSixScheduledEvents = (calendarArray) => {
    const events = [];

    for (const month of calendarArray) {
      for (const day of month.days) {
        if (day.eventScheduled) {
          events.push({ month: month.month, date: day.date });
        }
        if (events.length === 6) {
          return events;
        }
      }
    }

    return events;
  };

  const firstSixEvents = getFirstSixScheduledEvents(calendarArray);

  console.log("the result:", firstSixEvents);
