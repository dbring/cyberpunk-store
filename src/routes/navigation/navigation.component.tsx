import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { CartDropdown } from "../../components/CartDropdown/cart-dropdown.component";
import { CartIcon } from "../../components/CartIcon/cart-icon.component";
import { selectIsOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";
import { selectCurrentUser } from "../../store/user/user.selector";
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
  StyledLogo,
} from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <StyledLogo className="logo" />
          <p>
            TYRELL CORP. <br /> More Human Than Human.
          </p>
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="auth">SIGN IN</NavLink>
          )}

          <CartIcon />
        </NavLinksContainer>

        {isOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
