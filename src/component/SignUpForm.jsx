import {useState} from 'react';
import {useForm} from 'react-hook-form';

function SignUpForm() {
    const {register, handleSubmit, formState: {errors} } = useForm();
    function onSubmit(data) {
        alert(`Email: ${data.email}, Password: ${data.password}`);
    }
    return (
        <div style={{width: '400px', margin: '2rem auto'}}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div style= {{marginBottom: '1rem'}}>
                    <label>Email</label>
                    <input type="email" placeholder="Email..." {...register("email", { required: true })} />
                </div>
                <div style= {{marginBottom: '1rem'}}>
                    <label>Password</label>
                    <input type="password" placeholder="Password..." {...register("password", { required: "Password is required", minLength: {
value: 6, message: "Password must be at least 6 characters long"
                    },
                    maxLength: {
                        value: 15,
                        message: "Password must be at most 15 characters long"
                    }
                })} />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
    
}
export default SignUpForm;