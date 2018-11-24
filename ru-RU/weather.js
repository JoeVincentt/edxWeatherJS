class Weather {
  constructor(city, country) {
    this.apiKey = "5b1fa0bc9602a38e3fade523feec3d36";
    this.city = city;
    this.country = country;
  }

  //Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&appid=${this.apiKey}&units=metric&lang=ru`
    );

    //Handle 404 error
    const notFound = response.status;
    if (notFound !== 200) {
      alert("Город не найден!");
    }
    const responseData = await response.json();
    return responseData;
  }

  //Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
