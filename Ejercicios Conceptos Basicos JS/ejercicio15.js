const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']


function findProducts(param) {
    const productsFound = [];
    for(let i = 0; i < param.length; i++){
        if(param[i].includes('Camiseta')){
            productsFound.push(param[i]);
        }
    }
    
    return productsFound;
}

console.log(findProducts(products));