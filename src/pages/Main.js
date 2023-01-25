import styled from '@emotion/styled';
import React, { useState } from 'react';
import YoutubeBoard from '../components/YoutubeBoard';
import Navbar from '../components/Navbar';

function Main() {
  const [category, setCategory] = useState('');

  return (
    <MainWrapper>
      <Navbar category={category} setCategory={setCategory} />
      <YoutubeBoard category={category}></YoutubeBoard>
    </MainWrapper>
  );
}

export default Main;

const MainWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid red;
`;
