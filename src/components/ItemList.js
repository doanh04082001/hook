import React from "react";
const ListItem = (props,i) => {
  return (
    <li key={i}>
      <h2>{props.propsItems.title}</h2>
      <div>
        {props.propsItems.info}
      </div>
    </li>
  )
};

const ItemList = (props) => {
  return (
    <ul className="item-list">
      {props.itemList.map((item,i) =>
        <ListItem propsItems={item} key={i} />
      )}
    </ul>
  )
};
export default ItemList