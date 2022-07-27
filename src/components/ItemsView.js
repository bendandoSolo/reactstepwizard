import React from 'react';

import storeItems from '../data/items.json';


const ItemsView = () => {
    return (
        <div>
            <h2>View of all Items</h2>
            {storeItems.map(item => (
                    <p key={item.id}>{JSON.stringify(item)}</p>
            ))}
        </div>
    );
}



export default ItemsView;