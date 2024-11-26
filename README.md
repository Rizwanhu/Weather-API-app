## Weather-API-app
---

This is a simple weather application built using Node.js, Express, and OpenWeatherMap API. The app allows users to input a city name via a form, and it fetches and displays the current weather details for the given city, including temperature, weather description, and an icon.

# Features:
Weather Data: Displays current weather data like temperature, description, and weather icon.
City Search: Allows users to search for weather details by city name.
Responsive UI: Displays the weather details dynamically when a city is searched.

---

# Tech Stack:

Backend: Node.js, Express
API: OpenWeatherMap API
Frontend: HTML form (can be extended to React if desired)

---

# Dependencies:
express: Web framework for Node.js.
body-parser: Middleware to parse incoming request bodies.
https: Node's built-in module to make HTTPS requests.
dotenv: For managing environment variables securely.
---
# Prerequisites:
Before running this application, make sure you have the following installed:
---
Node.js: Download Node.js
npm (Node Package Manager): npm comes with Node.js, so it will be installed automatically.
Additionally, you'll need an OpenWeatherMap API key to fetch weather data. You can sign up and get your API key here: OpenWeatherMap.

---
# Setup Instructions:

Clone the repository:
```
git clone https://github.com/yourusername/weather-app.git
```

Navigate to the project directory:

```
cd weather-app
```
Install the required dependencies:
```
npm install
```

---

# Set up the API key:

Create a .env file in the root directory of the project.
Add your OpenWeatherMap API key to the .env file:

```
API_KEY=your_openweathermap_api_key
```

--`
Run the server:

```
node app.js
```
---

# Access the app:

Open your browser and go to http://localhost:3000.
You will see the form to input a city name and retrieve the weather information.


# How It Works:
The app sends a POST request to the backend when the user submits the city name via the HTML form.
The backend (Node.js + Express) sends an HTTPS request to the OpenWeatherMap API with the city name and API key.
The backend processes the response, extracts the relevant weather data, and sends it back to the frontend.
The frontend dynamically displays the weather information, including temperature, weather description, and an icon.
---

# Example Response:
After submitting a city, the app will display:

Temperature in Celsius.
Weather description (e.g., clear sky, rain, etc.).
An image icon representing the weather condition.
Example output:

```
The temperature in Lahore is 28°C
It's clear sky today!
```

---

# Project Structure:
```
/weather-app
│
├── app.js                # Main server file
├── index.html            # Frontend HTML form
├── .env                  # Environment variables (API key)
├── node_modules/         # Dependencies (installed via npm)
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```
---

# Contributions:
Feel free to fork this project and make improvements. Contributions are welcome!
---
# License:
This project is open-source and available under the MIT License.
---
# Acknowledgements:
OpenWeatherMap API for providing weather data.

---
