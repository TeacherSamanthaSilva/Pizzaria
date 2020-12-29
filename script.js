const c = (el) =>{

    document.querySelector(el);
}

pizzaJson.map((item,index)=>{

    let pizzaitem = document.querySelector('.models .pizza-item').cloneNode(true);

    document.querySelector('.pizza-area').append(pizzaitem);
})