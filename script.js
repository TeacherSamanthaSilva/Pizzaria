let modalqt = 1;

pizzaJson.map((item,index)=>{

    let pizzaitem = document.querySelector('.models .pizza-item').cloneNode(true);


    pizzaitem.setAttribute('data-key',index)
    pizzaitem.querySelector('.pizza-item--img img').src = item.img;
    pizzaitem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaitem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}` ;
    pizzaitem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaitem.querySelector('a').addEventListener('click',(e)=>{

        e.preventDefault();

        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        document.querySelector('.pizzaBig img').src = pizzaJson[key].img;
        document.querySelector('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        document.querySelector('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        document.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}` ;
        document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');
        document.querySelectorAll('.pizzaInfo--size').forEach((size,sizeIndex)=>{

                if(sizeIndex == 2){
                    size.classList.add('selected');
                }

            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
            modalqt = 1;

        })

        document.querySelector('.pizzaInfo--qt').innerHTML = modalqt;

        document.querySelector('.pizzaWindowArea').style.opacity = 0;
        document.querySelector('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            document.querySelector('.pizzaWindowArea').style.opacity = 1;
        },200)

        

    })
    

    document.querySelector('.pizza-area').append(pizzaitem);
})