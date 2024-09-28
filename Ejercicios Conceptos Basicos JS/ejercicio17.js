const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
// for...in para imprimir los datos del alien
for(const key in alien){
    console.log(key + ': ' + alien[key]);
}