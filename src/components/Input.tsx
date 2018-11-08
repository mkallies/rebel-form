import * as React from 'react'
import styled from 'styled-components'

type InputWrapperProps = {
  width?: string
}

const Input = styled.input`
  border-bottom: 1.5px solid #cbcbcb;
  background: #f7f7f7;
  width: 100%;
  height: 35px;
`

const Label = styled.label`
  font-weight: bold;
  font-size: 13px;
  padding: 8px 0;
`

const TextArea = styled.textarea`
  font-size: 26px;
  width: 100%;
  margin: 0;
  border: 1.5px solid #cbcbcb;
  background: #f7f7f7;
  border-radius: 3px;
  resize: none;
  height: 120px;
`

const InputWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  width: ${(props: InputWrapperProps) => props.width || '100%'};
`

function InputContainer({
  label,
  name,
  width,
  textarea = false,
  ...inputProps
}: {
label?: string
name: string
textarea?: boolean
width?: string
}) {
  return (
    <InputWrapper width={width}>
      {label && <Label htmlFor={name}>{label}</Label>}
      {textarea ? (
        <TextArea id={name} name={name} {...inputProps} />
      ) : (
        <Input id={name} name={name} {...inputProps} />
      )}
    </InputWrapper>
  )
}

export default InputContainer
