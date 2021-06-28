import { Card, Grid, IconButton } from "@material-ui/core";
import React from "react";
import { ITrack } from "../types/track";
import styles from "../styles/TrackItem.module.scss";
import { Delete, Pause, PlayArrow } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useActions } from "../hooks/useAction";
import axios from "axios";
import { useTypedSelector } from "../hooks/useTypedSelector";

interface TrackItemProps 
{
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps > = ({ track, active = false }) =>
{
    const router = useRouter();

    /*const { is_pause, 
        active, 
        volume, 
        duration, 
        current_time } = useTypedSelector(state => state.player);

    const { pause_track, 
            play_track,
            set_duration, 
            set_current_time, 
            set_volume } = useActions();*/

    const { play_track, 
            pause_track, 
            set_active_track } = useActions();

    //const dispatch = useDispatch() as NextThunkDispatch;

    const play = (e: React.MouseEvent<any>) =>
    {
        e.stopPropagation();
        set_active_track(track);
        play_track();
    }

    const pause = (e: React.MouseEvent<any>) =>
    {
        e.stopPropagation();
        set_active_track(track);
        pause_track();
    }

    const delete_track = async (/*e: React.MouseEvent<SVGAElement>*/) => 
    {
        //e.stopPropagation();
        //const response = await axios.delete('http://localhost:5000/tracks/' + track._id);
        await axios
                .delete('http://localhost:5000/tracks/' + track._id)
                .then(res => router.push('tracks/'))
                .catch(e => console.log(e));
                
        /*await dispatch(delete_track(track._id));
        router.push('tracks/');*/
    }

    //console.log(process.env.MAIN_URL);

    return (
        <Card 
            className={styles.track} 
            onClick={ () => router.push('tracks/' + track._id) }
        >
            <IconButton>
                { active
                    ? <Pause onClick={pause}/>
                    : <PlayArrow onClick={play}/>
                }
            </IconButton>
            <img 
                width={70} 
                height={70} 
                src={'http://localhost:5000/' + track.picture }
            />
            <Grid 
                container 
                direction="column" 
                style={{
                    width:200, 
                    margin: '0 20px'
                }}
            >
                <div>{track.name}</div>
                <div 
                    style={{
                        fontSize: 12, 
                        color: 'gray'
                    }}
                >
                    {track.artist}
                </div>
            </Grid>
            { active && <div>02:42/03:22</div>}
            <IconButton 
                onClick={ e => e.stopPropagation() } 
                style={{marginLeft: 'auto'}}
            >
                <Delete
                    onClick={delete_track}
                />
            </IconButton>
        </Card>
    );
}

export default TrackItem;