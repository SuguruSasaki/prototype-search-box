import React, { useState } from "react";
import styled from "styled-components";
import Searchbox from "../atoms/Searchbox";
import { word, results, IContents } from "../../data/words";

function App() {
  const [contents, setContents] = useState<string[]>([]);
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    if (word[query]) {
      const index = word[query];
      if (results[index]) {
        const output = results[index].map((data: IContents) => data.text);
        setContents(output);
      }
    } else {
      setContents([]);
    }
  };
  return (
    <Contents className="App">
      <Title>Search Prototype</Title>
      <Searchbox changeHandler={handler} />
      <StyledUL>
        {contents.map((data) => {
          return <StyledLI>{data}</StyledLI>;
        })}
      </StyledUL>
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

const StyledUL = styled.ul`
  margin: 32px 0 0 0;
`;

const StyledLI = styled.li`
  & + li {
    margin: 16px 0 0 0;
  }
`;

export default App;
