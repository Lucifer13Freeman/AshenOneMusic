import { Box, Grid } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { NextThunkDispatch } from "../store";
import { ITrack } from "../types/track";
import TrackItem from "./TrackItem";

interface TrackListProps 
{
    tracks: ITrack[];
}

const TrackList: React.FC<TrackListProps > = ({ tracks }) =>
{
    /*const { is_pause, 
        active, 
        volume, 
        duration, 
        current_time } = useTypedSelector(state => state.player);*/

    //const set_active =

    return (
        <Grid container direction="column">
            <Box p={2}>
                { tracks.map(track => 
                    <TrackItem 
                        key={track._id}
                        track={track}
                    />    
                ) }
            </Box>
        </Grid>
    );
}

export default TrackList;