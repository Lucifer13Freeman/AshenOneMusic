import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, CombinedState, combineReducers } from "redux";
import { IPlayerState } from "../../types/player";
import { ITrackState } from "../../types/track";
import { player_reducer } from "./player_reducer";
import { track_reducer } from "./track_reducer";


const root_reducer = combineReducers(
{  
    player: player_reducer,
    track: track_reducer
});

export const reducer = (state: any | undefined, action: AnyAction) => 
{
    if (action.type === HYDRATE) 
    {
        const nextState = 
        {
            ...state,
            ...action.payload,
        }
        
        if (state.count) nextState.count = state.count

        return nextState
    } 
    else return root_reducer(state, action)
}

//export type RootState = ReturnType<typeof reducer>;

export type RootState = ReturnType<typeof root_reducer>;