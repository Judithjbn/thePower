// 1.1 Basándote en el array de países, crea una lista ul > li dinámicamente en el html.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');

countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    ulCountries.appendChild(li);
});

document.body.appendChild(ulCountries);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const elementToRemove = document.querySelector('.fn-remove-me');
if (elementToRemove) {
    elementToRemove.remove();
}

// 1.3 Utiliza el array para crear dinámicamente una lista ul > li de elementos en el div con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ulCars = document.createElement('ul');
const divPrintHere = document.querySelector('[data-function="printHere"]');

cars.forEach(car => {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
});

divPrintHere.appendChild(ulCars);

// 1.4 Crea dinámicamente en el html una serie de divs que contengan un h4 para el título y una img para la imagen.
const countriesWithImages = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countriesWithImages.forEach(item => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    
    h4.textContent = item.title;
    img.src = item.imgUrl;
    
    div.appendChild(h4);
    div.appendChild(img);
    
    document.body.appendChild(div);
});
