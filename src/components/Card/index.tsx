import { ReactNode } from 'react';

import styles from './index.module.css';

export default function Card({ children } : { children: ReactNode }) {
  return (
    <div className={styles.card}>
      {children}
    </div>
  )
};