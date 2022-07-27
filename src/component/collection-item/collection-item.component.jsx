import CustomButton from '../custom-button/custom-button.component';
import './collection-item.style.scss'



function CollectionItem({name,imageUrl,price}) {
    
    return (
        <div className="collection-item">

            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>
                    {name}
                </span>
                <span className='price'>
                    {price}
                </span>
                <CustomButton inverted='true'>
                    ADD TO CART
                </CustomButton>
            </div>
        </div>
    );
}

export default CollectionItem;
