import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/punklogo2.svg";
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
} from "./navigation.styles";

export const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
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
