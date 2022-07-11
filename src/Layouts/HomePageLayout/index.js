import { Wrapper, HeaderBox, MenuBox, MenuItem } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

const HomePageLayout = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = (url) => {
    navigate(url);
  };
  return (
    <Wrapper>
      <HeaderBox>
        <MenuBox>
          <MenuItem
            onClick={() => redirect("/")}
            selected={location.pathname === "/"}
          >
            Home
          </MenuItem>
          <MenuItem
            onClick={() => redirect("/consents")}
            selected={location.pathname === "/consents"}
          >
            Consents
          </MenuItem>
        </MenuBox>
      </HeaderBox>
      {props.children}
    </Wrapper>
  );
};

export default HomePageLayout;
