import { FC, useState } from "react";
import logoImg from "./VK_Compact_Logo.svg.webp";
import { Search } from "@mui/icons-material";
import styles from "./Header.module.css";

const Header: FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles["image-wrapper"]}>
        <img src={logoImg} alt="" />
      </div>

      <div className={styles.wrapper}>
        {!isSearchActive && <Search />}
        <input
          type="text"
          placeholder="Search"
          onClick={() => setIsSearchActive(true)}
        />
      </div>
    </header>
  );
};

export default Header;
