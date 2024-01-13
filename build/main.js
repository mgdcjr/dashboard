// const { document } = require('postcss');

function updateDateTime() {
  var currentDate = new Date();
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short',
  };
  var formattedDate = currentDate.toLocaleDateString('en-US', options);

  document.getElementById('datetime').textContent = formattedDate;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();

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
    humidity.innerHTML = `Humidity: ${result.humidity}`;
    feels.innerHTML = `Feels like: ${result.feels_like}&deg;C`;
  } catch (error) {
    console.error(error);
  }
}

showWeather();
