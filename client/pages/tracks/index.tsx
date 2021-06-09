import { Box, Button, Card, Grid, TextField } from "@material-ui/core";
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { Context, GetServerSidePropsCallback } from "next-redux-wrapper";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction, Store } from "redux";
import TrackList from "../../components/TrackList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MainLayout from "../../layouts/MainLayout";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetch_tracks, search_tracks } from "../../store/actions-creators/track";
import { RootState } from "../../store/reducers";

const Index = () =>
{
    const router = useRouter();
    const { tracks, error } = useTypedSelector(state => state.track);
    const [query, set_query] = useState<string>('');
    const dispatch = useDispatch() as NextThunkDispatch;
    const [timer, set_timer]: any = useState(null);

    const search = async (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        set_query(e.target.value);

        if (timer) clearTimeout(timer);

        set_timer(
            setTimeout(
                async () => 
                {
                    await dispatch(await search_tracks(e.target.value));
                }, 500)
        );
    }

    if (error) return <MainLayout>
                        <h1>{error}</h1>
                    </MainLayout>

    return (
        <MainLayout title={'AshenOne Music - Track List'}>
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
                    <TextField
                        fullWidth
                        value={query}
                        onChange={search}
                    />
                    <TrackList tracks = {tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
}

export default Index;

//export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({ store }: Store<RootState, AnyAction>) =>
export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) =>
{
    const dispatch = store.dispatch as NextThunkDispatch;

    await dispatch(await fetch_tracks());
});

/*export const getServerSideProps: GetServerSideProps = async ({ store }: any) => 
{

    const dispatch = store.dispatch as NextThunkDispatch;

    await dispatch(await fetch_tracks());
}*/

/*export async function getServerSideProps({store}:any) 
{
    const dispatch = store.dispatch as NextThunkDispatch;;

    await dispatch(fetch_tracks());
}*/
