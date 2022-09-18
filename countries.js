const loadCountries = () => {
    fetch ('https://restcountries.com/v3.1/all')
    .then(Response => Response.json())
    .then(data => displayCountries(data))
}

const displayCountries = (countries) =>{
    console.log(countries[0])
    const allCountriesHTML = countries.map(country => getCountryHTML(country))
    // console.log(allCountriesHTML)
    const container = document.getElementById('countries')
    container.innerHTML = allCountriesHTML.join(' ')
}


//option 2
const getCountryHTML =( {area , name , flags, region} )=>{

    return `
    <div class="country">
        <h2>${name.common}</h2>
        <p>Area: ${area}</p> 
        <p>Region: ${region}</p> 
        <img src="${flags.png}" alt="">
    </div>
    `
}

// original
// const getCountryHTML = country =>{
//     return `
//     <div class="country">
//         <h2>${country.name.common}</h2>
//         <img src="${country.flags.png}" alt="">
//     </div>
//     `
// }
// option 1
// const getCountryHTML = country =>{
//     // const {name , flags} = country
//     return `
//     <div class="country">
//         <h2>${name.common}</h2>
//         <img src="${flags.png}" alt="">
//     </div>
//     `
// }


loadCountries()