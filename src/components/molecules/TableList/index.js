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
  const issueData = [
    {
      id: "0",
      name: "test",
      status: "Open",
      author: "",
      createday: "04-24-2024",
      updateday: "04-24-2024",
    },
    {
      id: "1",
      name: "test2",
      status: "Open",
      author: "",
      createday: "04-24-2024",
      updateday: "04-24-2024",
    },
    {
      id: "2",
      name: "test3",
      status: "Open",
      author: "",
      createday: "04-24-2024",
      updateday: "04-24-2024",
    },
  ];

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
          {issueData.map((value) => (
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
  );
}
