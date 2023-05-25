import topSelling from '../../resources/topSelling.json';
import { useParams } from 'react-router-dom';
const Product = () => {
  const { id } = useParams();
  console.log(id);
  console.log(topSelling);
  const item = topSelling.find((item) => item.id == id);
  console.log(item);
  if (!item) {
    return <div>No item found</div>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.price}</p>
    </div>
  );
};

export default Product;
