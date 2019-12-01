import { toast } from 'react-toastify';

const checkCorrectInput = (inputValue, expenses) => {
  if (inputValue < 0) {
    toast.warn(`Your budget can't be negative!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
    return false;
  }
  if (inputValue === 0) {
    toast.warn('Add a budget!', {
      position: toast.POSITION.TOP_RIGHT,
    });
    return false;
  }
  if (inputValue < expenses) {
    toast.error(`Your budget can't be less then expenses!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
    return false;
  }
  return true;
};

export default checkCorrectInput;
