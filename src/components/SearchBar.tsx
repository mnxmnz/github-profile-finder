import React, { useState } from 'react';
import styled from 'styled-components';

type SearchBarProps = {
  onSubmit: (userId: string) => void;
};

function SearchBar({ onSubmit }: SearchBarProps) {
  const [userId, setUserId] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(userId);
    setUserId('');
  };

  return (
    <StyledSearchBarWrap>
      <StyledTitle>GitHub Profile Finder</StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput name="userId" value={userId} onChange={onChange} placeholder="GitHub 아이디를 입력하세요." />
        <StyledButton type="submit">검색</StyledButton>
      </StyledForm>
    </StyledSearchBarWrap>
  );
}

const StyledSearchBarWrap = styled.div`
  width: 75rem;
  display: flex;
  justify-content: space-between;
`;

const StyledTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;

const StyledForm = styled.form`
  display: flex;
  padding-left: 5rem;
  font-size: 1.5rem;
`;

const StyledInput = styled.input`
  width: 24rem;
  border-radius: 1rem;
  border-color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  width: 6rem;
  margin-left: 1rem;
  border-radius: 1rem;
  border-color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

export default SearchBar;
