import './collection-item.style.scss'


function CollectionItem({name,imageUrl,price}) {
    console.log(imageUrl)
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
            </div>
            <button>
                Add to Cart
            </button>
        </div>
    );
}

export default CollectionItem;
