import React from "react";
import CollectionItem from "../../CollectionItem/CollectionItem";
import { selectCollection } from "../../../redux/shop/shopSelectors";
import { connect } from "react-redux";

import {
  SpinnerOverlay,
  SpinnerContainer,
} from "../../withSpinner/withspinner.styles";

import "./collection.scss";

const Collection = ({ collection, isLoading }) => {
  const { title, items } = collection;
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <div className="collection-page">
      <h2 className="title"> {title.toUpperCase()} </h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.param)(state),
  };
};
export default connect(mapStateToProps)(Collection);
