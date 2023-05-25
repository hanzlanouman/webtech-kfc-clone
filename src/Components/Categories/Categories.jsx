const Categories = (props) => {
  const { item } = props;

  return (
    <div>
      <h1>Categories</h1>
      {<h3>{item.name}</h3>}
    </div>
  );
};

export default Categories;
