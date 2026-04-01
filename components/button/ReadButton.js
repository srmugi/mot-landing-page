import { useRouter } from "next/router";

import styles from "../../styles/modules/ReadButton.module.scss";

export default function ReadButton(props) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(props.href);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        props.color === "white" ? styles.readButtonWhite : styles.readButton
      } ${styles.learnMore}`}
    >
      <span className={`${styles.circle}`} aria-hidden="true">
        <span className={`${styles.icon} ${styles.arrow}`}></span>
      </span>
      <span className={`${styles.buttonText}`}>{props.text}</span>
    </button>
  );
}
