import React, { useEffect} from 'react';
//import axios from 'axios';
import Product from '../components/Product'; //two dots back two folders
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';


export default function HomeScreen() {
  /*const [products, setProducts] = useState([]); //uses react hook to manage react component (below)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);*/
  const dispatch = useDispatch(); //imports redux function
  const productList = useSelector( state => state.productList);
  const {loading, error, products} = productList;

  useEffect(() =>{
    /*const fetchData = async () => {
      
      try{
        setLoading(true);
        const {data} = await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
      } catch(err){
        setError(err.message);
        setLoading(false); //if there is an error in loading api/product set error to error hook
      }
      
    };
    fetchData();*/
    dispatch(listProducts());

  }, [])

    return (
        <div>
          {loading? (
          <LoadingBox></LoadingBox>
          ) : error? (
            <MessageBox variant="danger">{error}</MessageBox>
          ):(
            <div className="row center">
              {products.map((products) => (
                <Product key={products._id} products={products}></Product> //extracts a component
              ))}
            </div> 
            )}        
        </div>
        );
}