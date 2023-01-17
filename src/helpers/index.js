import { useDispatch } from "react-redux";
import Axios from "axios";
import { toast } from "react-toastify";

export const handleAuthError = (error) => {
  if (error?.response?.status == 401) {
    window.location = "/logout";
  }
};

export const toastMessage = (type, message) => {
  if (type == "info") {
    toast.info(message);
  }
  if (type == "error") {
    toast.error(message);
  }
  if (type == "success") {
    toast.success(message);
  }
};

export const errorHandler = (error) => {
  if (error?.response?.data?.error?.message) {
    toastMessage("error", error.response.data.error.message);
  } else if (error?.response?.data?.error) {
    toastMessage("error", error.response.data.error);
  } else {
    toastMessage("error", error.message);
  }
  handleAuthError(error);
};
