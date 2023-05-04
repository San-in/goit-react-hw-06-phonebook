import React from 'react';

import { FilterLabel, FilterInput } from 'components/Filter/Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const onBlur = ({ target: { value } }) => (value = '');
  const onChange = ({ target: { value } }) => {
    dispatch(changeFilter(value));
  };
  return (
    <>
      <FilterLabel htmlFor="find">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        name="find"
        id="find"
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};
