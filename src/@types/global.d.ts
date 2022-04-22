import { RouteComponentProps } from "react-router";

export interface IPropsWithRouter<Params = {}, StaticContext = {}, State = {}> extends RouteComponentProps<Params, StaticContext, State> { }

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    islogin: boolean
  }
}