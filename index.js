const carsElem = document.querySelector('.cars');
const carColoursElem = document.querySelector('.colors');
const carMakeElem = document.querySelector('.make')

axios.get("https://api-tutor.herokuapp.com/v1/cars").then(function(result){
    console.log(result.data);

    result.data.forEach(car => {
        const li = document.createElement('tr');
        li.innerHTML = `<tr>
            <td>${car.model}</td>
            <td>${car.color}</td>
            <td>${car.make}</td>
        </tr>`
    carsElem.appendChild(li);

    });
})

axios.get("https://api-tutor.herokuapp.com/v1/colors").then(function(result){
    console.log(result.data);

    result.data.forEach(color => {
        const li = document.createElement('tr');
        li.innerHTML = `<tr>
            <td>${color}</td>
        </tr>`
        carColoursElem.appendChild(li);

    });
})

axios.get("https://api-tutor.herokuapp.com/v1/makes").then(function(result){
    console.log(result.data);

    result.data.forEach(make => {
        const li = document.createElement('tr');
        li.innerHTML = `<tr>
            <td>${make}</td>
        </tr>`
        carMakeElem.appendChild(li);

    });
})