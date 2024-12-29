// se debe hacer este componente y no pasarlo directamente al layout como un HOC porque da error debido a que esto se renderiza del lado del cliente no del servidor como el layout
'use client'
import { store } from "./index";
import { Provider } from "react-redux";
interface Props{
    children: React.ReactNode;
}

export const Providers =({children}:Props)=>{
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}