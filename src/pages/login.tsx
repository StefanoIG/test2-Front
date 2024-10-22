import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { ApiConfig } from '../Config';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation logic
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let valid = true;
        let newErrors = { ...errors };

        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format.';
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = 'Password is required.';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            try {
                const api = new ApiConfig('login');
                const response = await api.fetchData('POST', {
                    email: formData.email,
                    password: formData.password,
                    rememberMe: formData.rememberMe,
                });

                // Store access token in sessionStorage
                sessionStorage.setItem('token', response.access_token);

                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });

                // Optionally, redirect after successful login
                // window.location.href = '/dashboard'; // Example of redirecting after login
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Invalid email or password.',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
            }
        }
    };

    return (
        <div className="h-screen flex justify-center items-center w-full">
            <form onSubmit={handleSubmit}>
                <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-xl max-w-sm">
                    <div className="space-y-4">
                        <h1 className="text-center text-2xl font-semibold text-gray-600">Iniciar Sesion</h1>
                        <hr />
                        <div className="flex items-center border-2 py-2 px-3 rounded-md mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input
                                className="pl-2 outline-none border-none w-full"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                            />
                        </div>
                        {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}

                        <div className="flex items-center border-2 py-2 px-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                className="pl-2 outline-none border-none w-full"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Contraseña"
                                required
                            />
                        </div>
                        {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
                    </div>


                    <button type="submit" className="mt-6 w-full shadow-xl bg-gradient-to-tr from-blue-600 to-red-400 hover:to-red-700 text-indigo-100 py-2 rounded-md text-lg tracking-wide transition duration-1000">
                        Iniciar Sesion
                    </button>

                    <hr />
                    <div className="flex justify-center items-center mt-4">
                        <p className="inline-flex items-center text-gray-700 font-medium text-xs text-center">
                            <span className="ml-2">Todavia no tienes cuenta?<a href="/register" className="text-xs ml-2 text-blue-500 font-semibold">Register now &rarr;</a></span>
                        </p>
                    </div>
                </div>
                <div className="pt-6 text-base font-semibold leading-7">
                    <p className="font-sans text-red-500 text-md hover:text-red-800">
                        <a href="/" className="absolute">&larr; Inicio</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
