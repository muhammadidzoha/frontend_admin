import React, { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";
import moment from 'moment';
import axios from 'axios';

import { BASE_URL } from 'services/config';

const Berita = () => {
    const [letterRequest, setLetterRequest] = useState([]);
    const [letterRequestDeleted, setLetterRequestDeleted] = useState(false);

    useEffect(() => {
        const fetchLetterRequests = async () => {
            try {
                const response = await fetch(`${BASE_URL}/letter-requests`);
                if (!response.ok) {
                    throw new Error('Failed to fetch letter request data');
                }
                const data = await response.json();
                setLetterRequest(data);
            } catch (error) {
                console.error('Error fetching letter request data:', error);
            }
        };

        fetchLetterRequests();
    }, []);

    useEffect(() => {
        if (letterRequestDeleted) {
            alert('Letter Request deleted successfully!');
            setLetterRequestDeleted(false); 
            window.location.reload(); 
        }
    }, [letterRequestDeleted]);

    const handleDelete = (letterRequestsId) => {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus surat pengajuan ini?');
        if (confirmDelete) {
            deleteNews(letterRequestsId, setLetterRequestDeleted);
        }
    };


    const deleteNews = async (letterRequestsId, setLetterRequestDeleted) => {
        try {
            await axios.delete(`${BASE_URL}/letter-requests/${letterRequestsId}`);
            console.log('Letter Request deleted successfully!');
            setLetterRequestDeleted(true);
        } catch (error) {
            console.error('Error deleting Letter Request:', error.response);
        }
    };

    const handleDownload = async (letterRequestId) => {
        try {
            const response = await fetch(`${BASE_URL}/letter-requests/download/${letterRequestId}`);

            if (response.ok) {
                const blob = await response.blob();

                const url = window.URL.createObjectURL(blob);

                const a = document.createElement('a');
                a.href = url;
                a.download = `Surat_Pengajuan_${letterRequestId}.pdf`;

                a.type = 'application/pdf';

                a.dataset.downloadurl = [a.type, a.download, a.href].join(':');

                document.body.appendChild(a);

                a.click();

                document.body.removeChild(a);

                window.URL.revokeObjectURL(url);
            } else {
                console.error(`Failed to download letter request with ID: ${letterRequestId}`);
            }
        } catch (error) {
            console.error('Error downloading letter request:', error);
        }
    };

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'bg-yellow-500 text-white'; 
            case 'reject':
                return 'bg-red-500 text-white'; 
            case 'accept':
                return 'bg-green-500 text-white'; 
            default:
                return 'bg-gray-500 text-white'; 
        }
    };


    return (
        <div>
            <div className="flex flex-wrap -mx-3 mb-5">
                <div className="w-full max-w-full px-3 mb-6  mx-auto">
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                        <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                            <section class="container p-5 mx-auto">
                                <div class="sm:flex sm:items-center sm:justify-between">
                                    <div>
                                        <div class="flex items-center gap-x-3">
                                            <h2 class="text-lg font-medium text-gray-800 dark:text-white">Surat Pengajuan</h2>

                                            {/* <span class="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">240 vendors</span> */}
                                        </div>

                                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">These companies have purchased in the last 12 months.</p>
                                    </div>

                                    <div class="flex items-center mt-4 gap-x-3">
                                        <Link to="/admin/buat-surat-pengajuan" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>

                                            <span>Buat Surat Pengajuan</span>
                                        </Link>
                                    </div>
                                </div>

                                <div class="flex flex-col mt-6">
                                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                            <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                                    <thead class="bg-gray-50 dark:bg-gray-800">
                                                        <tr>
                                                            <th scope="col" class="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                <button class="flex items-center gap-x-3 focus:outline-none">
                                                                    <span>Nama pengaju</span>

                                                                    <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                                        <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                                        <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                                                    </svg>
                                                                </button>
                                                            </th>

                                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                Tipe Surat
                                                            </th>

                                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                Tujuan 
                                                            </th>

                                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Status</th>
                                                            <th scope="col" class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Dibuat pada</th>

                                                            <th scope="col" class="relative py-3.5 px-4">
                                                                <span class="sr-only">Edit</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                        {letterRequest.map((item) => (
                                                            <tr>
                                                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                                    <div>
                                                                        <h2 class="font-medium text-gray-800 dark:text-white ">{item.requester_name}</h2>
                                                                        <p class="text-sm font-normal text-gray-600 dark:text-gray-400">{item.requester_nik}</p>
                                                                    </div>
                                                                </td>
                                                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                                    <div class="inline py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                        {item.letter_type}
                                                                    </div>
                                                                </td>
                                                                <td class="px-4 py-4 text-sm whitespace-nowrap">
                                                                    <div>
                                                                        <h4 class="text-gray-700 dark:text-gray-200">{item.purpose}</h4>
                                                                        <p class="text-gray-500 dark:text-gray-400"></p>
                                                                    </div>
                                                                </td>
                                                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                                    <div className={`inline px-3 py-2 text-xs font-bold uppercase rounded-lg transition duration-200 ${getStatusColor(item.status)}`}>
                                                                        {item.status}
                                                                    </div>
                                                                </td>

                                                                <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                                    <div class="inline py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                        {moment(item.submitted_at).format('DD MMMM, YYYY')}
                                                                    </div>
                                                                </td>

                                                                <td class="py-4 text-sm whitespace-nowrap flex items-center gap-4">
                                                                    <Link to={`/admin/edit-surat-pengajuan/${item.request_id}`} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                                        Edit
                                                                    </Link>
                                                                    <button onClick={() => handleDelete(item.request_id)} className="font-medium text-red-600 dark:text-red-500 hover:underline">
                                                                        Hapus
                                                                    </button>
                                                                    <button onClick={() => handleDownload(item.request_id)} className="font-medium text-green-600 dark:text-green-500 hover:underline">
                                                                        Download
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div class="mt-6 sm:flex sm:items-center sm:justify-between ">
                                    <div class="text-sm text-gray-500 dark:text-gray-400">
                                        Page <span class="font-medium text-gray-700 dark:text-gray-100">1 of 10</span>
                                    </div>

                                    <div class="flex items-center mt-4 gap-x-4 sm:mt-0">
                                        <a href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                            </svg>

                                            <span>
                                                previous
                                            </span>
                                        </a>

                                        <a href="#" class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                                            <span>
                                                Next
                                            </span>

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div> */}
                            </section>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Berita;
