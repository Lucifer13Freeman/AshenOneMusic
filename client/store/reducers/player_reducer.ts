import { IPlayerState, PlayerAction, PlayerActionTypes } from "../../types/player"


const initialState: IPlayerState = {
    
    active: null,
    volume: 50,
    duration: 0,
    current_time: 0,
    is_pause: true
}

export const player_reducer = (state = initialState, action: PlayerAction): IPlayerState =>
{
    switch (action.type) 
    {
        case PlayerActionTypes.PLAY:
            
            return { ...state, 
                    is_pause: false 
                }
        

        case PlayerActionTypes.PAUSE:
            
            return { ...state, 
                    is_pause: true 
                }


        case PlayerActionTypes.SET_ACTIVE:
            
            return { ...state, 
                    active: action.payload, 
                    duration: 0, 
                    current_time: 0 
                }

        
        case PlayerActionTypes.SET_DURATION:
            
            return { ...state, 
                    duration: action.payload 
                }

        
        case PlayerActionTypes.SET_CURRENT_TIME:
            
            return { ...state, 
                    current_time: action.payload 
                }

            
        case PlayerActionTypes.SET_VOLUME:
            
            return { ...state, 
                    volume: action.payload 
                }
                

        default:

            return state;
    }
}