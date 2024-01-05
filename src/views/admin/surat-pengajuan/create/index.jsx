import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'services/config';
import { useNavigate } from 'react-router-dom';

const BuatSuratPengajuan = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        requester_name: '',
        requester_nik: '',
        letter_type: '',
        purpose: '',
        pdf_file: null,
        status: '',
    });

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, pdf_file: file }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('requester_name', formData.requester_name);
            formDataToSend.append('requester_nik', formData.requester_nik);
            formDataToSend.append('letter_type', formData.letter_type);
            formDataToSend.append('purpose', formData.purpose);
            formDataToSend.append('pdf_file', formData.pdf_file);
            formDataToSend.append('status', formData.status);

            await axios.post(`${BASE_URL}/letter-requests`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setSuccessMessage('Letter Request created successfully!');
            setErrorMessage(null);

            setTimeout(() => {
                navigate('/admin/surat-pengajuan');
            }, 1000);

            // Handle success or navigate to another page
        } catch (error) {
            console.error('Error creating Letter Request:', error.response);
            setErrorMessage('Failed to create Letter Request. Please try again.');
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
                                        <label htmlFor="requester_name" className="block text-sm font-medium text-gray-700">
                                            Nama
                                        </label>
                                        <input
                                            type="text"
                                            id="requester_name"
                                            name="requester_name"
                                            value={formData.requester_name}
                                            onChange={handleChange}
                                            className="mt-1 p-2 w-full border rounded-md"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="requester_nik" className="block text-sm font-medium text-gray-700">
                                            NIK
                                        </label>
                                        <input
                                            type="text"
                                            id="requester_nik"
                                            name="requester_nik"
                                            value={formData.requester_nik}
                                            onChange={handleChange}
                                            className="mt-1 p-2 w-full border rounded-md"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
                                            Tujuan surat
                                        </label>
                                        <input
                                            type="text"
                                            id="purpose"
                                            name="purpose"
                                            value={formData.purpose}
                                            onChange={handleChange}
                                            className="mt-1 p-2 w-full border rounded-md"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="letter_type" className="block text-sm font-medium text-gray-700">
                                            Tipe surat
                                        </label>
                                        <input
                                            type="text"
                                            id="letter_type"
                                            name="letter_type"
                                            value={formData.letter_type}
                                            onChange={handleChange}
                                            className="mt-1 p-2 w-full border rounded-md"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                            Status
                                        </label>
                                        <input
                                            disabled
                                            type="text"
                                            id="status"
                                            name="status"
                                            value="PENDING"
                                            onChange={handleChange}
                                            className="mt-1 p-2 w-full border rounded-md"
                                        />
                                    </div>

                                    {/* Add other form fields as needed */}

                                    <div className="mb-4">
                                        <label htmlFor="pdf_file" className="block text-sm font-medium text-gray-700">
                                            File Surat (PDF)
                                        </label>
                                        <input
                                            type="file"
                                            id="pdf_file"
                                            name="pdf_file"
                                            onChange={handleFileChange}
                                            accept="pdf"
                                            className="mt-1 p-2 w-full border rounded-md"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                                    >
                                        Buat Surat
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

export default BuatSuratPengajuan;
