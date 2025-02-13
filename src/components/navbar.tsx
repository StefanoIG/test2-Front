import React, { useEffect, useState } from 'react';
import { ApiConfig } from '../Config';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    // Verificar si hay un token en sessionStorage al cargar el componente
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    // Función para cerrar sesión
    const handleLogout = async () => {
        try {
            const api = new ApiConfig('logout');
            await api.fetchData('POST', null, true); // Petición al endpoint /logout con el token

            // Borrar el token de sessionStorage
            sessionStorage.removeItem('token');

            // Mostrar mensaje de éxito
            Swal.fire({
                icon: 'success',
                title: 'Logged out successfully',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });

            navigate('/login'); // Redirigir al usuario a la página de login
        } catch (error) {
            // Mostrar mensaje de error si ocurre un problema al cerrar sesión
            Swal.fire({
                icon: 'error',
                title: 'Error during logout',
                text: 'Something went wrong. Please try again.',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
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
            <header className="mx-auto w-full max-w-screen-md border bg-white border-gray-100 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg transition-all duration-200">
                <div className="px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <a aria-current="page" className="flex items-center" href="/">
                                <img className="h-7 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Website Logo" />
                                <p className="sr-only">Web 2</p>
                            </a>
                        </div>
                        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                            <a aria-current="page" className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="/">Inicio #1</a>
                            <a className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900" href="/">Home</a>
                        </div>
                        <div className="flex items-center justify-end gap-3">
                            {isAuthenticated ? (
                                <>
                                    <a className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex" href="/profile">Profile</a>
                                    <button
                                        onClick={handleLogout}
                                        className="inline-flex items-center justify-center rounded-xl bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                    >
                                        Cerrar Sesion
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex" href="/register">Registrarse</a>
                                    <a className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" href="/login">Iniciar Sesion</a>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;