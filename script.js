const form = document.querySelector('.form'),
    input = document.querySelector('.search'),
    boxContent = document.querySelector('.box'),
    loading = document.querySelector('.loading'),
    countries = fetch('https://restcountries.com/v3.1/all');
let newData = [];

countries.then((response) => response.json()).then(function(data) {

    newData = data
    updateCards('')

})

function updateCards(searchValue) {
    boxContent.innerHTML = '';
    let found = false;
    newData.forEach((country) => {
        const dataTitle = country.name.common;

        const searchData = searchValue;

        if (dataTitle.toLowerCase().includes(searchData.toLowerCase())) {
            const columns = document.createElement('div');
            columns.classList.add('cal');

            const image = document.createElement('img');
            image.src = country.flags.png;
            columns.appendChild(image);

            const common = document.createElement('h3');
            common.textContent = country.name.common;
            columns.appendChild(common);

            const population = document.createElement('h4');
            population.textContent = `Population: ${country.population}`
            columns.appendChild(population);

            const region = document.createElement('h4');
            region.textContent = `Region: ${country.region}`
            columns.appendChild(region);

            const capital = document.createElement('h4');
            capital.textContent = `Capital: ${country.capital}`
            columns.appendChild(capital);

            const ccn = document.createElement('h4');
            ccn.textContent = `Ccn: ${country.ccn3}`
            columns.appendChild(ccn)

            boxContent.appendChild(columns);
            found = true;
        }
        loading.style.display = 'none'

        if (!found) {
            loading.style.display = 'block'

        }


    });

}

input.addEventListener('input', () => {
    const searchValue = input.value.trim()
    updateCards(searchValue)

})

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const searchValue = input.value.trim()
//     updateCards(searchValue)
//     form.reset()
// })