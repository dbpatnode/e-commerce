import React from 'react'
import MenuItem from '../menu-item/menu-item.jsx'
import './directory.scss'

class Directory extends React.Component {

    state = {
        sections: [{
            title: 'hats',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc8As4wH9WsKt_xjtHADiGBojtBXlWgoRf5g&usqp=CAU',
            id: 1,
            linkUrl: 'hats'
        },
        {
            title: 'shoes',
            imageUrl: 'https://cdn.shopify.com/s/files/1/2496/2470/files/ALI07505-2-Edit_copy_20feb87a-7983-44e1-badb-29c32a82834f_1440x.jpg?v=1615928568',
            id: 2,
            linkUrl: ''
        },
        {
            title: 'jackets',
            imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cool-jackets-1601401814.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
            id: 3,
            linkUrl: ''
        },
        {
            title: 'pants',
            imageUrl: 'https://cumulus.equipment/media/catalog/product/cache/843691cb0265f209a80aa4d4649843e5/c/u/cumulus_man_pants_basic_grephite_front_1603353.jpg',
            id: 4,
            linkUrl: ''
        },
        {
            title: 'mens',
            imageUrl: 'https://i.pinimg.com/originals/77/0e/f0/770ef04f69e942d27c463019b634e894.jpg',
            id: 5,
            linkUrl: ''
        },
        {
            title: 'womens',
            imageUrl: 'https://media-spring.cabionline.com/wp-content/uploads/cabi-templates/s21/looks/casual-1.jpg',
            id: 6,
            linkUrl: ''
        }]
    }

    render() {
        return <div className="directory-menu">
            {this.state.sections.map(({ title, imageUrl, id, linkUrl }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
            ))}
        </div>
    }
}

export default Directory