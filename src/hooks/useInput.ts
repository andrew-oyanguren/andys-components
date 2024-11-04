import { useState, useEffect , useCallback} from 'react';

const useInput = (validate?: (value: string) => boolean) => {
  const [value, setValue] = useState('');
  const [hasError, setHasError] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onValidate = useCallback((value: string) => {
    if (!validate) return;

    console.log('validating input...');
    setHasError(!validate(value));
  }, [validate]);

  useEffect(() => {
    if (value.length === 0) return;

    console.log('[STATE] value:', value);
    onValidate(value);
  }, [onValidate, value])

  return {
    onChange,
    hasError,
    value,
  };
};

export default useInput;