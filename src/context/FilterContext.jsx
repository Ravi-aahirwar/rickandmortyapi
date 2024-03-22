import { useContext, useEffect, useReducer } from "react";

import { createContext } from "react";
import { useCharContext } from "./CharacterContext";

const filterContext = createContext()

const FilterProvier = ({ children }) => {

    const { data } = useCharContext()

    const initialState = {
        filterCards: [],
        all_Cards: [],
        genderText: "",
        speciesText: "",
        statusText: "",
    }

    const reducer = (state, action) => {

        if (action.type === "LOAD_ALL_CARDS") {
            return {
                ...state,
                filterCards: [...action.payload],
                all_Cards: [...action.payload]
            }
        }

        if (action.type === "SEARCH_FILTER") {
            let text = action.payload;
            const { all_Cards } = state
            let filterCards = all_Cards
            filterCards = filterCards.filter((elm) => {
                return elm.name.toLowerCase().includes(text)
            })

            return {
                ...state,
                filterCards
            }
        }

        if (action.type === "FILTER_BY_GENDER") {
            let gender = action.payload;
            const { all_Cards } = state;
            let filterByGender = all_Cards
            filterByGender = gender === "All" ? filterByGender : filterByGender.filter((elm) => {
                return elm.gender.includes(gender)
            })
            return {
                ...state,
                filterCards: filterByGender,
                genderText: gender
            }
        }

        if (action.type === "FILTER_BY_SPECIES") {
            let species = action.payload;
            const { all_Cards } = state;
            let filterByGender = all_Cards
            filterByGender = species === "All" ? filterByGender : filterByGender.filter((elm) => {
                return elm.species.includes(species)
            })
            return {
                ...state,
                filterCards: filterByGender,
                speciesText: species
            }
        }

        if (action.type === "FILTER_BY_STATUS") {
            let status = action.payload;
            const { all_Cards } = state;
            let filterByGender = all_Cards
            filterByGender = status === "All" ? filterByGender : filterByGender.filter((elm) => {
                return elm.status.includes(status)
            })
            return {
                ...state,
                filterCards: filterByGender,
                statusText: status
            }
        }
        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const searchFilter = (event) => {
        let name = event.target.value;
        dispatch({ type: "SEARCH_FILTER", payload: name })
    }

    const handleGenderFilter = (gender) => {
        dispatch({ type: "FILTER_BY_GENDER", payload: gender })
    }

    const handleSpeciesFIlter = (species) => {
        dispatch({ type: "FILTER_BY_SPECIES", payload: species })
    }
    const handleStatusFIlter = (status) => {
        dispatch({ type: "FILTER_BY_STATUS", payload: status })
    }
    useEffect(() => {
        dispatch({ type: "LOAD_ALL_CARDS", payload: data })
    }, [data])

    return <filterContext.Provider
        value={{
            ...state,
            searchFilter,
            handleGenderFilter,
            handleSpeciesFIlter,
            handleStatusFIlter,
        }} >
        {children}
    </filterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(filterContext)
}

export { FilterProvier, filterContext }