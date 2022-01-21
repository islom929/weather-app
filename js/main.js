const elDegree = document.querySelector('.degree')
const elCondition = document.querySelector('.condition')
const elDate = document.querySelector('.date')
const elMaxDegree = document.querySelector('.max')
const elMinDegree = document.querySelector('.min')

const url = 'https://api.openweathermap.org/data/2.5/'
const weatherFetch = fetch (`${url}weather?q=london&units=metric&APPID=f5deb38afcb1af7bcefbcecf3c6dac44`)
.then(data => data.json())
.then(weather => {
  elDegree.innerHTML =  `${Math.floor(weather.main.temp)}℃`
  elCondition.innerHTML = `${weather.weather[0].main}`
  document.querySelector('.wind').innerHTML = `speed:${Math.floor(weather.wind.speed)} m/h`
})

let date = new Date

const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];

elDate.innerHTML = (month + 1) + '-' + day + '-' + year