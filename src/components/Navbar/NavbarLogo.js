/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import GymLogo from "../../images/GymLogo.png";


const NavbarLogo = (css = { styles }) => {
    return (
        <img src={GymLogo} className="photo" alt="" css={styles} height="50%" width="25%" />
    )
}

const styles = css`
.photo {
    height: 50;
    width: 50;
  }
`

export default NavbarLogo;