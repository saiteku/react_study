import React, {ReactNode, useState} from "react";

import contextA from "./type/context";

export const ContextAProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [user, setUser] = useState({name:'太郎', age: 20});
    const [theme, setTheme] = useState('light');

    const contextValue = {
        user,
        setUser,
        theme,
        setTheme
    }

    return (
        <contextA.Provider value={contextValue}>
            {children}
        </contextA.Provider>
    )
};

export default ContextAProvider;