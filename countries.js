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

const getCountryHTML =( country )=>{
    return `
    <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}" alt="">
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