import styled from "styled-components";
import { useState } from "react";
import FilterForm from "../FilterForm";
import ButtonLink from "../../atoms/Button";
import ModalBlock from "../../organisms/ModalBlock";
import { useSelector, useDispatch } from "react-redux";

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

export default function TableList() {
  const [filterVal, setFilterVal] = useState("");

  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  const deleteList = (name) => {
    dispatch({ type: "DELETE_LIST", payload: name });
  };

  const [name, setName] = useState("");
  const [complete, setComplete] = useState(false);

  const inputText = (e) => {
    setName(e.target.value);
  };

  const addList = () => {
    if (!name) return;

    setComplete(false);

    dispatch({
      type: "ADD_LIST",
      payload: {
        name,
        complete,
      },
    });
    setName("");
  };

  const [form, setForm] = useState([]);

  function deleteClick(e) {
    deleteList(form.name);
    console.log(e);
  }

  return (
    <>
      <FilterBlocks>
        <FilterForm filterVal={filterVal} setFilterVal={setFilterVal} />
        <ButtonLinks>
          <ModalBlock name={name} inputText={inputText} addList={addList} />
          <ButtonLink
            children="Delete"
            variant="delete"
            onClick={deleteClick}
          />
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
            {lists
              .filter((value) => value.name.indexOf(filterVal) !== -1)
              .map((value) => (
                <tr key={value.id}>
                  <TableTd $minwidth>
                    <input
                      id={value.id}
                      value={value.name}
                      name={value.name}
                      type="checkbox"
                      onChange={() => deleteList(value.name)}
                    ></input>
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
