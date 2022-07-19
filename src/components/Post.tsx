import styles from "./Post.module.css";

import { format, formatDistanceToNow } from "date-fns";
import fr from "date-fns/locale/fr";

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

interface Content {
  type: string | "link" | "paragraph";
  content: string;
}

interface IPostProps {
  author: IAuthor;
  publishedAt: Date;
  content: Content[];
}
interface IAuthor {
  name: string;
  role: string;
  avatarUrl: string;
}

export function Post({ author, publishedAt, content }: IPostProps) {
  const [comments, setComments] = useState(["Post Muito Bacana"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'à' HH:mm'h'",
    {
      locale: fr,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: fr,
    addSuffix: true,
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Champ Invalid");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeletedOne);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                {" "}
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Laissez votre feedback</strong>

        <textarea
          placeholder="laissez un commentaire"
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publier
          </button>
        </footer>
        <div></div>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              onDeleteComment={deleteComment}
              content={comment}
            />
          );
        })}
      </div>
    </article>
  );
}
