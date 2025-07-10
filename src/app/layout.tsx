import I18nProvider from './i18n';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from './Sidebar';
import ThemeProvider from './ThemeProvider';
import BackgroundGlow from './BackgroundGlow';
import LanguageDropdown from '../components/LanguageDropdown';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Josue Ortiz | Portfolio",
    description: "Remote Full Stack & Mobile Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <I18nProvider>
                    <ThemeProvider>
                        <BackgroundGlow />
                        <LanguageDropdown />
                        <style>{`
                        @media (max-width: 768px) {
                            main.main-content { margin-left: 0 !important; }
                        }
                    `}</style>
                        <div style={{ display: 'flex', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
                            <Sidebar />
                            <main className="main-content" style={{ flex: 1, marginLeft: 400, padding: '3rem 3rem', minHeight: '100vh' }}>
                                {children}
                            </main>
                        </div>
                    </ThemeProvider>
                </I18nProvider>
            </body>
        </html>
    );
}
