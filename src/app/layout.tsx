import { Providers } from '@/components/providers/Providers';
import './globals.css';
import { OnboardingProvider } from '@/contexts/onboarding-context';

export const metadata = {
  title: 'VFX Academy',
  description: 'Learn VFX from industry experts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <OnboardingProvider>
          <Providers>
            {children}
          </Providers>
        </OnboardingProvider>
      </body>
    </html>
  );
}