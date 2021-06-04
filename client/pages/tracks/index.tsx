import { Box, Button, Card, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import TrackList from "../../components/TrackList";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const Index = () =>
{
    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', name: 'track 1', artist: 'artist 1', text: 'text 1', listens: 5, audio: 'audio 1', picture: 'picture 1', comments: []},
        {_id: '2', name: 'track 2', artist: 'artist 2', text: 'text 2', listens: 5, audio: 'audio 2', picture: 'picture 2', comments: []},
        {_id: '3', name: 'track 3', artist: 'artist 3', text: 'text 3', listens: 5, audio: 'audio 3', picture: 'picture 3', comments: []}
    ];

    return (
        <MainLayout>
            <Grid container  justify='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container  justify='space-between'>
                            <h1>Track list</h1>
                            <Button
                                onClick={ () => router.push('tracks/create') }
                            >
                                Upload
                            </Button>
                        </Grid>
                    </Box>
                    <TrackList tracks = {tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
}

export default Index;