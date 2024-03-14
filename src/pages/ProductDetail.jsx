import { useEffect, useState } from "react";
import axios from "axios";

const permalink = "shirts-rayon-long-sleeve-blouse";

function ProductDetail() {
  const [products, setProducts] = useState([]);
  console.log(products)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://api.storefront.wdb.skooldio.dev/products/${permalink}`
        );
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>ProductDetail</div>
    </div>
  );
}

export default ProductDetail;
