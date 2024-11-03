import { ReactNode } from 'react';

import styles from './index.module.css';

type CardProps = {
  children: ReactNode;
  flexCenter?: boolean;
};;

export default function Card({ children, flexCenter } : CardProps) {

  const cardClassNames = `${styles.card} ${flexCenter ? styles.flexCenter : ''}`;

  return (
    <div className={cardClassNames}>
      {children}
    </div>
  )
};