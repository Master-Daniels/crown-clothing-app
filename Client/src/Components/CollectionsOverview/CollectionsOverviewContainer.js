import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import WithSpinner from "../withSpinner/WithSpinner";
import CollectionsOverview from "./CollectionsOverview";
import { selectIsCollectionFetching } from "../../redux/shop/shopSelectors";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
