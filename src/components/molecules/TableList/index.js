import styled from "styled-components";

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

export default function TableList() {
  return (
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
          <tr>
            <TableTd $minwidth>
              <input type="checkbox"></input>
            </TableTd>
            <TableTd $width>test</TableTd>
            <TableTd>Open</TableTd>
            <TableTd></TableTd>
            <TableTd>04-24-2024</TableTd>
            <TableTd>04-24-2024</TableTd>
          </tr>
        </tbody>
      </Table>
    </TableWrapper>
  );
}
