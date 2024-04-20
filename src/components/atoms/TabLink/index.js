import { useState } from "react";
import styled from "styled-components";

const TabLinkItem = styled.li`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding: 16px;
  cursor: pointer;
  border-radius: 6px 6px 0px 0px;
  border-top: 1px solid rgb(225, 228, 232);
  border-right: 1px solid rgb(225, 228, 232);
  border-left: 1px solid rgb(225, 228, 232);
  width: 100%;
`;

export default function TabLink() {
  const links = [
    {
      id: 0,
      name: "Issue",
    },
    {
      id: 1,
      name: "Pull Request",
    },
  ];

  const tabList = links.map((value) => (
    <TabLinkItem key={value.id}>{value.name}</TabLinkItem>
  ));
  return <>{tabList}</>;
}
