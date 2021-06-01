import React from 'react';
import styled from 'styled-components';
import { IData } from '../types';

function ResultCard({ data }: IData) {
  return (
    <StyledResultCardWrap>
      <StyledPhoto src={data.avatar_url} alt="UserImg"></StyledPhoto>
      <StyledName>
        <p>NAME</p>
        {data.name}
      </StyledName>
      <StyledId>
        <p>ID</p>
        {data.login}
      </StyledId>
      <StyledBio>
        <p>BIO</p>
        {data.bio}
      </StyledBio>
      <StyledUser>
        <StyledFollowers>
          <p>Followers</p>
          <p>{data.followers}</p>
        </StyledFollowers>
        <StyledFollowing>
          <p>Following</p>
          <p>{data.following}</p>
        </StyledFollowing>
      </StyledUser>
    </StyledResultCardWrap>
  );
}

const StyledResultCardWrap = styled.div`
  width: 76rem;
  height: 50rem;
  border-radius: 1rem;
  margin-top: 3rem;
  padding: 1rem;
  font-size: 1.5rem;
  background-color: ${({ theme }) => theme.colors.card};

  p:nth-child(1) {
    font-weight: bold;
    margin-right: 2rem;
  }
`;

const StyledPhoto = styled.img`
  width: 32rem;
  height: 32rem;
  border: none 0.1rem;
  display: flex;
  align-items: center;
`;

const StyledName = styled.div`
  width: 32rem;
  height: 4rem;
  border: none 0.1rem;
  display: flex;
  align-items: center;
  padding: 0.3rem;
`;

const StyledId = styled.div`
  width: 32rem;
  height: 4rem;
  border: none 0.1rem;
  display: flex;
  align-items: center;
  padding: 0.3rem;
`;

const StyledBio = styled.div`
  width: 32rem;
  height: 4rem;
  border: none 0.1rem;
  display: flex;
  align-items: center;
  padding: 0.3rem;
`;

const StyledUser = styled.div`
  width: 32rem;
  height: 4rem;
  border: none 0.1rem;
  display: flex;
  align-items: center;
  padding: 0.3rem;
`;

const StyledFollowers = styled.div`
  width: 16rem;
  display: flex;
`;

const StyledFollowing = styled.div`
  width: 16rem;
  display: flex;
`;

export default ResultCard;
