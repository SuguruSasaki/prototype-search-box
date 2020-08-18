import React from "react";
import styled from "styled-components";
import Searchbox from "../atoms/Searchbox";

function App() {
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <Contents className="App">
      <Title>Search Prototype</Title>
      <Searchbox changeHandler={handler} />
    </Contents>
  );
}

const Contents = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 64px 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bolder;
  margin: 0 0 32px 0;
`;

export default App;
