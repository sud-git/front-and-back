import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://localhost:3000/products");
     
      setProducts(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Welcome</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} width="100" />
          <p>${product.price}</p>
        </div>
      ))}

      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>
  );
}

export default App;
