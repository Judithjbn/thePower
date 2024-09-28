const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    const counter ={};

    for (let i = 0; i < param.length; i++) {
        const word = param[i];
        if (counter[word]) {
            counter[word]++;
        } else {
            counter[word] = 1;
        }
    }
    return counter;
  }

  console.log(repeatCounter(counterWords));