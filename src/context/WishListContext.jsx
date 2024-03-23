import { useContext, useReducer } from "react";
import { createContext } from "react";

const wishListContext = createContext()

const WishListProvider = ({ children }) => {

    const initialState = {
        favourite_cards:[]
    }

    const reducer = (state, action) => {
        if (action.type === "ADD_TO_FAVOURITE") {
            let { id, data } = action.payload
          let existingCard = state.favourite_cards.find((elm) => elm.id === id)
            if(existingCard){
                alert("Products Already in WishList Choose Another One!")
            }
            else{
                alert("Character Addes to Favourite :)")
                let favouriteCard;
                favouriteCard = {
                    id: data[0],
                    name: data[1],
                    status: data[2],
                    species: data[3],
                    image: data[4],
                    gender: data[5]
                }   
                return{
                    ...state,
                    favourite_cards: [  ...state.favourite_cards ,favouriteCard]
                }
            }
        }

        if(action.type === "REMOVE_FROM_FAVOURITE"){
            let removeFavourite = state.favourite_cards.filter((elm)=>(
                elm.id !== action.payload
            ))
            return{
                ...state,
                favourite_cards: removeFavourite
            }
        }

        return state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const addToFavourite = (id, data) => {
        dispatch({ type: "ADD_TO_FAVOURITE", payload: { id, data } })
    }

    const removeFavourite = (id) =>{
        dispatch({type:"REMOVE_FROM_FAVOURITE", payload: id })
    }

    return (
        <wishListContext.Provider
            value={{
                ...state,
                addToFavourite,
                removeFavourite
            }}
        >
            {children}
        </wishListContext.Provider>
    )
}

export const useWishListContext = () => {
    return useContext(wishListContext)
}

export { WishListProvider }