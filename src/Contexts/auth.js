import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }){

    const [user, setUser] = useState({
        nome: 'Samuel',
        uid: '928374982734'
    });

    return(
        <AuthContext.Provider value={ {user} }>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;