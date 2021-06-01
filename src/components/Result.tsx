import React from 'react';
import { IUser } from '../types';
import ResultCard from './ResultCard';

function Result({ userState }: IUser) {
  const { status, data } = userState;

  switch (status) {
    case 'pending':
      return (
        <>
          <div style={{ color: 'white', fontSize: '2.4rem' }}>Loading...</div>;
        </>
      );
    case 'resolved':
      return (
        <>
          <ResultCard data={data} />
        </>
      );
    case 'rejected':
      return (
        <>
          <div style={{ color: 'white', fontSize: '2.4rem' }}>User Not Found</div>;
        </>
      );
    case 'idle':
    default:
      return <></>;
  }
}

export default Result;
