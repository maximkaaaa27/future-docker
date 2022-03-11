import { useCallback } from "react";
import { setDataBase, setLoading } from "../redux/databaseSlice";
import { useAppDispatch } from "./redux.hook";

const smallTextUrl =
  "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

const bigTextUrl =
  "http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

export const useDataFill = () => {
  const dispatch = useAppDispatch();

  const getData = useCallback(
    async ({ big }: { big: boolean }) => {
      dispatch(setLoading());

      try {
        const url = big ? bigTextUrl : smallTextUrl;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Ooops. Something going wrong...!");
        }

        dispatch(setLoading());

        const dataArray = Object.keys(data).map((key) => {
          return {
            ...data[key],
          };
        });

        dispatch(setDataBase(dataArray));

        return data;
      } catch (e) {}
    },
    [dispatch]
  );

  return { getData };
};
