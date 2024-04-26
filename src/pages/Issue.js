import styled from "styled-components";
import IssueBlock from "../components/organisms/IssueBlock";
import Header from "../components/organisms/Header";
const TabWrapper = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`;

function Issue() {
  return (
    <>
      <Header />
      <TabWrapper>
        <IssueBlock />
      </TabWrapper>
    </>
  );
}

export default Issue;
