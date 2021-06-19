import { Box, Button, Card, Grid, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TrackList from "../../components/TrackList";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MainLayout from "../../layouts/MainLayout";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetch_tracks, search_tracks } from "../../store/actions-creators/track";


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
                    await dispatch(search_tracks(e.target.value));
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
                    <TrackList tracks={tracks}/>
                </Card>
            </Grid>
        </MainLayout>
    );
}

export default Index;


export const getServerSideProps = wrapper.getServerSideProps(
    store => async () =>
    {
        const dispatch = store.dispatch as NextThunkDispatch;
        await dispatch(fetch_tracks());

        return { props: {} }
    }
);


/*export const getServerSideProps: GetServerSideProps = async () => 
{
    const res = await axios.get('http://localhost:5000/tracks/');

    return {
        props: {
            fetch_tracks: res.data
        }
    }
}*/

/*export const getServerSideProps = async (store: any) => async ({}) =>
{
    const dispatch = store.dispatch as NextThunkDispatch;

    await dispatch(await fetch_tracks());

    //return { props: {} }
}*/

/*export const getServerSideProps = async ({ store }: any) => 
{
    //const data = await fetch_tracks();
    //await store.dispatch(fetch_tracks());

    const dispatch = store.dispatch as NextThunkDispatch;

    await dispatch(await fetch_tracks());

    return { props: {} }     
}*/

/*export const getServerSideProps = async (store: Store<RootState, AnyAction>) => 
{
    //const data = await fetch_tracks();
    //await store.dispatch(fetch_tracks());

    const dispatch = store.dispatch as NextThunkDispatch;

    //await dispatch(await fetch_tracks());

    //store.dispatch();

    await fetch_tracks();

    return { props: {} }     
}*/

//export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({ store }: Store<RootState, AnyAction>) =>
//export const getServerSideProps = wrapper.getServerSideProps(async (context: Context): Promise<GetServerSidePropsCallback<any, any>> =>
/*export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) =>
{
    const dispatch = store.dispatch as NextThunkDispatch;

    await dispatch(await fetch_tracks());
});*/


//const GetServerSidePropsContext = async () => {}

/*export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) =>
{
    const dispatch = store.dispatch as NextThunkDispatch;

    await dispatch(await fetch_tracks());
});*/

/*export const getServerSideProps = wrapper.getServerSideProps(async (store) => async ({req, res}) =>
{
    const dispatch = store.dispatch as NextThunkDispatch;

    await dispatch(await fetch_tracks());
});*/

//export const getServerSideProps(async (store) => ({req, res, ...}) => {}

/*export const getServerSideProps: GetServerSideProps = async ({ store }: any) => 
{
    const dispatch = store.dispatch as NextThunkDispatch;

    let res = await dispatch(await fetch_tracks());

    return {
        props: {
            tracks: res
        }
    }
}*/

/*export const getServerSideProps: GetServerSideProps = async (context) => 
{
    const { store }: any = context;
    const dispatch = store.dispatch as NextThunkDispatch;

    await dispatch(await fetch_tracks());

    return { props: {} }
}
*/
//export const getServerSideProps = wrapper.getServerSideProps(async (store) => async ({}) =>
/*export const getServerSideProps = async (store: any) => async ({}) =>
{
    const dispatch = store.dispatch as NextThunkDispatch;

    await dispatch(await fetch_tracks());

    /*return { 
        props: await dispatch(await fetch_tracks())
    }*/

//}//);

/*export async function getServerSideProps() 
{
    const res = await axios.get(process.env.MAIN_URL + 'tracks');
    const data = await res.data
  
    return { props: { data } }
}*/

/*export async function getServerSideProps(context: any) 
{
    const res = await fetch(process.env.MAIN_URL + 'tracks')
    const data = await res.json()
  
    if (!data) 
    {
      return {
        notFound: true,
      }
    }
  
    return {
      props: {}
    }
}*/

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
