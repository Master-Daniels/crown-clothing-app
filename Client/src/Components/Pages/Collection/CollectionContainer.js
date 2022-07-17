import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../../redux/shop/shopSelectors";
import WithSpinner from "../../withSpinner/WithSpinner";
import Collection from "./Collection";

const mapStateToprops = createStructuredSelector({
  isLoading: (state) => selectIsCollectionFetching(state),
});

const CollectionContainer = compose(
  connect(mapStateToprops),
  WithSpinner
)(Collection);

export default CollectionContainer;
