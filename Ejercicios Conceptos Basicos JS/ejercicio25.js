const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];

  let totalSales = 0;
  for(let i = 0; i < products.length; i++){
      totalSales += products[i].sellCount;
  }
  const averageSales = totalSales / products.length;
  console.log(averageSales);