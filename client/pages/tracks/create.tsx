import { Button, Grid } from "@material-ui/core";
import { useState } from "react";
import CreateTrackInfo from "../../components/CreateTrackInfo";
import FileUpload from "../../components/FileUpload";
import StepWrapper from "../../components/StepWrapper";
import MainLayout from "../../layouts/MainLayout";

const Create = () =>
{
    const [active_step, set_active_step] = useState(1);
    const [picture, set_picture] = useState(null);
    const [audio, set_audio] = useState(null);

    const next = () =>
    {
        if (active_step !== 3) set_active_step(prev => prev + 1)
    }

    const back = () =>
    {
        set_active_step(prev => prev - 1)
    }

    return (
        <MainLayout>
            <StepWrapper active_step={active_step}>
                {active_step === 1 &&
                    <CreateTrackInfo/>
                }
                {active_step === 2 &&
                    <FileUpload
                        set_file={set_picture}
                        accept="image/*"
                    >
                        <Button>Upload picture</Button>
                    </FileUpload>                
                }
                {active_step === 3 &&
                    <FileUpload
                    set_file={set_audio}
                    accept="audio/*"
                >
                    <Button>Upload audio</Button>
                </FileUpload> 
                }
            </StepWrapper>
            <Grid container justify='space-between'>
                <Button disabled={active_step === 1} onClick={back}>Back</Button>
                <Button onClick={next}>Next</Button>
            </Grid>
        </MainLayout>
    );
}

export default Create;