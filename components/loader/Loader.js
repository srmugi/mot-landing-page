import styles from "../../styles/modules/Loader.module.css";

export default function LoaderDefault() {
  return (
    <div className="h-screen w-screen flex items-center justify-center fixed bg-white z-[1000]">
      <div className="text-center">
        <div className={styles.ldsFacebook}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>お待ちください。ページを読み込んでいます...</div>
      </div>
    </div>
  );
}
