import styled from "styled-components";
import issueData from "../../../utils/issueData";
import { useState } from "react";
import FilterForm from "../FilterForm";
import ButtonLink from "../../atoms/Button";

const FilterBlocks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonLinks = styled.div`
  display: flex;
  align-items: center;
`;

const TableWrapper = styled.div`
  overflow: scroll;
`;
const Table = styled.table`
  border: 1px solid rgb(225, 228, 232);
  border-radius: 6px;
`;

const TableTh = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid rgb(225, 228, 232);
  min-width: ${(props) => (props.$minwidth ? "auto" : "10rem")};
`;

const TableTd = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid rgb(225, 228, 232);
  min-width: ${(props) => (props.$minwidth ? "auto" : "10rem")};
  width: ${(props) => (props.$width ? "140rem" : "auto")};
  ${(props) => `width: ${props.width}`};
`;

export default function TableList({}) {
  const [filterVal, setFilterVal] = useState("");
  return (
    <>
      <FilterBlocks>
        <FilterForm filterVal={filterVal} setFilterVal={setFilterVal} />
        <ButtonLinks>
          <ButtonLink primary name="New" />
          <ButtonLink name="Delete" />
        </ButtonLinks>
      </FilterBlocks>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <TableTh $minwidth>
                <input type="checkbox"></input>
              </TableTh>
              <TableTh></TableTh>
              <TableTh>ステータス</TableTh>
              <TableTh>作成者</TableTh>
              <TableTh>作成日付</TableTh>
              <TableTh>更新日付</TableTh>
            </tr>
          </thead>
          <tbody>
            {issueData
              .filter((value) => value.name.indexOf(filterVal) !== -1)
              .map((value) => (
                <tr>
                  <TableTd $minwidth>
                    <input id={value.id} type="checkbox"></input>
                  </TableTd>
                  <TableTd $width>{value.name}</TableTd>
                  <TableTd>{value.status}</TableTd>
                  <TableTd>{value.author}</TableTd>
                  <TableTd>{value.createday}</TableTd>
                  <TableTd>{value.updateday}</TableTd>
                </tr>
              ))}
          </tbody>
        </Table>
      </TableWrapper>
    </>
  );
}
