import React from 'react';
import CollectionPreview from '../../component/collection-preview/collection-preview.component';
import './shop.style.scss'
import {useState,useEffect} from 'react'
import axios from 'axios'


function ShopPage(){

    const [shop,setShop] = useState({collections:[]})

    useEffect(()=>{
        let isMounted = true;
        async function getShop(){
            const result = await axios("https://e-commerce-backend-kellton.herokuapp.com/shop/read")
            
            if (isMounted){
                setShop({collections:result.data.data})
            }
            

        }

        getShop()
    },[])
    return (
        <div className="shop-page">
            
            {shop.collections.map(({id,...otherCollectionProps})=><CollectionPreview key={id} {...otherCollectionProps}/>)}
        </div>
      );  
}

export default ShopPage;
