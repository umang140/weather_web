const cityname = document.getElementById('cityname');
const submitbtn = document.getElementById('submitbtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('tempreal_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) =>{
    event.preventDefault();
    let cityval = cityname.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=ahmedabad&units=metric&appid=f127674f66803330801d6e4dbb7e7726`;

    if(cityval === ""){
        city_name.innerText = `Plz write the name before search`;
        datahide.classList.add('data_hide');
    } else {
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=f127674f66803330801d6e4dbb7e7726`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];

        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        // temp_status.innerText = arrData[0].weather[0].main;
        const tempStatus = arrData[0].weather[0].main;

        if(tempStatus == "Clear"){
            temp_status.innerHTML = '<i class="fas fa-sun" style="color: #eccc68;"></i>';
        } else if(tempStatus == "Clouds"){
            temp_status.innerHTML = '<i class="fas fa-cloud" style="color: #f1f2f6;"></i>';
        } else if(tempStatus == "Rainy"){
            temp_status.innerHTML = '<i class="fas fa-rain" style="color: #a4b0be;"></i>';
        } else{
            temp_status.innerHTML = '<i class="fas fa-sun" style="color: #eccc68;"></i>';
        }
        datahide.classList.remove('data_hide');
            
        } catch {
            city_name.innerText = `Plz enter the name properly`;
        datahide.classList.add('data_hide');
        }
    }
}

submitbtn.addEventListener('click',getInfo);