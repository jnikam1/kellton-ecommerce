import './collections.style.scss'
import { useState } from 'react'
import SHOP_DATA from '../shop/shop.data';
import CollectionItem from '../../component/collection-item/collection-item.component';

function Collections(ownProps) {
    // console.log(ownProps.match.params.collectionName)
    const [shop, setShop] = useState({
        collections: SHOP_DATA
    })

    const collection = shop.collections.filter(value => value.title.toLowerCase() === ownProps.match.params.collectionName)
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
