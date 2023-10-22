import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputLabel = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 2.5rem;
    margin-bottom: 1.6rem;
    outline: none;
    border-radius: .2rem;
    border: 1px solid #ccc;
    color: #202020;
    font-size: 1.3rem;
    background-color: transparent;

    @media (max-width: 350px) {
    padding: 0;
  }
  }

  label {
    font-family: 'Roboto';
    font-weight: bold;
    margin-bottom: .8rem;
    color: #161616;
  }
`;

export default function InputForm({
  title, type, value, oc, placeholder, name, required
}) {
  return (
    <StyledInputLabel>
      <label htmlFor="name">{title}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={oc}
        required={required}
      />
    </StyledInputLabel>
  );
}

InputForm.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  oc: PropTypes.func,
  required: PropTypes.bool,
};
