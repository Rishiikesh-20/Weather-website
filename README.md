
# SKAR Weather Website 🌦️☀️🌙

## Project Overview 🌍

SKAR Weather is a dynamic web application that provides comprehensive weather information for any location. Built using Node.js, Express, and the WeatherAPI, this application offers real-time weather data, hourly forecasts, and additional atmospheric information.

## Features 🚀

### Current Weather Details
- Location name and region
- Current temperature 🌡️
- Weather condition
- Wind speed 🌬️
- Humidity percentage 💧
- Maximum and minimum temperatures

### Forecast Sections
- Hourly Weather Forecast
  - Temperatures for Morning, Afternoon, Evening, and Overnight
  - Interactive scrollable hourly view with temperature and weather icons

### Sun and Moon Information ☀️🌙
- Sunrise and sunset times
- Moonrise and moonset times
- Current moon phase

### Dynamic Background 🎨
- Automatically changes background based on current weather conditions
  - Sunny ☀️
  - Cloudy ☁️
  - Rainy 🌧️
  - Night 🌙

## Technologies Used 💻

- **Backend**: 
  - Node.js
  - Express.js
- **Frontend**:
  - EJS templating
  - HTML5
  - CSS3
  - Bootstrap
  - Custom JavaScript
- **API**: 
  - WeatherAPI.com

## Prerequisites 📋

- Node.js (v14 or higher)
- npm (Node Package Manager)
- WeatherAPI.com API Key

## Installation Steps 🔧

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/skar-weather-website.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `public/secret.txt` file and add your WeatherAPI key

4. Run the application
   ```bash
   node index.js
   ```

## Key Code Components 🧩

### Server Configuration (`index.js`)
- Express server setup
- WeatherAPI integration
- Route handling for home page and search
- Temperature averaging function

### Frontend Template (`index.ejs`)
- Responsive design
- Dynamic content rendering
- Weather icon display
- Hourly forecast scrolling

## Environmental Adaptations 🌈

The website dynamically changes its background and text color based on:
- Current weather condition (Sunny, Cloudy, Rainy)
- Time of day (Day/Night)

## Customization 🛠️

- Modify color schemes in CSS
- Adjust temperature ranges
- Add more detailed weather information

## Limitations ⚠️

- Requires active internet connection
- Depends on WeatherAPI.com's data accuracy and availability

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Done by Rishiikesh S K
