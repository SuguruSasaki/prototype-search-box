import React from "react";
import styled from "styled-components";

type Props = {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Searchbox: React.FC<Props> = ({ changeHandler }) => {
  return (
    <Layout>
      <StyledInput type="text" onChange={changeHandler} />
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  outline: none;
  background: #f5f5f5;
  appearance: none;
  border: 1px solid #ccc;
  font-size: 16px;
  padding: 8px;
  margin: 0 auto;
`;

export default Searchbox;
