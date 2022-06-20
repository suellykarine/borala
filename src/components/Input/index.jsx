import { InputContainer, Inputs } from "./style";
function Input({ placeholder, register, errorMsg, ...rest }) {
  return (
    <InputContainer errorMsg={errorMsg}>
      <Inputs {...rest} {...register} placeholder={placeholder} />
    </InputContainer>
  );
}
export default Input;
