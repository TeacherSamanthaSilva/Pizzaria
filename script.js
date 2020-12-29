

pizzaJson.map((item,index)=>{

    let pizzaitem = document.querySelector('.models .pizza-item').cloneNode(true);

    pizzaitem.querySelector('.pizza-item--img img').src = item.img;
    pizzaitem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaitem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}` ;
    pizzaitem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaitem.querySelector('a').addEventListener('click',(e)=>{

        e.preventDefault();

        document.querySelector('.pizzaWindowArea').style.opacity = 0;
        document.querySelector('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            document.querySelector('.pizzaWindowArea').style.opacity = 1;
        },200)

        

    })
    

    document.querySelector('.pizza-area').append(pizzaitem);
})