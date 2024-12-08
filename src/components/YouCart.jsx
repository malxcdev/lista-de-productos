import React from "react";
import RemoveIcon from "../assets/images/icon-remove-item.svg";

function YouCart() {
  return (
    <section>
     
      <div>
        <div className="flex items-center justify-between bg-white pl-5 pr-7 py-5 rounded-lg border-b border-rose-100">
          <div className="flex flex-col w-1/2">
            <h5 className="font-semibold text-xl text-rose-900">Classic Tiramisu</h5>
            <div className="flex justify-start gap-4">
              <p className="text-red font-semibold text-xl">1x</p>
              <p className="font-light text-xl text-rose-400">@$5.50</p>
              <p className="font-medium text-rose-500 text-xl ">#5.50</p>
            </div>
          </div>
          <a className="w-1/2 flex justify-end cursor-pointer">
            <img className="border-2 border-rose-300 rounded-full p-1 h-6" src={RemoveIcon} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default YouCart;
