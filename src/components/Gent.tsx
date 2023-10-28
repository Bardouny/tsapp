import * as React from 'react';

type GenP = {
    name:string
    children : React.ReactNode
}


function Gen({name ,children}:GenP) {
    return ( 
        <>
        <h1>Welcome : {name}</h1>
        {children}
        </>
     );
}

export default Gen;