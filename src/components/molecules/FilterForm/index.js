import styled from "styled-components";

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.h3`
  margin-right: 16px;
`;

const FilterInput = styled.input`
  outline: none;
`;

export default function FilterForm({ filterVal, setFilterVal }) {
  return (
    <>
      <FilterWrapper>
        <FilterTitle>Issue</FilterTitle>
        <form>
          <div>
            <FilterInput
              type="text"
              placeholder="issue名で検索"
              value={filterVal}
              onChange={(e) => setFilterVal(e.target.value)}
            />
          </div>
        </form>
      </FilterWrapper>
    </>
  );
}
