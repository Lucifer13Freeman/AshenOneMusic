import { Grid, TextField } from "@material-ui/core";
import React from "react";


const CreateTrackInfo: React.FC = () =>
{
    return (
        <Grid 
            container 
            direction="column" 
            style={{ padding: 20 }}
        >
            <TextField
                style={{ marginTop: 20 }}
                label={"Track name"}
            />
            <TextField
                style={{ marginTop: 20 }}
                label={"Author name"}
            />
            <TextField
                style={{ marginTop: 20 }}
                label={"Track text"}
                multiline
                rows={3}
            />
        </Grid>
    );
}

export default CreateTrackInfo;