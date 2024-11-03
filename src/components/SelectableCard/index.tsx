import { useState } from 'react';
import styles from './index.module.css';

type SelectableCardProps = {
  children: React.ReactNode;
  flexCenter?: boolean;
};

export default function SelectableCard({ children, flexCenter } : SelectableCardProps) {
  const [isActive, setIsActive] = useState(false);

  const selectableCardClassNames = `${styles.selectableCard} ${flexCenter ? styles.flexCenter : ''} ${isActive ? styles.active : styles.inactive}`;

  return (
    <div className={selectableCardClassNames} onClick={() => setIsActive((prevState) => !prevState)}>
      {children}
    </div>
  );
};