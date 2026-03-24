import { Link, useParams } from "react-router-dom";
import Header from "../component/Header";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductId = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  //   const [loading, setLoading] = useState(true);
  //   const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
        console.log(res.data)
        // setLoading(false)
      } catch (error) {
        console.log(error.message);
        // setError(true)
        // setLoading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center">
        <Link className="absolute top-20 left-10 font-bold " to={'/product'}>back</Link>
      <Header />
      <div className="flex gap-4 max-w-4xl mx-auto my-20">
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-auto h-auto object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-sm md:text-base font-semibold">
            {product.title}
          </h2>
          <p className="text-xs md:text-sm font-light">{product.description}</p>
          <div className="flex items-center justify-between w-full">
            <p className="text-base md:text-lg font-bold text-amber-500">
              ${product.price}
            </p>
            <button className="text-white text-sm rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-500">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductId;
