import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Result from '../components/Result';
import { getUserData } from '../lib/api';

function Main() {
  const [userState, setUserState] = useState({
    status: 'idle',
    data: null as any,
  });

  const onSubmit = async (userId: string) => {
    setUserState({ ...userState, status: 'pending' });
    try {
      const data = await getUserData(userId);
      if (data === null) throw Error;
      setUserState({ status: 'resolved', data: data });
    } catch (e) {
      setUserState({ status: 'rejected', data: null });
    }
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <Result userState={userState} />
    </>
  );
}

export default Main;
