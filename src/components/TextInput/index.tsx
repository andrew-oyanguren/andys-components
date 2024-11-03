import styles from './index.module.css';

export default function TextInput({ hasError, placeholder }: { hasError: boolean; placeholder?: string }) {

  const inputClassNames = `${styles.textInput} ${hasError ? styles.error : ''}`;

  return (
    <input className={inputClassNames} type='text' placeholder={placeholder ?? ''} />
  );
};