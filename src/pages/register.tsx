import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { ApiConfig } from '../Config';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password_confirmation: '', // Cambiado a password_confirmation para Laravel
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Validations for Name and Lastname: disallow numbers
        if ((name === 'firstName' || name === 'lastName') && /\d/.test(value)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: 'Numbers are not allowed in this field.',
            }));
        } else {
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: '',
            })); 
        }

        // Update form data
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Actualización del regex para aceptar caracteres especiales
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        let valid = true;
        let newErrors = { ...errors };

        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format.';
            valid = false;
        }

        if (!passwordRegex.test(formData.password)) {
            newErrors.password = 'Password must contain at least 8 characters, including a letter, a number, and a special character.';
            valid = false;
        }

        if (formData.password !== formData.password_confirmation) {
            newErrors.password_confirmation = 'Passwords do not match.';
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            try {
                // Submit form data using ApiConfig
                const api = new ApiConfig('register');
                const response = await api.fetchData('POST', {
                    name: formData.firstName,
                    lastname: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                    password_confirmation: formData.password_confirmation, // Enviar password_confirmation
                });

                // Show success toast with SweetAlert2
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });

                // Optionally, clear the form fields after success
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                });
            } catch (error) {
                // Show error toast with SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: 'Please try again.',
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
        <div>
            <div className="area">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <br />
            <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
                <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Registrate con los mejores!</h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="firstName" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Nombre:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        {errors.firstName && <span className="text-red-500 text-xs mt-1">{errors.firstName}</span>}
                    </div>

                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="lastName" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Apellido:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        {errors.lastName && <span className="text-red-500 text-xs mt-1">{errors.lastName}</span>}
                    </div>

                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
                    </div>

                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="password" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password}</span>}
                    </div>

                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="password_confirmation" className="text-sm text-gray-700 dark:text-gray-200 mr-2">Repita Contraseña:</label>
                        <input
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            value={formData.password_confirmation}
                            onChange={handleChange}
                            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        {errors.password_confirmation && <span className="text-red-500 text-xs mt-1">{errors.password_confirmation}</span>}
                    </div>

                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Registrarse</button>
                </form>

                <div className="mt-4 text-center">
                    <span className="text-sm text-gray-500 dark:text-gray-300">Ya tienes una cuenta? </span>
                    <a href="/login" className="text-blue-500 hover:text-blue-600">Inicia Sesion</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
