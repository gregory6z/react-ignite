import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gregory6z.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gregory Praxedes</strong>
              <time title="11 mai à 08h13" dateTime="2022-5-11 08:13:30">
                posté il y a 1h
              </time>
            </div>

            <button
              onClick={handleDeleteComment}
              title="supprimer le commentaire"
            >
              <Trash sizw={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            applaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
