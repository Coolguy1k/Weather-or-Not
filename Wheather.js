const elements = {
    searchInput: document.getElementById("search-input"),
    searchButton: document.getElementById("search-button"),
    cityName: document.getElementById("cityname"),
    cityHistory: document.getElementById("city-history"),
  };
  
  const indexs = [0, 7, 15, 23, 31, 39];
  const cityDayEls = Array.from({ length: 6 }, (_, i) =>
    document.getElementById(`cityday${i === 0 ? "" : i}`)
  );
  const tempEls = Array.from({ length: 6 }, (_, i) =>
    document.getElementById(`temp${i === 0 ? "" : i}`)
  );
  const humidEls = Array.from({ length: 6 }, (_, i) =>
    document.getElementById(`humid${i === 0 ? "" : i}`)
  );
  const windEls = Array.from({ length: 6 }, (_, i) =>
    document.getElementById(`wind${i === 0 ? "" : i}`)
  );
  const weatherIconEls = Array.from({ length: 6 }, (_, i) =>
    document.getElementById(`weather-icon${i === 0 ? "" : i}`)
  );
  
  const weatherDisplayEl = document.getElementById("displayweather");
  const weatherIconEl = document.getElementById("weather-icon");
  