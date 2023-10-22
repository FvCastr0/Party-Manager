import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../../components/card';
import PageTitles from '../../components/pageTitles/index';
import httpClientGet from '../../http/httpGetClient';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

const StyledParties = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  gap: 1em;
  justify-content: center;
`;

export default function Home() {
  const [parties, setParty] = useState([]);

  useEffect(() => {
    httpClientGet('/party')
      .then((res) => setParty(res.data.parties));
  }, []);

  return (
    <StyledHome>
      <PageTitles>Suas Festas</PageTitles>
      <StyledParties>
        {parties.map((party) => <Card key={party._id} title={party.title} image={party.image} id={party._id} />)}
      </StyledParties>
    </StyledHome>
  );
}
