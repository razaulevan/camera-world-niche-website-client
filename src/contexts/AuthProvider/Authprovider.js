import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';

export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}

        </AuthContext.Provider>
    );
};

export default Authprovider;