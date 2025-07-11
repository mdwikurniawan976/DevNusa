'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const portfolioItems = [
    {
        title: 'Lelah-o-Meter',
        desc: 'Aplikasi web untuk memeriksa kondisi kesehatan seperti kadar gula, alkohol, dan lainnya secara cepat melalui form digital.',
        img: '/images/lelah.png',
        demoUrl: null,
    },
    {
        title: 'Company Profile - Solusi Pertanian Modern',
        desc: 'Website company profile yang menampilkan layanan dan produk teknologi untuk mendukung pertanian modern dan berkelanjutan.',
        img: '/images/innovatek.png',
        demoUrl: 'https://innovatek.vercel.app',
    },
    {
        title: 'Ezy Kasir',
        desc: 'Aplikasi kasir serbaguna berbasis Android menggunakan Kotlin dan SQLite, cocok untuk UMKM dengan fitur transaksi dan laporan.',
        img: '/images/ezykasir.jpg',
        demoUrl: null,
    },
    {
        title: 'RANGGAKOCOMOTO',
        desc: 'Aplikasi desktop kasir khusus toko optik, dilengkapi dengan manajemen penjualan, stok kacamata, dan pencetakan struk otomatis.',
        img: '/images/ranggakocomoto.png',
        demoUrl: null,
    },
];
  
  
    const Portfolio = () => {
        return (
            <section id="portfolio" className="py-20">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Portfolio Proyek
                    </motion.h2>
                    <motion.p
                        className="text-center text-gray-500 mb-10"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Beberapa aplikasi dan website yang pernah kami kembangkan.
                    </motion.p>

                    {/* Grid layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {portfolioItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={400}
                                    height={200}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                    <p className="text-gray-600 text-sm mt-2">{item.desc}</p>

                                    {item.demoUrl ? (
                                        <a
                                            href={item.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
                                        >
                                            Live Demo
                                        </a>
                                    ) : (
                                        <span className="inline-block mt-4 px-4 py-2 text-sm font-medium text-gray-500 bg-gray-200 rounded-md cursor-not-allowed">
                                            Demo Tidak Tersedia
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        );
    };

    export default Portfolio;
