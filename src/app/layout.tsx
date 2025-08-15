import I18nProvider from './i18n';
import "./globals.css";
import Sidebar from './Sidebar';
import ThemeProvider from './ThemeProvider';
import BackgroundGlow from './BackgroundGlow';
import LanguageDropdown from '../components/LanguageDropdown';

export const metadata = {
    title: "Josue Ortiz | Full Stack & Mobile Developer Portfolio",
    description: "Josue Ortiz is a Full Stack & Mobile Developer with 8+ years of experience in React, TypeScript, Node.js, Flutter, and AI. View portfolio, projects, and experience in tech companies like AltScore, Gynger, Cargill, and Jobsity.",
    keywords: [
        "Josue Ortiz",
        "Full Stack Developer",
        "Mobile Developer",
        "React Developer",
        "TypeScript Developer",
        "Node.js Developer",
        "Flutter Developer",
        "AI Developer",
        "Software Engineer",
        "Web Developer",
        "Mobile App Developer",
        "Ecuador Developer",
        "Remote Developer",
        "Tech Portfolio",
        "Software Development",
        "Next.js",
        "React Native",
        "PostgreSQL",
        "AWS",
        "Firebase"
    ].join(", "),
    authors: [{ name: "Josue Ortiz" }],
    creator: "Josue Ortiz",
    publisher: "Josue Ortiz",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://josueortiz.dev',
        siteName: 'Josue Ortiz Portfolio',
        title: 'Josue Ortiz | Full Stack & Mobile Developer Portfolio',
        description: 'Josue Ortiz is a Full Stack & Mobile Developer with 8+ years of experience in React, TypeScript, Node.js, Flutter, and AI. View portfolio, projects, and experience.',
        images: [
            {
                url: '/profile.png',
                width: 1200,
                height: 630,
                alt: 'Josue Ortiz - Full Stack & Mobile Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Josue Ortiz | Full Stack & Mobile Developer Portfolio',
        description: 'Josue Ortiz is a Full Stack & Mobile Developer with 8+ years of experience in React, TypeScript, Node.js, Flutter, and AI.',
        images: ['/profile.png'],
        creator: '@hotakutsuki',
    },
    alternates: {
        canonical: 'https://josueortiz.dev',
    },
    category: 'technology',
    classification: 'Portfolio',
    other: {
        'google-site-verification': 'your-verification-code-here',
        'msvalidate.01': 'your-bing-verification-code-here',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="canonical" href="https://josueortiz.dev" />
                <meta name="geo.region" content="EC" />
                <meta name="geo.placename" content="Quito, Ecuador" />
                <meta name="geo.position" content="-0.2299;-78.5249" />
                <meta name="ICBM" content="-0.2299, -78.5249" />
                <meta name="DC.title" content="Josue Ortiz Portfolio" />
                <meta name="DC.creator" content="Josue Ortiz" />
                <meta name="DC.subject" content="Software Development, Web Development, Mobile Development" />
                <meta name="DC.description" content="Full Stack & Mobile Developer Portfolio with 8+ years of experience" />
                <meta name="DC.publisher" content="Josue Ortiz" />
                <meta name="DC.contributor" content="Josue Ortiz" />
                <meta name="DC.date" content="2024" />
                <meta name="DC.type" content="Text" />
                <meta name="DC.format" content="text/html" />
                <meta name="DC.identifier" content="https://josueortiz.dev" />
                <meta name="DC.language" content="en" />
                <meta name="DC.coverage" content="Worldwide" />
                <meta name="DC.rights" content="Copyright Josue Ortiz" />
            </head>
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
