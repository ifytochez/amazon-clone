import React from 'react';
import Banner from './banner.jpg';
import './Home.css'
import Product from './Product';
import Header from './Header';


function Home() {
  return (
    <> <Header></Header>
    <div className='home'>
      

    <div className='home_container'>
        <img className="home_banner" src={Banner} alt="banner" />  

        <div className='home_row'>
             <Product
             id = "123465"
             title="The Lean Startup"
             price={29.99}
             image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg"
             rating={5}
             />
             

             <Product 
             id="1234567"
             title="Dell core i7 Laptop"
             price={49.99}
             image="https://m.media-amazon.com/images/I/71RD3vsjIYL._AC_SY200_.jpg"
             rating={4}
             /> 

               <Product
             id="234567" 
             title="TogoPower Portable Generator"
             price={349.99}
             image="https://m.media-amazon.com/images/I/71O+lpqhwGL._AC_UY218_.jpg"
             rating={6}
             />

             <Product 
             id="345678"
             title="Midea 3.1 Compact Refrigerator"
             price={249.99}
             image="https://m.media-amazon.com/images/I/61gf8uBCv6L._AC_UY218_.jpg"
             rating={6}
             />

             <Product
             id="456789"
             title="Home Theater Set"
             price={179.99}
             image="https://m.media-amazon.com/images/I/51c3xe7WhkL._AC_UY218_.jpg"
             rating={4}
             />
          
        </div>


        <div className='home_row'>
             <Product 
             id="234567" 
             title="TogoPower Portable Generator"
             price={349.99}
             image="https://m.media-amazon.com/images/I/71O+lpqhwGL._AC_UY218_.jpg"
             rating={6}
             />

             <Product 
             id="345678"
             title="Midea 3.1 Compact Refrigerator"
             price={249.99}
             image="https://m.media-amazon.com/images/I/61gf8uBCv6L._AC_UY218_.jpg"
             rating={6}
             />

             <Product
             id="456789"
             title="Home Theater Set"
             price={179.99}
             image="https://m.media-amazon.com/images/I/51c3xe7WhkL._AC_UY218_.jpg"
             rating={4}
             />

          <Product
             id = "123465"
             title="The Lean Startup"
             price={29.99}
             image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg"
             rating={5}
             />
          
        </div>


        <div className='home_row'>
             <Product
             id="567891" 
             title="Samsung 40-inch class led TV"
             price={149.99}
             image="https://m.media-amazon.com/images/I/915Xj2rO8WL._AC_UY218_.jpg"
             rating={6}
             /> 

             <Product
              id = "123465"
             title="The Lean Startup"
             price={29.99}
             image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY218_.jpg"
             rating={5}
             />
             

             <Product 
             id="1234567"
             title="Dell core i7 Laptop"
             price={49.99}
             image="https://m.media-amazon.com/images/I/71RD3vsjIYL._AC_SY200_.jpg"
             rating={4}
             /> 

               <Product 
               id="234567" 
             title="TogoPower Portable Generator"
             price={349.99}
             image="https://m.media-amazon.com/images/I/71O+lpqhwGL._AC_UY218_.jpg"
             rating={6}
             />

             <Product 
             id="345678"
             title="Midea 3.1 Compact Refrigerator"
             price={249.99}
             image="https://m.media-amazon.com/images/I/61gf8uBCv6L._AC_UY218_.jpg"
             rating={6}
             />

        </div>

    </div>
 


    </div>

    </>
  )
}

export default Home