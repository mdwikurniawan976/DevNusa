'use client';
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsApp = () => {
    const phoneNumber = "62895371927060";
    const message = "Halo kak, saya ingin konsultasi mengenai pembuatan aplikasi/website.";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-10 z-[999] bg-blue-500 hover:bg-blue-600 text-white p-3 sm:p-5 rounded-full shadow-xl transition-all duration-300"
            aria-label="Konsultasi via WhatsApp"
        >
            <FaWhatsapp className="text-2xl sm:text-4xl" />
        </a>
    );
};

export default FloatingWhatsApp;
