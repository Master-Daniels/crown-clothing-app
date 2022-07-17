import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const LogoContainerNavLink = styled(NavLink)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;
export const OptionsContainer = styled(NavLink)`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const OptionNavLink = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 500;
`;
