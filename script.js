let temperature = 3.8;

function updateTemperature() {
  // Randomly change temperature
  let change = (Math.random() - 0.5) * 0.6;

  temperature = temperature + change;

  // Keep temperature between 2 and 8
  if (temperature < 2) {
    temperature = 2;
  }

  if (temperature > 8) {
    temperature = 8;
  }

  // Display temperature

  let temperatureElement = document.getElementById("fridgeTemperature");

  if (temperatureElement) {
    temperatureElement.innerText = temperature.toFixed(1) + "°C";
  }

  // Determine status

  let statusElement = document.getElementById("fridgeStatus");

  if (statusElement) {
    if (temperature <= 5) {
      statusElement.innerText = "● Normal";

      statusElement.style.color = "#16a34a";
    } else if (temperature <= 7) {
      statusElement.innerText = "● Warning";

      statusElement.style.color = "#d97706";
    } else {
      statusElement.innerText = "● Danger";

      statusElement.style.color = "#dc2626";
    }
  }
}

// Update every 3 seconds

setInterval(updateTemperature, 3000);
