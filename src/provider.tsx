import { Provider } from "react-redux";
import { store } from "./store/index";
import { ReactNode ,FC} from 'react';

type ProviderProps = {
    children: ReactNode
}


export const Providers: FC<ProviderProps> = ({children}) =>  {
    return <Provider store={store}>{children}</Provider>
}