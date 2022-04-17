import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../../Firebase/firebase.init';

const Home = () => {

    return (
        <div>
            <h2 className='text-danger'>Home</h2>
            <button onClick={()=>signOut(auth)}>SIgnout</button>
        </div>
    );
};

export default Home;