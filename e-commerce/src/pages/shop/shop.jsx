import React from 'react';
import SHOP_DATA from './shop.data.js'
import CollectionPreview from '../../components/collection-preview/collection-preview'

class ShopPage extends React.Component {
    state = {
        clothingCollection: SHOP_DATA
    }

    render() {
        return (
            <div className="shop-page">
                {
                    this.state.clothingCollection.map(clothing => (

                        <CollectionPreview
                            key={clothing.id}
                            title={clothing.title}
                            routeName={clothing.routeName}
                            items={clothing.items}
                        />
                    ))
                }

            </div>
        )
    }
}

export default ShopPage;