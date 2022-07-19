import styles from "./Avatar.module.css";

interface Props {
  src: string;
  hasBorder?: boolean;
  alt?: string;
}

export function Avatar({ src, hasBorder = true, alt }: Props) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
