const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

  function findMinorsUsers(param) {
    const minors = [];
    for(let i = 0; i < param.length; i++){
        if(param[i].years < 18){
            minors.push(param[i]);
        }
    }
    return minors;
  }
  
  function findAdultUsers(param) {
    const adults = [];
    for(let i = 0; i < param.length; i++){
        if(param[i].years >= 18){
            adults.push(param[i]);
        }
    }
    return adults;
  }

  console.log(findMinorsUsers(users));
  console.log(findAdultUsers(users));