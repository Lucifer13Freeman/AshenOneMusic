import { Button, Grid, TextField } from "@material-ui/core";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { UseInput } from "../../hooks/useInput";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TrackPage = ({ server_track }: any) =>
{
    const [track, set_track] = useState<ITrack>(server_track);

    const router = useRouter();

    const username = UseInput('');
    const text = UseInput('');

    const add_comment = async () => 
    {
        try 
        {
            const response = await axios.post(process.env.MAIN_URL + 'tracks/comment',
            {
                username: username.value,
                text: text.value,
                trackId: track._id
            });

            set_track({ ...track, comments: [...track.comments, response.data] });
        } 
        catch (e) 
        {
            console.log(e);
        }
    }

    return (
        <MainLayout 
            title={'AshenOne Music - ' + track.name + ' - ' + track.artist}
            keywords={'AshenOne, Music, ' + track.name + ', ' + track.artist}
        >
            <Button 
                variant={"outlined"}
                style={{fontSize: 32}}
                onClick={ () => router.push('/tracks') }
            >
                To list
            </Button>
            <Grid container style={{ margin: '20px 0' }}>
                <img src={process.env.MAIN_URL + track.picture} width={200} height={200}/>
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
                    {...username}
                    label="Your name"
                    fullWidth
                />
                <TextField
                    {...text}
                    label="Comment"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button onClick={add_comment}>Send</Button>
            </Grid>
            <div>
                { track.comments.map((comment: any) => 
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

export const getServerSideProps: GetServerSideProps = async ({ params }: any) => 
{
    const response = await axios.get(process.env.MAIN_URL + 'tracks/' + params.id)

    return {
        props: {
            server_track: response.data
        }
    }
}