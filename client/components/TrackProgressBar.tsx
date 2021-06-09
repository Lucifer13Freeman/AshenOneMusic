import { Grid, IconButton, TextField } from "@material-ui/core";
import { Pause, PlayArrow } from "@material-ui/icons";
import React from "react";
import styles from "../styles/Player.module.scss";
import { ITrack } from "../types/track";

interface TrackProgressBarProps
{
    current: number;
    total: number;
    on_change: (e:any) => void;
}

const TrackProgressBar: React.FC<TrackProgressBarProps> = ({ current: current, total: total, on_change }) =>
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
            <div>{current} / {total}</div>
        </div>
    );
}

export default TrackProgressBar;