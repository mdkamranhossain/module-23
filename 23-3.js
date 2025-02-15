function woodQuantity(chair, table, bed) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const allChairWood = chair * perChairWood;
  const allTableWood = table * perTableWood;
  const allBedWood = bed * perBedWood;

  const totalWood = allChairWood + allTableWood + allBedWood;

  return totalWood;

}


const wood = woodQuantity(2, 2, 2);
console.log(wood);

//---------------------------------------------



function totalClothPrice(shirt, pant, shoe){
    const perShirtPrice = 500;
    const perPantPrice = 300;
    const perShoePrice = 900;

    const totalShirtPrice = perShirtPrice * shirt;
    const totalPantPrice = perPantPrice * pant;
    const totalShoePrice = perShoePrice * shoe;

    const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
    return totalPrice;
}

const total = totalClothPrice(2, 2, 2);
console.log(total);