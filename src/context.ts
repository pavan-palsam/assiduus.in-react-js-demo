import { createContext, Dispatch, SetStateAction, useContext } from "react";


export const RandomData = createContext<{
    buttonClicked: boolean;
    setButtonClicked: Dispatch<SetStateAction<boolean>>;

}>({} as any)

export const useRandomData = ()=> useContext(RandomData)