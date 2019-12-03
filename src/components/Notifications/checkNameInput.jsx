import { toast } from 'react-toastify';

const checkCorrectInput = inputValue => {
  if (inputValue.length === 0) {
    toast.warn(`The amount can't be negative!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
    return false;
  }
  return true;
};

export default checkCorrectInput;
