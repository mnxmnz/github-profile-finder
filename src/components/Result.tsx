import React from 'react';
import styled from 'styled-components';
import { IUser } from '../types';
import ResultCard from './ResultCard';

function Result({ userState }: IUser) {
  const { status, data } = userState;

  switch (status) {
    case 'pending':
      return <Pending>Loading...</Pending>;
    case 'resolved':
      return <ResultCard data={data} />;
    case 'rejected':
      return <Pending>User Not Found</Pending>;
    case 'idle':
    default:
      return <></>;
  }
}

const Pending = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 2.5rem;
  margin-top: 10rem;
`;

export default Result;
