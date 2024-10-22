import React, { useEffect, useState } from 'react';
import InputField from '../components/InputField';
import { ApiConfig } from '../Config';
import Swal from 'sweetalert2';

const ProfilePage: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [userId, setUserId] = useState<number | null>(null); // Para almacenar el ID del usuario desde /me
    const [isEditing, setIsEditing] = useState(false); // Para manejar el estado de edición
    const [loading, setLoading] = useState(true);

    // Cargar los datos del perfil al montar el componente
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const api = new ApiConfig('me');
                const response = await api.fetchData('POST', null, true); // Hacer el fetch a /me con POST

                // Actualizar el estado con los datos obtenidos y el userId
                setFormData({
                    firstName: response.name,
                    lastName: response.lastname,
                    email: response.email,
                    password: '', // El campo de password estará vacío por defecto
                    confirmPassword: '',
                });
                setUserId(response.id); // Guardar el userId del usuario
                setLoading(false);
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error fetching profile data',
                    text: 'Unable to load profile information. Please try again later.',
                });
            }
        };

        fetchProfileData();
    }, []);

    // Manejar cambios en los inputs
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Validación: no permitir números en nombre y apellido
        if ((name === 'firstName' || name === 'lastName') && /\d/.test(value)) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid input',
                text: 'Names cannot contain numbers.',
            });
            return;
        }

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Manejar envío de los datos actualizados
    const handleSubmit = async () => {
        if (formData.password !== formData.confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Passwords do not match',
                text: 'Please make sure the passwords match.',
            });
            return;
        }

        if (!userId) {
            Swal.fire({
                icon: 'error',
                title: 'User ID not found',
                text: 'Unable to update profile without a valid user ID.',
            });
            return;
        }

        const updatedData = {
            name: formData.firstName,
            lastname: formData.lastName,
            email: formData.email,
            ...(formData.password && { password: formData.password }), // Solo incluir la contraseña si ha sido modificada
        };

        try {
            const api = new ApiConfig(`users/${userId}`); // Asegurarse de que la URL incluya el userId
            await api.fetchData('PUT', updatedData, true); // Hacer el fetch para actualizar datos usando PUT

            Swal.fire({
                icon: 'success',
                title: 'Profile updated successfully',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });

            setIsEditing(false); // Deshabilitar los campos después de la actualización
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error updating profile',
                text: 'Please try again.',
            });
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

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
            
            <section className="py-10 my-auto ">
                <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4 ">
                    <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center bg-white">
                        <div className="">
                            <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2">
                                Profile
                            </h1>
                            <h2 className="text-grey text-sm mb-4">Update Profile Information</h2>

                            <form>
                                {/* First Name */}
                                <InputField
                                    label="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    disabled={!isEditing} // Deshabilitado hasta que se haga clic en Edit
                                />

                                {/* Last Name */}
                                <InputField
                                    label="Last Name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    disabled={!isEditing} // Deshabilitado hasta que se haga clic en Edit
                                />

                                {/* Email */}
                                <InputField
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    disabled={!isEditing} // Deshabilitado hasta que se haga clic en Edit
                                />

                                {/* Password */}
                                {isEditing && (
                                    <>
                                        <InputField
                                            label="New Password"
                                            name="password"
                                            type="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Password (Leave empty to keep current password)"
                                        />

                                        {/* Confirm Password */}
                                        <InputField
                                            label="Confirm Password"
                                            name="confirmPassword"
                                            type="password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            placeholder="Confirm Password"
                                        />
                                    </>
                                )}
                            </form>

                            {/* Botones fuera del formulario */}
                            <div className="flex justify-between mt-4">
                                {isEditing ? (
                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="w-full rounded-lg bg-blue-500 text-white font-semibold p-4"
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setIsEditing(true)}
                                        className="w-full rounded-lg bg-green-500 text-white font-semibold p-4"
                                    >
                                        Edit Profile
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfilePage;