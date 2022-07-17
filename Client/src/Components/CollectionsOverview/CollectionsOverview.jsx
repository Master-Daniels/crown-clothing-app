import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";
import CollectionPreview from "../CollectionPreview/CollectionPreview";

import {
  SpinnerOverlay,
  SpinnerContainer,
} from "../withSpinner/withspinner.styles";
import "./collectionsOverview.scss";

const CollectionsOverview = ({ collections, isLoading }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <div className="collections-overview">
      {collections.map(({ id, ...rest }) => (
        <CollectionPreview key={id} {...rest} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
