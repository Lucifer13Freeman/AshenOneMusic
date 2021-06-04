import { Button, Grid, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TrackPage = () =>
{
    const track: ITrack = {_id: '1', name: 'track 1', artist: 'artist 1', text: 'text 1', listens: 5, audio: 'audio 1', picture: 'picture 1', comments: []};
    const router = useRouter();

    return (
        <MainLayout>
            <Button 
                variant={"outlined"}
                style={{fontSize: 32}}
                onClick={ () => router.push('/tracks') }
            >
                To list
            </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <img src={track.picture} width={200} height={200}/>
                <div style={{ marginLeft: 30 }}>
                    <h1>Track: {track.name}</h1>
                    <h1>Artist: {track.artist}</h1>
                    <h1>Listens: {track.listens}</h1>
                </div>
            </Grid>
            <h1>Text of the track</h1>
            <p>{track.text}</p>
            <h1>Comments</h1>
            <Grid container>
                <TextField
                    label="Your name"
                    fullWidth
                />
                <TextField
                    label="Comment"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Send</Button>
            </Grid>
            <div>
                { track.comments.map(comment => 
                    <div>
                        <div>Author: {comment.username}</div>
                        <div>Comment: {comment.text}</div>
                    </div>
                ) }
            </div>
        </MainLayout>
    );
}

export default TrackPage;