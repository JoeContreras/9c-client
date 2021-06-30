import ACTIONS from "./index";
import axios from "axios";

export const fetchAllClientes = async (token) => {
  const res = await axios.get(
    "https://server-9c.herokuapp.com/admin/clientes",
    {
      headers: { Authorization: token },
    }
  );
  return res;
};

export const dispatchGetAllClientes = (res) => {
  return {
    type: ACTIONS.GET_ALL_CLIENTES,
    payload: res.data,
  };
};
