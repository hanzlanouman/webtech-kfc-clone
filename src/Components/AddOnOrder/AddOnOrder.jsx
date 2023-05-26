import { useState } from 'react';

const AddOnOrder = (props) => {
  const { items } = props;
  return (
    <div>
      <h1>Add Ons</h1>
      {items.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <button>+Add</button>
        </div>
      ))}
    </div>
  );
};

export default AddOnOrder;
