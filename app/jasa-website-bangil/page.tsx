import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Jasa Pembuatan Website Bangil - Devnusa',
    description: 'Devnusa melayani jasa pembuatan website profesional di Bangil, Pasuruan. Cocok untuk UMKM, bisnis, dan instansi.',
    keywords: ['jasa website bangil', 'jasa pembuatan website Bangil', 'devnusa'],
    openGraph: {
        title: 'Jasa Website Bangil - Devnusa',
        description: 'Butuh jasa pembuatan website di Bangil? Devnusa hadir untuk Anda!',
        url: 'https://devnusa.vercel.app/jasa-website-bangil',
        type: 'website',
    },
};

export default function JasaWebsiteBangilPage() {
    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold">Jasa Website Bangil</h1>
            <p className="mt-4">Devnusa menyediakan jasa pembuatan website untuk UMKM, toko online, dan perusahaan di Bangil dan sekitarnya.</p>

            <h2 className="text-2xl mt-6">Kenapa Harus Devnusa?</h2>
            <ul className="list-disc pl-6 mt-2">
                <li>Desain modern dan responsif</li>
                <li>Harga terjangkau</li>
                <li>Tim profesional dan berpengalaman</li>
            </ul>
        </main>
    );
}
