import { useEffect, useState } from "react";
import axios from 'axios'
import { Oval } from "react-loader-spinner";
import { Trash } from 'lucide-react';
import { Link } from "react-router-dom";

const Consume = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // fetch("https://dummyjson.com/products")
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setProducts(data.products);
      //     setLoading(false);
      //   })
      //   .catch((err) => {console.log(err); setError(true); setLoading(false)});
      try {
        const res = await axios.get('https://dummyjson.com/products')
        setProducts(res.data.products)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
        setError(true)
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading && (
        <div className="flex items-center justify-center h-screen w-full">
          {/* <p className="text-4xl text-yellow-400 font-bold">Loading...</p> */}
          <Oval
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {error && (
        <div className="flex items-center justify-center h-screen w-full">
          <p className="text-3xl text-red-600 font-bold">An Error Occured, Please try again</p>
        </div>
      )}
      <div>
        {products.length > 0 ? (
          <div className="container p-10 h-dvh w-full mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} className="p-5 relative flex flex-col gap-4 rounded-xl border border-amber-500 shadow-sm hover:shadow-lg">
                <div className="absolute top-3 right-3 rounded-full py-1.5 px-3 bg-slate-300 text-black font-bold text-xs">
                  {product.availabilityStatus}
                </div>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-auto h-auto object-cover"
                />
                <h2 className="text-sm md:text-base font-semibold">
                  {product.title}
                </h2>
                <Trash size={15} color="red" strokeWidth={0.5} />
                <p className="text-xs md:text-sm font-light">
                  {product.description}
                </p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-base md:text-lg font-bold text-amber-500">
                    ${product.price}
                  </p>
                  <button className="text-white text-sm rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-500">
                    Add to Cart
                  </button>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="min-h-screen w-full flex items-center justify-center">No Products Found</div>
        )}
      </div>
    </>
  );
};

export default Consume;