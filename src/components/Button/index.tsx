import styles from './index.module.css';

type ButtonProps = {
  title: string;
  onClick: () => void;
  secondary?: boolean;
  style?: React.CSSProperties;
};

export default function Button({ title, onClick, secondary, style }: ButtonProps) { 

  const buttonStyles = `${styles.button} ${secondary ? styles.secondary : styles.primary}`;

  return (
    <button style={style} className={buttonStyles} onClick={onClick}>{title}</button>
  );
};