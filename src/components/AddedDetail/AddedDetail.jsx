/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";
import SortSection from "../SortSection/SortSection.jsx";
import { useContext } from "react";
import { CartContext } from "../Root/Root.jsx";

const AddedDetail = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);
  const { product_title, product_image, description, price } = product;

  const handleRemoveItem = (produc) => {
    // console.log(product);
    const reminingData = [...cart].filter(
      (cartData) => cartData.product_id != produc.product_id
    );
    setCart(reminingData);
  };

  return (
    <div className="">
      <div className="border-2 border-[#13131338] rounded-xl p-6 w-3/5 mx-auto bg-slate-100 ">
        <div className="flex justify-between gap-8 items-start">
          <div className="flex items-center gap-8 justify-start ">
            <img
              className="h-36 w-52 rounded-xl border-2 p-3"
              src={product_image}
              alt=""
            />
            <div className="space-y-2">
              <h1 className="text-2xl text-[#09080F] font-bold">{product_title}</h1>
              <p className="text-lg text-[#09080fd1] font-normal">{description}</p>
              <p className="text-xl text-[#09080F] font-bold">Price: {price}k</p>
            </div>
          </div>
          <div
            onClick={() => handleRemoveItem(product)}
            className="border-2 border-red-600  p-3 rounded-full text-red-600"
          >
            <RxCross2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedDetail;
