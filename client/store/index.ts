import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
import { AnyAction, applyMiddleware, createStore } from "redux";
import { RootState, reducer } from "./reducers";
import thunk, { ThunkDispatch } from "redux-thunk";


const makeStore: MakeStore<RootState | any> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<RootState | any>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;