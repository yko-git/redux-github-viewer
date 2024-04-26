import styled from "styled-components";
// import ProfileBlock from "../components/organisms/ProfileBlock";
import Header from "../components/organisms/Header";
const TabWrapper = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`;

function Profile() {
  return (
    <>
      <Header />
      <TabWrapper>profileが入ります</TabWrapper>
    </>
  );
}

export default Profile;
