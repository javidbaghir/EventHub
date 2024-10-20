import { useState } from "react";
import { useContextGlobal } from "../context/GlobalContext";

export const useForm = ({ initialState, onSubmit }) => {
  const { handleState } = useContextGlobal();
  const [value, setValue] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const setField = (name, value) => {
    setValue((old) => ({
      ...old,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setLoading(true);
    try {
      await onSubmit(value);
    } catch (e) {
      const errors = e?.response?.data;

      if (errors) {
        handleState('errors', errors);
      }
      setLoading(false);
    }
    setLoading(false);
  };

  return {
    value,
    loading,
    setField,
    handleSubmit,
  };
};
