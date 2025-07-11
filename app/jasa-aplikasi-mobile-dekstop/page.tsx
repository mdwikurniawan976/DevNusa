// app/jasa-aplikasi-mobile-desktop/page.tsx

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Jasa Aplikasi Mobile & Desktop di Beji, Bangil, Pasuruan - Devnusa',
    description: 'Devnusa melayani jasa pembuatan aplikasi mobile dan desktop untuk UMKM, sekolah, dan instansi di Beji, Bangil, dan Pasuruan.',
    keywords: ['jasa aplikasi mobile beji', 'jasa aplikasi desktop bangil', 'jasa pembuatan aplikasi pasuruan', 'software UMKM', 'jasa devnusa'],
    openGraph: {
        title: 'Jasa Aplikasi Mobile dan Desktop - Devnusa',
        description: 'Pembuatan aplikasi Android dan desktop untuk bisnis lokal Beji, Bangil, dan Pasuruan.',
        url: 'https://devnusa.vercel.app/jasa-aplikasi-mobile-desktop',
        type: 'website',
    },
};

export default function JasaAplikasiPage() {
    return (
        <main className="p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">
                Jasa Aplikasi Mobile & Desktop Beji, Bangil, Pasuruan
            </h1>

            <p className="mb-4">
                Devnusa menyediakan layanan pembuatan aplikasi mobile (Android) dan desktop (Windows) yang
                disesuaikan dengan kebutuhan bisnis lokal di wilayah Beji, Bangil, dan Pasuruan. Cocok untuk
                UMKM, lembaga pendidikan, instansi pemerintahan, hingga toko dan kasir modern.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Layanan Kami</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Aplikasi Android (native Kotlin)</li>
                <li>Software kasir dan pendataan desktop (C#, .NET)</li>
                <li>Sistem laporan sekolah, absensi, dan nilai</li>
                <li>Integrasi database SQLite, SQL Server, dan API</li>
                <li>Support UI/UX modern dan ringan</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Wilayah Layanan</h2>
            <p>
                Kami melayani pengembangan aplikasi di:
                <br />✅ Beji, Kabupaten Pasuruan
                <br />✅ Bangil dan sekitarnya
                <br />✅ Kota/Kabupaten Pasuruan
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Kenapa Pilih Devnusa?</h2>
            <ul className="list-disc pl-5 space-y-2">
                <li>Berpengalaman di bidang lomba & proyek UMKM</li>
                <li>Bisa request desain + fungsi sesuai kebutuhan</li>
                <li>Gratis konsultasi & revisi awal</li>
            </ul>

            <p className="mt-6">
                Hubungi kami sekarang dan dapatkan aplikasi berkualitas untuk bisnis atau instansi Anda di
                Beji, Bangil, dan Pasuruan.
            </p>
        </main>
    );
}
