import styled from "styled-components";
import { useState } from "react";
import FilterForm from "../FilterForm";
import ButtonLink from "../../atoms/Button";
import ModalBlock from "../../organisms/ModalBlock";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../../../storeSlice";

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
const TableTr = styled.tr`
  cursor: pointer;
`;

export default function TableList() {
  const [filterVal, setFilterVal] = useState("");
  const [text, setText] = useState("");
  const [checked, setChecked] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
      setIsOpen(false);
    }
  };

  const changeCheckbox = (id) => {
    // checkboxの解除の処理
    if (checked[id]) {
      const newChecked = JSON.parse(JSON.stringify(checked));
      delete newChecked[id];
      setChecked(newChecked);
      return;
    }

    setChecked({ ...checked, [id]: true });
  };

  const deleteChecked = () => {
    dispatch(deleteTodo(checked));
  };

  const clickIssue = () => {
    setIsOpen(true);
  };

  return (
    <>
      <FilterBlocks>
        <FilterForm filterVal={filterVal} setFilterVal={setFilterVal} />
        <ButtonLinks>
          <ModalBlock
            value={text}
            handleInputChange={handleInputChange}
            handleAddTodo={handleAddTodo}
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
          />
          <ButtonLink children="New" variant="true" handleClick={openModal} />
          <ButtonLink children="Delete" handleClick={deleteChecked} />
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
            {todos
              .filter((value) => value.text.indexOf(filterVal) !== -1)
              .map((value) => (
                <TableTr
                  key={value.id}
                  onClick={() => {
                    clickIssue(value.id);
                  }}
                >
                  <TableTd $minwidth>
                    <input
                      id={value.id}
                      value={value.name}
                      name={value.name}
                      type="checkbox"
                      checked={checked[value.id]}
                      onChange={(e) => {
                        e.stopPropagation();
                        changeCheckbox(value.id);
                      }}
                    />
                  </TableTd>
                  <TableTd $width>{value.text}</TableTd>
                  <TableTd>{value.status}</TableTd>
                  <TableTd>{value.author}</TableTd>
                  <TableTd>{value.createday}</TableTd>
                  <TableTd>{value.updateday}</TableTd>
                </TableTr>
              ))}
          </tbody>
        </Table>
      </TableWrapper>
    </>
  );
}
