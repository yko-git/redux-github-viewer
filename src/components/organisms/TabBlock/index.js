import styled from "styled-components";
import { useState } from "react";
import IssueBlock from "../IssueBlock";
import PullRequestBlock from "../PullRequestBlock";

const TabWrapper = styled.div`
  max-width: 896px;
  margin: 0 auto;
  padding: 32px 16px;
`;

const TabLinks = styled.ul`
  display: flex;
`;

const TabLinkItem = styled.li`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding: 16px;
  cursor: pointer;
  width: 100%;
  border-bottom: ${(props) =>
    props.activeTab ? "none" : "1px solid rgb(225, 228, 232)"};
  border-top: ${(props) =>
    props.activeTab ? "1px solid rgb(225, 228, 232)" : "none"};
  border-right: ${(props) =>
    props.activeTab ? "1px solid rgb(225, 228, 232)" : "none"};
  border-left: ${(props) =>
    props.activeTab ? "1px solid rgb(225, 228, 232)" : "none"};
  border-radius: ${(props) => (props.activeTab ? "6px 6px 0px 0px" : "none")};
`;

export default function TabBlock() {
  const tabs = ["Issue", "Pull Request"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
      <TabWrapper>
        <TabLinks>
          {tabs.map((tab) => (
            <TabLinkItem
              key={tab}
              onClick={() => setActiveTab(tab)}
              activeTab={activeTab === tab}
            >
              {tab}
            </TabLinkItem>
          ))}
        </TabLinks>
        <div>
          {activeTab === tabs[0] ? <IssueBlock /> : <PullRequestBlock />}
        </div>
      </TabWrapper>
    </>
  );
}
