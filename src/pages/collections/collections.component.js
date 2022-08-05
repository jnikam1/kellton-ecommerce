import React from 'react';
import './collections.style.scss'
// import { useState,useEffect } from 'react'
import CollectionItem from '../../component/collection-item/collection-item.component';
import axios from 'axios'

function Collections(ownProps) {
    // console.log(ownProps.match.params.collectionName)
    const [product, setProduct] = React.useState({collections:[]})

    React.useEffect(()=>{
        let isMounted = true;
        async function getProduct(){
            const productResult = await axios("https://e-commerce-backend-kellton.herokuapp.com/")

            console.log("This is product data"+productResult.data)

            if (isMounted){
                setProduct({collections:productResult.data.data})
            }
            

        }

        getProduct()
    },[])
    // console.log(product.collections)

    const collection = product.collections.filter(value => value.title.toLowerCase() === ownProps.match.params.collectionName)
    // console.log(collection)

    return (
        <div className="collection-page">
            <div className='title'>
                {collection[0].title}
            </div>
            <div className='items'>
                {
                    collection[0].items
                        .map(({ id, ...otherItems }) => <CollectionItem key={id} {...otherItems} />)
                }
            </div>

        </div>
    );
}

export default Collections;
