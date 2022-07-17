import React from "react";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import CollectionContainer from "../Collection/CollectionContainer";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../../redux/shop/shopActions";
import CollectionsOverviewContainer from "../../CollectionsOverview/CollectionsOverviewContainer";

const Shop = ({ fetchCollections }) => {
  const params = useParams();
  React.useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);
  return (
    <div className="shop-page">
      <Routes>
        <Route index element={<CollectionsOverviewContainer />} />
        <Route
          path=":collectionId"
          element={<CollectionContainer param={params["*"]} />}
        />
      </Routes>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollectionsStart()),
});
export default connect(null, mapDispatchToProps)(Shop);
