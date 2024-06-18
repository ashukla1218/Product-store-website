 const pr = fetch('https://dummyjson.com/products');
 pr.then((res)=>{
    const pr2 = res.json();
    pr2.then((data)=>{
        createUI(data);
    })
 }).catch((err)=>{
    console.log("Error occured",err);
 })

 //puting all this inside main i.e, div and h3
 const main= document.getElementById('root');

 //function for searchbar
 function searchProducts(e){
    const searchText=e.target.value;
    const pr = fetch(`https://dummyjson.com/products/search?q=${searchText}`);
    pr.then((res)=>{
        const pr2= res.json();
        pr2.then((data)=>{
            createUI(data);
        });
    });
 }

 //creating function
 function createUI(data){
    const products = data.products;

    main.innerHTML=``;

    for(let i=0; i<products.length; i++){
        const newCard= document.createElement('div');//create div

        // const title=document.createElement('h3');//h3 created
        // title.innerText=products[i].title;
        // newCard.appendChild(title);

        // const img=document.createElement('img');
        // img.setAttribute('src',products[i].thumbnail);
        // newCard.appendChild(img);

        newCard.innerHTML=`
        <div>
            <h3>${products[i].title}</h3>
            <img src="${products[i].thumbnail}" alt="${products[i].title}"/>
            <p>${products[i].price}</p>
            <p>Description: ${products[i].description}</p>
            <p>Rating: ${products[i].rating} / 5</p>
        </div>
        `;

        main.appendChild(newCard);
    }
 }