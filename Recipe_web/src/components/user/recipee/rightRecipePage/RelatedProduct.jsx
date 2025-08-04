import React from "react";
import productImg from "../../../../assets/product.webp"; // Replace with your actual image path

const RelatedProduct = () => {
  return (
    <section className="bg-gray-100 p-5 rounded-md text-center shadow-sm">
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Related Product</h3>

      {/* Product Image */}
      <div className="bg-white p-4 rounded mb-4">
        <img
          src={productImg}
          alt="Related Product"
          className="mx-auto object-contain h-28"
        />
      </div>

      {/* Button */}
      <button
        className="bg-[#C46C5F] text-white px-6 py-2 rounded-md shadow hover:bg-[#b45b52] transition"
      >
        Buy Now
      </button>
    </section>
  );
};

export default RelatedProduct;
