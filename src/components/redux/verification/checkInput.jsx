import { toast } from "react-toastify";

const checkInput = (inputValue, expenses) => {
  if (inputValue < 0) {
    toast.warn("Буджет не может быть отрицательной!", {
      position: toast.POSITION.BOTTOM_LEFT
    });
    return false;
  }
  if (inputValue === 0) {
    toast.warn("Введите сумму бюджета!", {
      position: toast.POSITION.BOTTOM_LEFT
    });
    return false;
  }
  if (inputValue < expenses) {
    toast.error("Бюджет не может быть меньше затрат!", {
      position: toast.POSITION.BOTTOM_LEFT
    });
    return false;
  }
  return true;
};

export default checkInput;
