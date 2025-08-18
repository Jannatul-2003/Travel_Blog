import { Suspense } from 'react';
import ResetPasswordClientPage from './reset-password-client-page';

export default function ResetPasswordPage() {
  return (
    // The Suspense boundary tells Next.js to show a fallback while
    // the client component loads, solving the build error.
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <ResetPasswordClientPage />
    </Suspense>
  );
}