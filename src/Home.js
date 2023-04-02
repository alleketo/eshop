import React from 'react';
import './Home.css';
import Product from './Product';

export default function Home() {
  return (
    <div>
        <div className='home'>
            <div className='home_container'>
                <img src='https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg' alt='' className='home_image' />

                <div className='home_row'>
                    <Product 
                        id='1111'
                        title='Targus Laptop Bag Classic Slim Briefcase Messenger Bag, Spacious, Ergonomic, Foam Padded Laptop Case for Devices'
                        price={22.00}
                        rating={2}
                        image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91snb7T4oeS._AC_UY218_.jpg'
                    />
                    <Product 
                        id='2222'
                        title='Apple 2023 MacBook Pro Laptop M2 Pro chip with 10‑core CPU and 16‑core GPU: 14.2-inch Liquid Retina XDR Display, 16GB Unified Memory, 512GB SSD Storage. Works with iPhone/iPad; Silver'
                        price={1948.94}
                        rating={5}
                        image='https://s.yimg.com/uu/api/res/1.2/26NneCqPo4nM8F0WCnU94w--~B/Zmk9ZmlsbDtoPTU4NDt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-11/c8aea820-28a0-11eb-9f89-5ddd62987703.cf.jpg'
                    />    
                </div>

                <div className='home_row'>
                    <Product 
                        id='3333'
                        title='Apple 2021 10.2-inch iPad (Wi-Fi, 64GB) - Space Gray (9th Generation)'
                        price={1194.00}
                        rating={4}
                        image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61NGnpjoRDL._AC_UY218_.jpg'
                    />  
                    <Product 
                        id='4444'
                        title='Acer 21.5 Inch Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Computer Monitor (HDMI & VGA Port), SB220Q bi'
                        price={89.99}
                        rating={3}
                        image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81QpkIctqPL._AC_UY218_.jpg'
                    />  
                    <Product 
                        id='5555'
                        title='Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac, Black'
                        price={44.96}
                        rating={4}
                        image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61mpMH5TzkL._AC_UY218_.jpg'
                    />  
                </div>
                    
                <div className='home_row'>
                    <Product 
                        id='6666'
                        title='Havit Mechanical Keyboard, Wired Compact PC Keyboard with Number Pad Red Switch Mechanical Gaming Keyboard 89 Keys for Computer/Laptop (Black)'
                        price={42.99}
                        rating={3}
                        image='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71yGtauB-AL._AC_UY218_.jpg'
                    />  
                </div>
            </div>
        </div>
    </div>
  )
}
