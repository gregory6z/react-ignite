import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/gregory6z.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gregory Praxedes</strong>
              <time title="11 mai à 08h13" dateTime="2022-5-11 08:13:30">
                posté il y a 1h
              </time>
            </div>

            <button title="supprimer le commentaire">
              <Trash sizw={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            applaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
