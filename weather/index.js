var inputvalue = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik ="d10480e5298dbc28e34c85d3b14c64041"
function convertion(val)
{
    return (val - 273).toFixed(3)
}

btn.addEventListener('click', function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
      var nameval = data['name']
      var descrip = data['Weather']['0']['description']
      var tempreture = data['main']['temp']
      var windspeed = data['wind']['speed']

      city.innerHTML='Weather of <span>${nameval}<span>'
      temp.innerHTML= 'Temperature: <span>${ convertion(temperature)} C</span>'
      descrip.innerHTML= 'Sky Condition: <span>${descrip} km/h <span>'
      wind.innerHTML= 'Wind speed: <span>${wndspeed} km/h <span>'
    })

    .catch(err =>alert('you entered wrong  city name'))
})
