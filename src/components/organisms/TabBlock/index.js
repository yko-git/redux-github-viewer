import styled from "styled-components";
import TabLink from "../../atoms/TabLink";

const TabWrapper = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`;

const TabLinks = styled.ul`
  display: flex;
`;

export default function TabBlock() {
  return (
    <TabWrapper>
      <TabLinks>
        <TabLink />
      </TabLinks>
    </TabWrapper>
  );
}
