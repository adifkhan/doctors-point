import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const location = useLocation();

    if (loading || sending) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='container'>

            <div className='w-50 mx-auto text-center my-3 p-5 border border-2'>
                <h3 className='text-danger'>Your email is not verified</h3>
                <h4>Please verify your email to proceed</h4>

                <button className='btn btn-dark mt-12'
                    onClick={async () => {
                        await sendEmailVerification();
                    }}>Re-send verification email</button>
            </div>
        </div>
    }
    return children;
};

export default RequireAuth;