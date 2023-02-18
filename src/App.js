import './App.css';
import Products from './components/products';
import { useRef } from 'react';
import { useState } from 'react';

const style = {
  buttons: {
    border: '1px solid rgb(0, 0, 0, 0.5)',
    width: '100px',
    borderRadius: '20px',
    cursor: 'pointer',
    margin: '10px'
  },
  container: {
    with: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px'
  },
  selectedButton: {
    border: '2px solid rgb(0, 128, 0)',
    width: '100px',
    borderRadius: '20px',
    cursor: 'pointer',
    margin: '10px'
  },
  input: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    padding: '10px',
    outline: 'none'
  }
}

function App() {
  const input = useRef();
  const [currentProduct, setCurrentProduct] = useState(1);
  const [currentQuantity, setCurrentQuantity] = useState(6)
  const [products, setProducts] = useState([
    {
      id: 1,
      img: 'https://cdn.pixabay.com/photo/2016/03/13/14/39/bad-1253889_960_720.jpg', 
      title: 'Tourmaline & Eucalyptus Bar Soap', 
      price: 12.00, 
      quantity: 1, 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      img: 'https://cdn.pixabay.com/photo/2020/02/08/10/35/soap-4829708_960_720.jpg', 
      title: 'Tourmaline & Argan Oil Bar Soap', 
      price: 12.00, 
      quantity: 1, 
      description: 'Curabitur mauris ligula, malesuada sit amet risus eget'},
    {
      id: 3,
      img: 'https://cdn.pixabay.com/photo/2017/05/22/07/39/soap-2333412_960_720.jpg', 
      title: 'Tourmaline & Tea Tree Bar Soap', 
      price: 12.00, 
      quantity: 1, 
      description: 'Nullam eu pharetra felis nec, convallis lacus. '
    },
    {
      id: 4,
      img: 'https://cdn.pixabay.com/photo/2017/05/22/07/34/soap-2333391_960_720.jpg', 
      title: 'Tourmaline & Unscented Bar Soap', 
      price: 12.00, 
      quantity: 1, 
      description: 'rutrum dolor vitae, lacinia tortor. Duis vitae gravida nisi, '
    },
    {
      id: 5,
      img: 'https://cdn.pixabay.com/photo/2019/06/30/10/02/soap-4307709_960_720.jpg', 
      title: 'Tourmaline & Tea Tree Bar Soap', 
      price: 12.00, 
      quantity: 1, 
      description: 'malesuada sit amet risus eget, rutrum faucibus neque. Fusce dapibus, metus porta tincidunt'
    },
    {
      id: 6,
      img: 'https://cdn.pixabay.com/photo/2018/01/07/04/21/lavender-3066531_960_720.jpg', 
      title: 'Tourmaline & Unscented Bar Soap', 
      price: 12.00, 
      quantity: 1, 
      description: 'ultrices. Nam a sapien iaculis, rutrum dolor vitae, lacinia tortor.'
    },
  ])

  const changeValue = (id, nuevoValor) => {
    setProducts(products.map(objeto => {
      if (objeto.id === id) {
        return { ...objeto, title: nuevoValor };
      } else {
        return objeto;
      }
    }));
  }

  const selectProduct = (number) => {
    setCurrentProduct(number)
  }

  const handleChildData = (dataFromChild) => {
    setCurrentQuantity(dataFromChild);
  };

  return (
    <div className="App">
      <div>
          <h1>Select and edit a title</h1>
          <div style={style.container}>
            <div 
            style={currentProduct === 1 ? style.selectedButton : style.buttons} 
            onClick={() => selectProduct(1)}>
              <p>Product 1</p>
            </div>
            <div 
            style={currentProduct === 2 ? style.selectedButton : style.buttons} 
            onClick={() => selectProduct(2)}>
              <p>Product 2</p>
            </div>
            <div 
            style={currentProduct === 3 ? style.selectedButton : style.buttons} 
            onClick={() => selectProduct(3)}>
              <p>Product 3</p>
            </div>
            <div 
            style={currentProduct === 4 ? style.selectedButton : style.buttons} 
            onClick={() => selectProduct(4)}>
              <p>Product 4</p>
            </div>
            <div 
            style={currentProduct === 5 ? style.selectedButton : style.buttons} 
            onClick={() => selectProduct(5)}>
              <p>Product 5</p>
            </div>
            <div 
            style={currentProduct === 6 ? style.selectedButton : style.buttons} 
            onClick={() => selectProduct(6)}>
              <p>Product 6</p>
            </div>
          </div>
          <form>
            <input style={style.input} onChange={() => {
              changeValue(currentProduct, input.current.value)
            }} ref={input}/>
          </form>
          <div>
            <p>quantity of products: {currentQuantity}</p>
          </div>
        </div>
      <Products onChildData={handleChildData} data={products}/>
    </div>
  );
}

export default App;
