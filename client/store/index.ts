import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, createStore, Store } from "redux";
import { RootState, reducer } from "./reducers";
import thunk, { ThunkDispatch } from "redux-thunk";


//const makeStore: MakeStore<Store<RootState, AnyAction>> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

//export const wrapper = createWrapper<Store<RootState, AnyAction>>(makeStore, {debug: true});

const makeStore: MakeStore<Store<RootState>> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
//export type NextThunkDispatch = ThunkDispatch<Store<RootState>, any, AnyAction>;