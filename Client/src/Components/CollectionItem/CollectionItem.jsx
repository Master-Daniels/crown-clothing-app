import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";
import "./collectionItem.scss";

function CollectionItem({ item, addItem }) {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div style={{ background: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name"> {name} </span>
        <span className="price"> ${price} </span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
