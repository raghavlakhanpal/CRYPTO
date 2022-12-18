import React from "react";
import Header from "./Header";
import ShoeList from "./ShoeList";

import shoesApi from "./Api";
class App extends React.Component {
  state = { shoes: [] };

  componentDidMount() {
    const fetchShoesList = async () => {
      const response = await shoesApi.get("/search/photos", {
        params: { query: "shoes" },
      });
      this.setState({ shoes: response.data.results });
    };
    fetchShoesList();
  }
  render() {
    if (this.state.shoes == [] || this.state.shoes == []) {
      return (
        <>
          <div className="App">
            <Header />
            <div className="loader">Loading...</div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="App">
            <Header />
            <ShoeList shoes={this.state.shoes} />
          </div>
        </>
      );
    }
  }
}
export default App;
