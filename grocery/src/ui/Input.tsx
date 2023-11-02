function Input({ label, type = "text" }: InputType) {
  return (
    <>
      <label>{label}</label>
      <input type={type} />
    </>
  );
}

export default Input;

export declare interface InputType {
  label: string;
  type?: string;
}
