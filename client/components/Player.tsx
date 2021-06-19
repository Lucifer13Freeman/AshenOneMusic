import { Grid, IconButton } from "@material-ui/core";
import { Pause, PlayArrow, VolumeUp } from "@material-ui/icons";
import React, { useEffect } from "react";
import { time_format } from "../functions/time_format";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import styles from "../styles/Player.module.scss";
import TrackProgressBar from "./TrackProgressBar";

let audio: HTMLAudioElement;

const Player: React.FC = () =>
{
    const { is_pause, 
            active, 
            volume, 
            duration, 
            current_time } = useTypedSelector(state => state.player);

    const { pause_track, 
            play_track,
            set_duration, 
            set_current_time, 
            set_volume } = useActions();

    useEffect(() => 
    {
        if (!audio) audio = new Audio();
        else 
        {
            set_audio();
            play();
        }

    }, [active]);

    const set_audio = () =>
    {
        if (active)
        {
            audio.src = 'http://localhost:5000/' + active.audio;
            audio.volume = volume / 100;
            audio.onloadedmetadata = () => set_duration(Math.ceil(audio.duration));
            audio.ontimeupdate = () => set_current_time(Math.ceil(audio.currentTime));
        }
    }

    const play = () => 
    {
        if (is_pause) 
        { 
            play_track();
            audio.play();
        }
        else 
        {
            pause_track();
            audio.pause();
        }
    }

    const change_volume = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        audio.volume = Number(e.target.value) / 100;
        set_volume(Number(e.target.value));
    }

    const change_current_time = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        audio.currentTime = Number(e.target.value);
        set_current_time(Number(e.target.value));
    }

    if (!active) return null;
    
    return (
        <div className={styles.player}>
            <IconButton onClick={play}>
                { is_pause
                    ? <PlayArrow/>
                    : <Pause/>
                }
            </IconButton>
            <Grid container direction="column" style={{width:200, margin: '0 20px'}}>
                <div>{active?.name}</div>
                <div 
                    style={{
                            fontSize: 12, 
                            color: 'gray'
                        }}
                >
                    {active?.artist}
                </div>
            </Grid>
            <TrackProgressBar
                current={current_time} 
                total={duration} 
                is_time={true}
                on_change={change_current_time} 
            />
            <VolumeUp style={{ margin: '10px 0', marginLeft: 'auto' }}/>
            <TrackProgressBar 
                current={volume} 
                total={100} 
                on_change={change_volume} 
            />
        </div>
    );
}

export default Player;