import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  background-color: #f1f1f1;
  width: 200px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
`;

const SidebarMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const SidebarItem = styled.li`
  padding: 10px;
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarMenu>
        <SidebarItem>
          <SidebarLink to="/">Dashboard</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/reviews">Reviews</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/average-rating">Average Rating</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/sentiment-analysis">Sentiment Analysis</SidebarLink>
        </SidebarItem>
        <SidebarItem>
          <SidebarLink to="/website-visitors">Website Visitors</SidebarLink>
        </SidebarItem>
      </SidebarMenu>
      <SidebarMenu>
        <SidebarItem>
          <SidebarLink to="/settings">Settings</SidebarLink>
        </SidebarItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;



