import Consume from "../component/Consume";
import Header from "../component/Header";

const Product = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center">
      <p>Added for test</p>
      <Header />
      <div className="mt-10">
        <Consume />
      </div>
    </section>
  );
};

export default Product;
