import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const { inputValue: firstName,
    isInputInvalid: firstNameInvalid,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler } = useInput((value) => {
      return value !== ''
    });

  const { inputValue: lastName,
    isInputInvalid: lastNameInvalid,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler } = useInput((value) => {
      return value !== ''
    });

  const { inputValue: email,
    isInputInvalid: emailInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler } = useInput((value) => {
      return value.includes('@')
    });

  const formSubmitHandler = event => {
    event.preventDefault();
    if (emailInvalid || firstNameInvalid || lastNameInvalid) {
      console.log('form invalid');
    }
    else {
      console.log('form valid');
    }
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input value={firstName} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} type='text' id='name' />
          {firstNameInvalid && <p>First Name is invalid</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input value={lastName} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} type='text' id='name' />
          {lastNameInvalid && <p>Last Name is invalid</p>}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input value={email} onChange={emailChangeHandler} onBlur={emailBlurHandler} type='text' id='name' />
        {emailInvalid && <p>Email is invalid</p>}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
