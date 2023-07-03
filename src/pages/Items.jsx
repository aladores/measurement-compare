import React from "react";
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import "./Items.css";
function Items(props) {
  const itemCardElements = Object.entries(props.itemData.items).map(
    ([key, value]) => {
      return (
        <ItemCard
          key={key}
          active={value.active}
          category={value.category}
          title={value.title}
          imageSrc={value.imageSrc}
          measurements={value.measurements}
        />
      );
    }
  );

  return (
    <section>
      <div className="sub-row">
        <p className="item-counter text-normal">
          {props.itemData.items.length} Items
        </p>
        <Link
          to="/add"
          className="primary-button white-text text-normal position-right"
        >
          + Add
        </Link>
      </div>
      <div className="item-container">{itemCardElements}</div>
    </section>
  );
}
export default Items;
