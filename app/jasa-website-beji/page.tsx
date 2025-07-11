import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Jasa Pembuatan Website Beji - Devnusa',
    description: 'Devnusa melayani jasa pembuatan website profesional di Beji, Pasuruan. Cocok untuk UMKM, bisnis, dan instansi.',
    keywords: ['jasa website beji', 'jasa pembuatan website beji', 'devnusa'],
    openGraph: {
        title: 'Jasa Website Beji - Devnusa',
        description: 'Butuh jasa pembuatan website di beji? Devnusa hadir untuk Anda!',
        url: 'https://devnusa.vercel.app/jasa-website-beji',
        type: 'website',
    },
};

export default function JasaWebsitebejiPage() {
    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold">Jasa Website Beji</h1>
            <p className="mt-4">Devnusa menyediakan jasa pembuatan website untuk UMKM, toko online, dan perusahaan di Beji dan sekitarnya.</p>

            <h2 className="text-2xl mt-6">Kenapa Harus Devnusa?</h2>
            <ul className="list-disc pl-6 mt-2">
                <li>Desain modern dan responsif</li>
                <li>Harga terjangkau</li>
                <li>Tim profesional dan berpengalaman</li>
            </ul>
        </main>
    );
}
