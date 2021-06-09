import axios from "axios"
import { Dispatch } from "react"
import { TrackAction, TrackActionTypes } from "../../types/track"


export const fetch_tracks = () =>
{
    return async (dispatch: Dispatch<TrackAction>) =>
    {
        try 
        {
            const response = await axios.get(process.env.MAIN_URL + 'tracks');
            
            dispatch(
            {
                type: TrackActionTypes.FETCH_TRACKS,
                payload: response.data
            });
        } 
        catch (e) 
        {
            dispatch(
            { 
                type: TrackActionTypes.FETCH_TRACKS_ERROR, 
                payload: 'Track loading error!'
            });
        }
    }
}

export const search_tracks = (query: string) =>
{
    return async (dispatch: Dispatch<TrackAction>) =>
    {
        try 
        {
            const response = await axios.get(process.env.MAIN_URL + 'tracks/seacrh?query=' + query);
            
            dispatch(
            {
                type: TrackActionTypes.FETCH_TRACKS,
                payload: response.data
            });
        } 
        catch (e) 
        {
            dispatch(
            { 
                type: TrackActionTypes.FETCH_TRACKS_ERROR, 
                payload: 'Track loading error!'
            });
        }
    }
}