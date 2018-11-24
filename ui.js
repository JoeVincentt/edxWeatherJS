class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.originCountry = document.getElementById("w-country");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    //this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.tempmin = document.getElementById("w-tempmin");
    this.wind = document.getElementById("w-wind");
    this.clouds = document.getElementById("w-w");
    this.bg = document.getElementById("bg");
  }

  paint(weather) {
    this.location.textContent = weather.name;
    this.originCountry.textContent = `${weather.sys.country}`;
    this.string.textContent = `${weather.main.temp} °F`;
    this.clouds.textContent = `${weather.weather["0"].description}`;
    //this.icon.setAttribute('src', weather.icon); //icon for weather condition
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure} mmHg`;
    this.tempmin.textContent = `Temp minimum: ${weather.main.temp_min} °F`;
    this.wind.textContent = `Wind: ${weather.wind.speed} mph`;

    //Change background
    const icon = weather.weather["0"].main;
    console.log(icon);
    switch (icon) {
      case "Clouds":
        console.log(icon);
        this.bg.setAttribute(
          "style",
          'background-image: url("/9746723_orig.jpg");'
        );
        break;
      default:
        this.bg.setAttribute("style", 'background-image: url("/9.jpg");');
    }
  }
}
