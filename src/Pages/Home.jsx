import React from "react";
import Main from "../Components/Main";
import Row from "../Components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID={1} title="UpComing" fetchURL={requests.requestUpcomming} />
      <Row rowID={2} title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID={3} title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID={4} title="TopRated" fetchURL={requests.requestTopRated} />
      <Row rowID={5} title="Action" fetchURL={requests.requestUpcomming} />
    </>
  );
};

export default Home;
