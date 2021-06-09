import { Card, Grid, IconButton } from "@material-ui/core";
import React from "react";
import { ITrack } from "../types/track";
import styles from "../styles/TrackItem.module.scss";
import { Delete, Pause, PlayArrow } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useActions } from "../hooks/useAction";

interface TrackItemProps 
{
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps > = ({ track, active = false }) =>
{
    const router = useRouter();
    const { play_track, pause_track, set_active_track } = useActions();

    const play = (e: React.MouseEvent<HTMLButtonElement> 
                    | React.TouchEvent<HTMLButtonElement>) =>
    {
        e.stopPropagation();
        set_active_track(track);
        play_track();
    }

    return (
        <Card className={styles.track} onClick={ () => router.push('tracks/' + track._id) }>
            <IconButton onClick={play}>
                { active
                    ? <Pause/>
                    : <PlayArrow/>
                }
            </IconButton>
            <img width={70} height={70} src={process.env.MAIN_URL + track.picture}/>
            <Grid container direction="column" style={{width:200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            { active && <div>02:42/03:22</div>}
            <IconButton 
                onClick={ e => e.stopPropagation() } 
                style={{marginLeft: 'auto'}}
            >
                <Delete/>
            </IconButton>
        </Card>
    );
}

export default TrackItem;