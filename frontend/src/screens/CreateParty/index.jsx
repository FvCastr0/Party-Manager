import React from 'react';
import styled from 'styled-components';
import CreatePartyForm from '../../components/createPartyForm';
import PageTitles from '../../components/pageTitles/index';

const StyledCreateParty = styled.div`

`;

export default function CreateParty() {
  return (
    <StyledCreateParty>
      <PageTitles>Crie sua festa</PageTitles>
      <CreatePartyForm />
    </StyledCreateParty>
  );
}
