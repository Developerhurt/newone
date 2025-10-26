import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  LogOut, 
  CheckCircle, 
  ArrowLeft,
  Loader2
} from "lucide-react"

export default function LogoutPage() {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(true);
  const [logoutComplete, setLogoutComplete] = useState(false);

  useEffect(() => {
    // Simulate logout process
    const logoutProcess = async () => {
      try {
        // Clear any stored authentication data
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        localStorage.removeItem('userType');
        sessionStorage.clear();
        
        // Clear any cookies (if using cookies for auth)
        document.cookie.split(";").forEach((c) => {
          const eqPos = c.indexOf("=");
          const name = eqPos > -1 ? c.substr(0, eqPos) : c;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        });

        // Simulate API call to logout endpoint
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setLogoutComplete(true);
        setIsLoggingOut(false);
        
        // Redirect to login page after 2 seconds
        setTimeout(() => {
          router.push('/login');
        }, 2000);
        
      } catch (error) {
        console.error('Logout error:', error);
        // Even if there's an error, redirect to login
        setTimeout(() => {
          router.push('/login');
        }, 1000);
      }
    };

    logoutProcess();
  }, [router]);

  const handleGoToLogin = () => {
    router.push('/login');
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white rounded-lg border border-slate-200 shadow-lg">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            {isLoggingOut ? (
              <Loader2 className="h-8 w-8 text-blue-600 animate-spin" />
            ) : logoutComplete ? (
              <CheckCircle className="h-8 w-8 text-green-600" />
            ) : (
              <LogOut className="h-8 w-8 text-slate-600" />
            )}
          </div>
          <CardTitle className="text-xl font-semibold text-slate-900">
            {isLoggingOut ? 'Signing Out...' : logoutComplete ? 'Successfully Signed Out' : 'Sign Out'}
          </CardTitle>
          <CardDescription className="text-slate-600">
            {isLoggingOut 
              ? 'Please wait while we sign you out of your account.' 
              : logoutComplete 
                ? 'You have been successfully signed out. Redirecting to login page...'
                : 'Are you sure you want to sign out?'
            }
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {isLoggingOut && (
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 text-sm text-slate-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <p className="mt-2 text-xs text-slate-500">Clearing session data...</p>
            </div>
          )}
          
          {logoutComplete && (
            <div className="text-center space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <p className="text-sm text-green-700">
                  ✓ Session cleared successfully
                </p>
              </div>
              <p className="text-sm text-slate-600">
                You will be redirected to the login page automatically.
              </p>
            </div>
          )}
          
          {!isLoggingOut && !logoutComplete && (
            <div className="space-y-3">
              <p className="text-sm text-slate-600 text-center">
                This will end your current session and you'll need to sign in again to access your account.
              </p>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={handleGoBack}
                  className="flex-1"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button 
                  onClick={() => setIsLoggingOut(true)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
            </div>
          )}
          
          {logoutComplete && (
            <div className="text-center">
              <Button 
                onClick={handleGoToLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Go to Login Page
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
