function showDateTime() {
  // Create a new Date object
  var currentDate = new Date();

  // Get the day, date, and time components
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };
  var formattedDateTime = currentDate.toLocaleString('en-US', options);

  // Display the formatted date and time
  const datetime = document.getElementById('datetime');
  datetime.innerHTML = formattedDateTime;
}

// Call the function initially
showDateTime();

// Set interval to call the function every second (1000 milliseconds)
setInterval(showDateTime, 1000);

async function showWeather() {
  //   setTimeout(() => {}, 200);

  const url =
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Whistler&country=Canada';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1bfa231b03msh5dbc2bef013530ap161573jsn7449e3ff3d21',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result);
    // const temp = result.temp;
    console.log(result);
    const tempDisplay = document.getElementById('temp');
    const humidity = document.getElementById('hum');
    const feels = document.getElementById('feels');
    // tempDisplay = document.getElementById('temp');
    tempDisplay.innerHTML = `Temperature: ${result.temp}&deg;C`;
    humidity.innerHTML = `Humidity: ${result.humidity}%`;
    feels.innerHTML = `Feels like: ${result.feels_like}&deg;C`;
    // tempDisplay.classList.add('text-blue-500');
  } catch (error) {
    console.error(error);
  }
}

showWeather();

async function showTime() {
  const url =
    'https://location-and-time.p.rapidapi.com/datetime/bycity?city=Manila';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1bfa231b03msh5dbc2bef013530ap161573jsn7449e3ff3d21',
      'X-RapidAPI-Host': 'location-and-time.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    // console.log(result.response);
    const phTime = document.getElementById('phTime');
    phTime.innerText = result.response.ctime;
  } catch (error) {
    console.error(error);
  }
}

showTime();

async function showExchangeRate() {
  const url =
    'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert?from=CAD&to=PHP&amount=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1bfa231b03msh5dbc2bef013530ap161573jsn7449e3ff3d21',
      'X-RapidAPI-Host':
        'currency-conversion-and-exchange-rates.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.result);
    const phInfo = document.getElementById('phInfo');
    const newP = document.createElement('p');
    exchangeRate = Number(result.result).toFixed(2);
    // Set the text content of the new div to the ctime property
    newP.innerText = `CAD to PHP Exchange Rate: ${exchangeRate}`;

    // Append the new div to the container
    phInfo.appendChild(newP);
  } catch (error) {
    console.error(error);
  }
}

showExchangeRate();

async function quoteOfTheDay() {
  const url = 'https://words-api5.p.rapidapi.com/api/v1/dict/quotes/today';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1bfa231b03msh5dbc2bef013530ap161573jsn7449e3ff3d21',
      'X-RapidAPI-Host': 'words-api5.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data);
    // const randomShit = document.getElementById('randomShit');
    // const newQuote = result.data.quote;
    const newP = document.getElementById('newP');
    newP.innerText = `"${result.data.quote}"\nby ${result.data.author}`;
    // randomShit.appendChild(newP);
    // newP.classList.add('text-5xl', 'text-white');
  } catch (error) {
    console.error(error);
  }
}

quoteOfTheDay();
