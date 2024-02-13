import {React, useEffect, useState } from 'react';


const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='flex-col w-96 text-center'>
            <div>
                <h1 className='text-3xl text-center'>Login to Your Account</h1>
            </div>
            <div className='flex-col  bg-green-200 mt-10 ml-5 mr-5 p-1 pt-3 shadow-sm rounded-md'>
                <div className='pl-1 pr-1'>
                    <form className='flex justify-between'>
                        <label className='mr-10 self-center' for='email'>Email</label>
                        <input className='p-1' type='text' id='email' name='email'/>
                    </form>
                </div>
                <div className='mt-7 pl-1 pr-1'>
                    <form className='flex justify-between'>
                        <label className='mr-10 self-center' for='password'>Password</label>
                        <input className='p-1' type='text' id='password' name='password'/>
                    </form>
                </div>
                <div className='flex-row mt-3'>
                    <input className='align-middle' type='checkbox' />
                    <label className='align-middle text-sm ml-1' type='text' for='rememberMe'>Remember me</label>
                </div>
                <div className='text-center mt-6 pr-5 pl-5 pb-2'>
                    <button type='button' className='rounded-lg bg-green-300 hover:bg-slate-200 shadow-sm p-1 text-m w-full'>Sign Me In</button>
                </div>
                <div className='flex justify-between p-2 mt-2'>
                    <div className='p-1 hover:underline'>
                        <a href='#'>Forgot password?</a>
                    </div>
                    <div className='p-1 hover:underline'>
                        <a href='#'>Register</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;