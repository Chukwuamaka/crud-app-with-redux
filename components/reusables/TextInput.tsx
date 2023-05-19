import { FormControl, Input, FormLabel } from "@chakra-ui/react";
import { FC } from "react";
import { TextInputProps } from "../../types/components/reusables/text_input";

const TextInput: FC<TextInputProps> = ({ required, id, value, label, changeHandler, ...props }) => {
  return (
    <FormControl isRequired={required} {...props}>
      <FormLabel htmlFor={id} fontSize={13} fontWeight='medium' mb={2} className='sr-only'>{label}</FormLabel>
      <Input id={id} type='text' name={id} value={value} placeholder={label} onChange={changeHandler} />
    </FormControl>
  )
}

export default TextInput;