
const productsData='https://api.escuelajs.co/api/v1/products';
const categoriesData='https://api.escuelajs.co/api/v1/categories';
const exchageRate='https://openexchangerates.org/api/latest.json?app_id=9484a5bfb9d146b08cb334373f89a599&symbols=EGP';
// Fetch API data
async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  
  // Group products by category
  async function groupProductsByCategory(productsData ,categoriesData, exchangeRate ) {
    const categories = await getData(categoriesData);
    let products = await getData(productsData);
    products= await transformPrices(products,exchangeRate);
    let result = [];
    result.push(categories.map(categories => ({id: categories.id, name: categories.name, products:[]})));
    for(let i=0;i<products.length;i++){
      for(let j=0;j<categories.length;j++){
        if(products[i].category.id===categories[j].id){
         
          result[0][j].products.push(products[i]);
        }
      }
    }

        
    return result;
  }

  
  
  //  transform prices from dollars to EGP using Open Exchange Rates API
  async function transformPrices(products,url) {
    
    const data= await getData(url)
    const rate = data.rates.EGP;
    const transformedProducts = products.map((product) => {
      product.price = Math.round(product.price * rate * 100) / 100;
      return product;
    });
    return transformedProducts;
  }

  const transformed= await groupProductsByCategory(productsData ,categoriesData, exchageRate);
  console.log(JSON.stringify(transformed,null,4));
  
  