import I18nProvider from './i18n';
import "./globals.css";
import Sidebar from './Sidebar';
import ThemeProvider from './ThemeProvider';
import BackgroundGlow from './BackgroundGlow';
import LanguageDropdown from '../components/LanguageDropdown';

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
                        @media (max-width: 1023px) {
                            main.main-content { margin-left: 0 !important; }
                        }
                    `}</style>
                        <div style={{ display: 'flex', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
                            <Sidebar />
                            <main className="min-h-screen flex-1 md:p-8 p-4 lg:ml-[256px]">
                                {children}
                            </main>
                        </div>
                    </ThemeProvider>
                </I18nProvider>
            </body>
        </html>
    );
}
