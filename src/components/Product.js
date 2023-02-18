import { useState } from "react";


// estilos de css
const style = {
    product: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        borderRadius: '10px',
        margin: '10px',
        padding: '10px',
        maxWidth: '300px',
    },
    buttonDiv: {
        with: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
        marginTop: '20px',
        
    },
    button: {
        backgroundColor: 'white',
        padding: '0.8em',
        border: '1px solid black',
        borderRadius: '20px',
        width: '50%',
        cursor: 'pointer'
    },
    subtitle:{
        color: 'rgb(0, 0, 0, 0.7)'
    },
    image: {
        borderRadius: '10px'
    },
    input: {
        appearance: 'none',
        backgroundColor: 'transparent',
        fontSize: '16px',
        padding: '4px 8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100px',
        boxSizing: 'border-box',
    },
    range: {
        appearance: 'none',
        width: '100%',
        height: '5px',
        backgroundColor: '#ddd',
        borderRadius: '5px',
        outline: 'none',
    }
}

const Product = ({ product, subChildData }) => {
    const [value, setValue] = useState(18);
    const [quantity, setQuantity] = useState(1)

    function handleInputChange(event) {
        const newValue = event.target.value;
        setValue(newValue);
        
      }

    const handleInputNumber = (event) => {
        const newValue = parseInt(event.target.value);
        setQuantity(newValue);
        subChildData(parseInt(event.target.value) + 1, product.id)
    };

    return(
        <div>
            <div style={style.product}>
                <img 
                style={style.image} 
                src={product.img} 
                width="300" 
                height="200"
                alt="" 
                />
                <p>${product.price}.00</p>
                <input 
                style={style.input} 
                onChange={handleInputNumber} 
                value={quantity} 
                min='1' 
                max='100' 
                type="number" 
                />
                <h4 style={{fontSize: value+'px'}}>{product.title}</h4>
                <div>
                <input
                style={style.range}
                type="range"
                id="range-input"
                name="range-input"
                min="0"
                max="27"
                value={value}
                onChange={handleInputChange}
                />
                </div>
                <p style={style.subtitle}>{product.description}</p>
                <div style={style.buttonDiv}>
                    <button style={style.button}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product