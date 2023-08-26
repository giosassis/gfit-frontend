import React from 'react';
import './style.css'; 

const ConfirmationPage = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="max-w-md bg-white p-8 shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-4">E-mail Confirmado!</h2>
                <p className="text-gray-700">Seu e-mail foi confirmado com sucesso. Você já pode aproveitar todas as funcionalidades da nossa aplicação.</p>
            </div>
        </div>
    );
};

export default ConfirmationPage;
