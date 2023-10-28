import * as React from 'react';

type GenP = {
    name:string,
}


function Gen({name}:GenP) {
    return ( 
        <h1>Welcome : {name}</h1>
     );
}

export default Gen;