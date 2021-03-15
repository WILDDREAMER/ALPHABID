import React from 'react'
import Product from '../product'
import Selected from './selected'
import Sonos from '../../assets/images/Sonos.svg'

export default function ProductDetail(params) {
    return(
        <div className='productDetail'>
            <header><div className="logo"></div></header>
            <Selected price="1224.03" condition="New" category="Electronics" tags="Gaming sale"></Selected>
            <section className='related container'>
                <div className="title">Related Products</div>
                <div className='products'>
                    <Product img={Sonos}></Product>
                    <Product img={Sonos}></Product>
                    <Product img={Sonos}></Product>
                </div>
            </section>
        </div>
    )
}