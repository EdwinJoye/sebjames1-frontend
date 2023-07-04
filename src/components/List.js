import productsData from "../data/products.json";
import Card from "../components/Card.js";

const List = () => {
  return (
    <div>
      {productsData.map((item) => {
        return (
          <div key={item.id}>
            <Card
              title={item.title}
              picture={item.img1}
              date={item.date}
            ></Card>
          </div>
        );
      })}
    </div>
  );
};

export default List;
