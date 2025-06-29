import { useState } from "react";
import styles from "./hero.module.css";

function Hero() {
  const [cursorX, setCursorX] = useState(50); // percentuale iniziale

  const handleMouseMove = (e) => {
    const percent = (e.clientX / window.innerWidth) * 100;
    setCursorX(percent);
  };

  return (
    <div className={styles.container} onMouseMove={handleMouseMove}>
      <div className={styles.imageLeft}>
        <img src="/img/front1.png" alt="Left" />
      </div>
      <div className={styles.imageRight}>
        <img src="/img/back1.png" alt="Right" />
      </div>

      <div
        className={styles.revealLeft}
        style={{ width: `${cursorX}%` }}
      >
        <img src="/img/front1.png" alt="Left reveal" />
      </div>

      <div
        className={styles.revealRight}
        style={{ left: `${cursorX}%` }}
      >
        <img src="/img/back1.png" alt="Right reveal" />
      </div>

      <div className={styles.divider} style={{ left: `${cursorX}%` }} />
    </div>
  );
}

export default Hero;
