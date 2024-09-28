const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, value) {
    const index = param.indexOf(value);

    if(index !== -1){
        return {found: true, position: index};
    }
    else{
        return {found: false, position: index};
    }   
  }

  console.log(finderName(nameFinder, 'Natasha'));
  console.log(finderName(nameFinder, 'Leslie'));