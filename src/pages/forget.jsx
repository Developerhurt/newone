import { useState } from "react";
import Head from "next/head";
import { Mail, Lock, Eye, EyeOff, CheckCircle } from "lucide-react";

export default function ForgotPassword() {
	const [email, setEmail] = useState("");
	const [otp, setOtp] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [step, setStep] = useState(1); // 1: email, 2: OTP, 3: new password
	const [otpVerified, setOtpVerified] = useState(false);
	const [passwordError, setPasswordError] = useState("");

	const handleEmailSubmit = async (e) => {
		e.preventDefault();
		if (!email) return;
		setIsSubmitting(true);
		try {
			// Simulate request
			await new Promise((r) => setTimeout(r, 1000));
			setStep(2);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleOtpSubmit = async (e) => {
		e.preventDefault();
		if (!otp) return;
		setIsSubmitting(true);
		try {
			// Simulate OTP verification
			await new Promise((r) => setTimeout(r, 1000));
			setOtpVerified(true);
			setStep(3);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handlePasswordSubmit = async (e) => {
		e.preventDefault();
		if (newPassword !== confirmPassword) {
			setPasswordError("Passwords do not match");
			return;
		}
		if (newPassword.length < 6) {
			setPasswordError("Password must be at least 6 characters");
			return;
		}
		setIsSubmitting(true);
		try {
			// Simulate password reset
			await new Promise((r) => setTimeout(r, 1000));
			alert("Password reset successfully!");
			// Reset form
			setEmail("");
			setOtp("");
			setNewPassword("");
			setConfirmPassword("");
			setStep(1);
			setOtpVerified(false);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<Head>
				<title>Forgot Password</title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-6 px-4">
				<div className="w-full max-w-md">
					{/* Form Card */}
					<div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
						{/* Header */}
						<div className="text-center mb-8">
							<div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
								<Lock className="h-8 w-8 text-white" />
							</div>
							<h1 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
								{step === 1 && "Forgot Password?"}
								{step === 2 && "Verify OTP"}
								{step === 3 && "Reset Password"}
							</h1>
							<p className="text-slate-600 text-sm" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
								{step === 1 && "Enter your email to receive a verification code"}
								{step === 2 && "Enter the 6-digit code sent to your email"}
								{step === 3 && "Create a new password for your account"}
							</p>
						</div>

						{/* Step 1: Email */}
						{step === 1 && (
							<form onSubmit={handleEmailSubmit} className="space-y-6">
								<div>
									<label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
										Email Address
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
											<Mail className="h-5 w-5 text-slate-400" />
										</div>
										<input
											type="email"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											required
											placeholder="Enter your email address"
											className="w-full pl-12 pr-4 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all duration-200 hover:bg-white"
										/>
									</div>
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
									style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}
								>
									{isSubmitting ? "Sending..." : "Send Verification Code"}
								</button>
							</form>
						)}

						{/* Step 2: OTP */}
						{step === 2 && (
							<form onSubmit={handleOtpSubmit} className="space-y-6">
								<div>
									<label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
										Verification Code
									</label>
									<div className="relative">
										<input
											type="text"
											placeholder="Enter 6-digit code"
											value={otp}
											onChange={(e) => setOtp(e.target.value)}
											className="w-full px-4 py-2.5 border-2 rounded-2xl text-sm placeholder-slate-400 text-slate-900 focus:outline-none focus:ring-0 transition-all duration-200 text-center tracking-widest font-mono border-slate-200 bg-white hover:border-blue-300 focus:border-blue-400"
											maxLength="6"
										/>
										{otpVerified && (
											<div className="absolute right-3 top-1/2 -translate-y-1/2">
												<div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
													<CheckCircle className="w-4 h-4 text-white" />
												</div>
											</div>
										)}
									</div>
									<p className="text-xs text-slate-500 mt-2 text-center" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
										Code sent to {email}
									</p>
								</div>

								<button
									type="submit"
									disabled={isSubmitting || otp.length !== 6}
									className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
									style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}
								>
									{isSubmitting ? "Verifying..." : "Verify Code"}
								</button>
							</form>
						)}

						{/* Step 3: New Password */}
						{step === 3 && (
							<form onSubmit={handlePasswordSubmit} className="space-y-6">
								<div>
									<label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
										New Password
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
											<Lock className="h-5 w-5 text-slate-400" />
										</div>
										<input
											type={showPassword ? 'text' : 'password'}
											value={newPassword}
											onChange={(e) => setNewPassword(e.target.value)}
											required
											placeholder="Enter new password"
											className="w-full pl-12 pr-12 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all duration-200 hover:bg-white"
										/>
										<button
											type="button"
											className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
											onClick={() => setShowPassword(!showPassword)}
										>
											{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
										</button>
									</div>
								</div>

								<div>
									<label className="block text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
										Confirm Password
									</label>
									<div className="relative">
										<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
											<Lock className="h-5 w-5 text-slate-400" />
										</div>
										<input
											type={showConfirmPassword ? 'text' : 'password'}
											value={confirmPassword}
											onChange={(e) => setConfirmPassword(e.target.value)}
											required
											placeholder="Confirm new password"
											className="w-full pl-12 pr-12 py-2.5 border border-slate-200 rounded-xl text-sm placeholder-slate-500 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50 transition-all duration-200 hover:bg-white"
										/>
										<button
											type="button"
											className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
											onClick={() => setShowConfirmPassword(!showConfirmPassword)}
										>
											{showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
										</button>
									</div>
									{passwordError && (
										<p className="text-red-500 text-xs mt-1" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
											{passwordError}
										</p>
									)}
								</div>

								<button
									type="submit"
									disabled={isSubmitting || !newPassword || !confirmPassword}
									className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2.5 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
									style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}
								>
									{isSubmitting ? "Resetting..." : "Reset Password"}
								</button>
							</form>
						)}

						{/* Footer */}
						<div className="mt-8 text-center">
							<p className="text-slate-500 text-sm" style={{ fontFamily: 'Atyp Display, ui-sans-serif, system-ui, sans-serif' }}>
								Remember your password? <a href="/login" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">Sign in</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}


