

pizzaJson.map((item,index)=>{

    let pizzaitem = document.querySelector('.models .pizza-item').cloneNode(true);

    pizzaitem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaitem.querySelector('.pizza-item--desc').innerHTML = item.description;
    

    document.querySelector('.pizza-area').append(pizzaitem);
})