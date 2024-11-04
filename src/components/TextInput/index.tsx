import styles from './index.module.css';

export default function TextInput({ hasError, placeholder, onChange }: { hasError: boolean; placeholder?: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {

  const inputClassNames = `${styles.textInput} ${hasError ? styles.error : ''}`;

  return (
    <input className={inputClassNames} type='text' placeholder={placeholder ?? ''} onChange={onChange} />
  );
};