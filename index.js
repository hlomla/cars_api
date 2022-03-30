const carsElem = document.querySelector('.cars');
const carColoursElem = document.querySelector('.colors');
const carMakeElem = document.querySelector('.make');
const button = document.querySelector('.display')
const displaySelected = document.querySelector('.carsFiltered')

axios.get("https://api-tutor.herokuapp.com/v1/cars").then(function(result){
    // console.log(result.data);

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



button.addEventListener('click', function(){
    let selectedColor = document.querySelector('.filterColours').value
    let selectedBrands = document.querySelector('.filterBrands').value;
    console.log(selectedBrands);

    if(selectedColor && selectedBrands){
        axios.get(`https://api-tutor.herokuapp.com/v1/cars`).then(function(result){
            console.log(result.data);
        
            result.data.forEach(car => {
                if(car.color === selectedColor && car.make === selectedBrands){

                    const li = document.createElement('tr');
                    li.innerHTML = `<tr>
                        <td>${car.color}</td>
                        <td>${car.make}</td>
                    </tr>`
                    displaySelected.appendChild(li);
                }
                });
        })
 
    }
    // // if(selectedColor){
    //     axios.get(`https://api-tutor.herokuapp.com/v1/cars/color/${selectedColor}`).then(function(result){
    //         // console.log(result.data);
        
    //         result.data.forEach(car => {
    //             const li = document.createElement('tr');
    //             li.innerHTML = `<tr>
    //                 <td>${car.color}</td>
    //                 <td>${car.make}</td>
    //             </tr>`
    //             displaySelected.appendChild(li);
    //         });
    //     })
    // // }
    // console.log(selectedBrands);
    // if(selectedBrands){
    //     axios.get(`https://api-tutor.herokuapp.com/v1/cars/make/${selectedBrands}`).then(function(result){
    //         console.log(result.data);
        
    //         result.data.forEach(car => {
    //             const li = document.createElement('tr');
    //             li.innerHTML = `<tr>
    //                 <td>${car.make}</td>
    //             </tr>`
    //             displaySelected.appendChild(li);
    //         });
    //     })
    // }
})


	