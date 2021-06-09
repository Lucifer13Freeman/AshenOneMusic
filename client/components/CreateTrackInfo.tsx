import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { UseInput } from "../hooks/useInput";


const CreateTrackInfo: React.FC = () =>
{
    const name = UseInput('');
    const artist = UseInput('');
    const text = UseInput('');
    
    return (
        <Grid 
            container 
            direction="column" 
            style={{ padding: 20 }}
        >
            <TextField
                {...name}
                style={{ marginTop: 20 }}
                label={"Track name"}
            />
            <TextField
                {...artist}
                style={{ marginTop: 20 }}
                label={"Author name"}
            />
            <TextField
                {...text}
                style={{ marginTop: 20 }}
                label={"Track text"}
                multiline
                rows={3}
            />
        </Grid>
    );
}

export default CreateTrackInfo;