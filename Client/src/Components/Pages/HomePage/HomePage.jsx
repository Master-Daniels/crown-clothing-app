import React, { Component } from "react";
import Directory from "../../Directory/Directory";
import { HomePageContainer } from "./HomePageStyles";

export class HomePage extends Component {
  render() {
    return (
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    );
  }
}
