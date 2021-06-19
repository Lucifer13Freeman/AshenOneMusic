import { Grid, IconButton, TextField } from "@material-ui/core";
import { Pause, PlayArrow } from "@material-ui/icons";
import React from "react";
import { time_format } from "../functions/time_format";
import styles from "../styles/Player.module.scss";
import { ITrack } from "../types/track";

interface TrackProgressBarProps
{
    current: number;
    total: number;
    is_time?: boolean;
    on_change: (e:any) => void;
}

const TrackProgressBar: React.FC<TrackProgressBarProps> = (
    { 
        current: current, 
        total: total, 
        is_time: is_time = false, 
        on_change 
    }) =>
{
    return (
        <div style={{ display: 'flex', margin: 10 }}>
            <input 
                type="range"
                min={0}
                max={total}
                value={current}
                onChange={on_change}
            />
            <div>
                {is_time ? time_format(current) : current} / 
                {is_time ? time_format(total) : total}
            </div>
        </div>
    );
}

export default TrackProgressBar;