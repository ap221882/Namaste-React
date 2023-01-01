import { TbMoonStars, BsSun, FaPowerOff } from "../../../assets/icons";
import classes from "../Navbar.styles.module.css";
import AppModeIcon from "./AppModeIcon";
import NavbarHeader from "./NavbarHeader";

type Props = {
  isDark: boolean;
  handleLightButtonClick: () => void;
  handleDarkButtonClick: () => void;
  handleSignOff: () => void;
};

const NavbarUi = ({
  isDark,
  handleDarkButtonClick,
  handleLightButtonClick,
  handleSignOff,
}: Props) => {
  return (
    <nav className={isDark ? classes.dark : ""}>
      <NavbarHeader />
      {!isDark && (
        <AppModeIcon handler={handleDarkButtonClick}>
          <TbMoonStars />
        </AppModeIcon>
      )}
      {isDark && (
        <AppModeIcon handler={handleLightButtonClick}>
          <BsSun />
        </AppModeIcon>
      )}
      <AppModeIcon handler={handleSignOff}>
        <FaPowerOff className={classes.power_off} title="Logout" />
      </AppModeIcon>
    </nav>
  );
};

export default NavbarUi;
