import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/collection-item.jsx'

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, index) => index < 4)
                .map((item) => (
                    // console.log('item', item)
                    <CollectionItem
                        key={item.id}
                        name={item.name}
                        imageUrl={item.imageUrl}
                        price={item.price}

                        item={item}
                    />

                    // <div key={item.id}>
                    //     {item.name}
                    // </div>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview
