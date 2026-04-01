import { useState } from "react";

import styles from "../../styles/modules/MenuButton.module.css";

export default function MenuButton(props) {
  const [open, setOpen] = useState(true);

  const toggler = () => {
    setOpen(!open);
    props.setSidebar(open);
  };

  return (
    <div
      className={
        open ? `${styles.menuIcon}` : `${styles.menuIcon} ${styles.open}`
      }
      onClick={toggler}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
