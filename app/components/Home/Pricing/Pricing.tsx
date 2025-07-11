'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section id="service" className="pt-30 pb-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.h2
          className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Layanan Kami
        </motion.h2>

        <motion.p
          className="text-center text-gray-700 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Kami menyediakan berbagai layanan pengembangan software yang dapat disesuaikan dengan kebutuhan Anda:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
          {/* Kartu Website Development */}
          <motion.div
            className="min-w-[250px] bg-white border border-gray-200 shadow-md rounded-xl p-6 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/images/web.jpg" alt="Website Development" width={420} height={420} className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Website Development</h3>
            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              <li>✅ Desain Responsif</li>
              <li>✅ Admin Panel</li>
              <li>✅ SEO Friendly</li>
              <li>✅ Integrasi API</li>
            </ul>
            <p className="text-blue-900 font-bold mb-1">Rp499.000 - Rp2.000.000</p>
            <p className="text-xs text-red-500 text-center">Harga disesuaikan dengan jumlah halaman, panel admin, dan fitur tambahan.</p>
          </motion.div>

          {/* Kartu Aplikasi Android */}
          <motion.div
            className="min-w-[250px] bg-white border border-gray-200 shadow-md rounded-xl p-6 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image src="/images/mobile.jpg" alt="Aplikasi Android" width={420} height={420} className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Aplikasi Android</h3>
            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              <li>✅ Kotlin</li>
              <li>✅ UI ringan</li>
              <li>✅ SQLite / API</li>
              <li>✅ Desain custom</li>
            </ul>
            <p className="text-blue-900 font-bold mb-1">Rp2.000.000 - Rp5.000.000</p>
            <p className="text-xs text-red-500 text-center">Harga menyesuaikan kompleksitas fitur, tampilan, dan kebutuhan backend.</p>
          </motion.div>

          {/* Kartu Aplikasi Desktop */}
          <motion.div
            className="min-w-[250px] bg-white border border-gray-200 shadow-md rounded-xl p-6 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image src="/images/a.jpg" alt="Aplikasi Desktop" width={420} height={420} className="mb-4 rounded-md" />
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Aplikasi Desktop</h3>
            <ul className="text-sm text-gray-700 mb-4 space-y-1">
              <li>✅ C# & .NET</li>
              <li>✅ CRUD lengkap</li>
              <li>✅ Export PDF/Excel</li>
              <li>✅ Bisa offline</li>
            </ul>
            <p className="text-blue-900 font-bold mb-1">Rp1.500.000 - Rp4.000.000</p>
            <p className="text-xs text-red-500 text-center">Harga tergantung jumlah form, laporan, serta fitur offline atau cetak.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
