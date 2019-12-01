import { toast } from 'react-toastify';

const checkCorrectInput = (inputValue, balance) => {
  if (inputValue < 0) {
    toast.warn(`The amount can't be negative!`, {
      position: toast.POSITION.TOP_RIGHT,
    });
    return false;
  }
  if (inputValue === 0) {
    toast.warn('Enter the amount for the operation!', {
      position: toast.POSITION.TOP_RIGHT,
    });
    return false;
  }
  if (inputValue > balance) {
    toast.error(
      'There are not enough funds on the account to conduct the operation!',
      {
        position: toast.POSITION.TOP_RIGHT,
      },
    );
    return false;
  }
  return true;
};

export default checkCorrectInput;
