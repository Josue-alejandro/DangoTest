import Product from './Product';
import { useState } from 'react';

const styles = {
    products: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '20px'
    }
}

const Products = ({ data, onChildData }) => {
    const [quantity0, setQuantity] = useState(1);
    const [quantity1, setQuantity1] = useState(1);
    const [quantity2, setQuantity2] = useState(1);
    const [quantity3, setQuantity3] = useState(1);
    const [quantity4, setQuantity4] = useState(1);
    const [quantity5, setQuantity5] = useState(1);

    const handleChange = (quantity, id) => {
        console.log(quantity)
        if (id === 1) {
            setQuantity(quantity)
        }else if (id === 2) {
            setQuantity1(quantity)
        }else if (id === 3) {
            setQuantity2(quantity)
        }else if (id === 4) {
            setQuantity3(quantity)
        }else if (id === 5) {
            setQuantity4(quantity)
        }else if (id === 6) {
            setQuantity5(quantity)
        }

        const total = quantity0+quantity1+quantity2+quantity3+quantity4+quantity5;
        onChildData(total + 1);

    };

    return(
        <div style={styles.products}>
            {data.map(product =>
                    <Product 
                    subChildData={handleChange}
                    key={product.description}
                    product={product}/>)}
        </div>
    )
}

export default Products