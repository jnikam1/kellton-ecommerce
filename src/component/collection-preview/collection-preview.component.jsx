import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss'

function CollectionPreview({ title, items }) {
    return (
        <div className="collection-preview">
            <h1 className='title'>
                {title}
            </h1>
            <div className='preview'>
                {items.filter((value,index)=> index<4).map(({ id, ...otherItemsProps }) => <CollectionItem key={id} {...otherItemsProps} />)}
                
            </div>
        </div>
    );
}

export default CollectionPreview;
