import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directorySelector";
import MenuItem from "../Menu-Item/MenuItem";
import "./directory.scss";

export class Directory extends Component {
  render() {
    return (
      <div className="directory-menu">
        {this.props.sections.map(({ id, ...rest }) => (
          <MenuItem key={id} {...rest} />
        ))}
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
