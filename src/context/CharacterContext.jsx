import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";

const characterContext = createContext();

const CharacterProvider = ({ children }) => {

    const API = "https://rickandmortyapi.com/api/character"

    const initialState = {
        data: [],
        loading: false,
        error: "",
    }

    const reducer = (state, action) => {
        if (action.type === "IS_LOADING") {
            return {
                ...state,
                loading: true
            }
        }

        if (action.type === "API_ERROR") {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }

        if (action.type === "GET_API_DATA") {
            let data = action.payload
            return {
                ...state,
                loading: false,
                data: data.results
            }
        }

        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const getAllData = async (url) => {
        dispatch({ type: "IS_LOADING" })
        try {
            const response = await axios.get(url);
            const result = await response.data;
            dispatch({ type: "GET_API_DATA", payload: result });
        } catch (error) {
            dispatch({ type: "API_ERROR", payload: error.message });
        }
    }

    useEffect(() => {
        getAllData(API)
    }, [])

    return (
        <characterContext.Provider value={{ ...state }} >
            {children}
        </characterContext.Provider>
    )
}

export const useCharContext = () => {
    return useContext(characterContext)
}
export { CharacterProvider, characterContext }