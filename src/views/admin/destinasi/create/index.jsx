import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'services/config';
import { useNavigate } from 'react-router-dom';

const TambahDestinasi = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        location: '',
        category: '',
        image: null,
    });

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, image: file }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('location', formData.location);
            formDataToSend.append('category', formData.category);
            formDataToSend.append('image', formData.image);

            await axios.post(`${BASE_URL}/destinations`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setSuccessMessage('Destination created successfully!');
            setErrorMessage(null);

            setTimeout(() => {
                navigate('/admin/destinasi');
            }, 1000);

            // Handle success or navigate to another page
        } catch (error) {
            console.error('Error creating destinations:', error.response);
            setErrorMessage('Failed to create destinations. Please try again.');
            setSuccessMessage(null);
            // Handle error, show a message, etc.
        }
    };

    return (
        <div>
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full px-3 mb-6  mx-auto">
                    {successMessage && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Success!</strong>
                            <span className="block sm:inline"> {successMessage}</span>
                        </div>
                    )}

                    {errorMessage && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Error!</strong>
                            <span className="block sm:inline"> {errorMessage}</span>
                        </div>
                    )}
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                        <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                            <section class="container p-5 mx-auto">
                                <form onSubmit={handleSubmit}>
                                    {/* Add your form fields here */}
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Nama Destinasi
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="mt-1 p-2 w-full border rounded-md"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Deskripsi
                                        </label>
                                        <input
                                            type="text"
                                            id="description"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            className="mt-1 p-2 w-full border rounded-md"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                                            Kategory
                                        </label>
                                        <input
                                            type="text"
                                            id="category"
                                            name="category"
                                            value={formData.category}
                                            onChange={handleChange}
                                            className="mt-1 p-2 w-full border rounded-md"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                                            Lokasi
                                        </label>
                                        <input
                                            type="text"
                                            id="location"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="mt-1 p-2 w-full border rounded-md"
                                        />
                                    </div>

                                    {/* Add other form fields as needed */}

                                    <div className="mb-4">
                                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                                            Galeri Berita
                                        </label>
                                        <input
                                            type="file"
                                            id="image"
                                            name="image"
                                            onChange={handleFileChange}
                                            accept="image/*"
                                            className="mt-1 p-2 w-full border rounded-md"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                    >
                                        Buat Destinasi
                                    </button>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default TambahDestinasi;
