import React from "react";

const ItemList = ({ items }: { items: string[] }) => {
  return (
    <>
      {items.length && (
        <ul>
          {items.map((item, index) => (
            <li className="list-disc text-gray-500" key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ItemList;
