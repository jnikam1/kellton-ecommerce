import React from 'react';
import CollectionPreview from '../../component/collection-preview/collection-preview.component';
import './shop.style.scss'
import {useState} from 'react'
import SHOP_DATA from './shop.data';

function ShopPage(){

    const [shop,setShop] = useState({
        collections:SHOP_DATA
    })
    return (
        <div className="shop-page">
            {shop.collections.map(({id,...otherCollectionProps})=><CollectionPreview key={id} {...otherCollectionProps}/>)}
        </div>
      );  
}

export default ShopPage;
