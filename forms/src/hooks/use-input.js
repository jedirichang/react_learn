import { useState } from "react"

const useInput = (validator) => {
    debugger;
    const [inputValue, setInputValue] = useState('');
    const [isInputTouched, setInputTouched] = useState(false);

    const validateInput = validator(inputValue);
    const isInputInvalid = !validateInput && isInputTouched;

    const inputChangeHandler = event => {
        setInputValue(event.target.value);
    }

    const inputBlurHandler = event => {
        setInputTouched(true);
    }

    return {
        inputValue,
        isInputInvalid,
        inputChangeHandler,
        inputBlurHandler,
    }
}

export default useInput;