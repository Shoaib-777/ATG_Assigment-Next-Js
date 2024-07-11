'use client'
import { useState } from 'react'




function Landing() {
    const [active, setActive] = useState({
        signIn: true,
        joinIn: false
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Switching = (value) => {
        if (value == 'signIn') {
            setActive({
                signIn: true,
                joinIn: false
            })
        }
        else if (value == 'joinIn') {
            setActive({
                signIn: false,
                joinIn: true
            })
        }
    }

    return (
        <>
        <section className="flex items-center justify-center w-screen section-bg bg-[#F7F5F9]">
    <div className="flex items-center justify-center w-full max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-y-16 items-center justify-between w-full py-16 gap-x-24 xl:flex-row xl:items-start">
            <div className="flex flex-col items-start gap-y-8 justify-center w-full">
                <h1 className="text-xl font-bold tracking-wide italic sm:text-3xl">
                    Explore your <i className="text-[#0096C8]">hobby</i> or <i className="text-[#8064A2]">passion</i>
                </h1>
                <p className="text-base font-light">
                    Sign in to interact with a community of fellow hobbyists and an ecosystem of experts, teachers, suppliers, classes, workshops, and places to practice, participate, or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
                </p>
                <p className="hidden md:block text-base font-light">
                    If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services, or events. Hop on your hobbyhorse and enjoy the ride.
                </p>
                <div className="flex items-center justify-center w-full md:block">
                    <img src="/Images/Group 27.png" alt="Illustration of hobbies" className="mx-auto" />
                </div>
            </div>

            <div className="flex flex-col items-center justify-end w-full gap-y-10 max-w-md">
                <div className="flex text-xl items-center justify-start gap-x-5 w-full">
                    <button
                        className={`cursor-pointer font-semibold ${active.signIn ? "text-[#8064A2]" : "text-[#939CA3]"}`}
                        onClick={() => Switching("signIn")}>
                        Sign In
                    </button>
                    <button
                        className={`cursor-pointer font-semibold ${active.joinIn ? "text-[#8064A2]" : "text-[#939CA3]"}`}
                        onClick={() => Switching("joinIn")}>
                        Join In
                    </button>
                </div>

                {active.signIn ? (
                    <div className="flex flex-col w-full gap-y-7 items-center justify-center">
                        <div className="flex flex-col items-center justify-center w-full gap-y-5">
                            <button className="flex items-center justify-center rounded-md w-full border-2 border-[#8064A2] border-solid py-1.5 px-3 cursor-pointer">
                                <img src="/images/Google.png" alt="Google logo" className="h-5 w-5" />
                                <span className="font-semibold text-black w-full text-center">Continue with Google</span>
                            </button>
                            <button className="flex items-center justify-center rounded-md w-full border-2 border-[#8064A2] border-solid py-1.5 px-3 cursor-pointer">
                                <img src="/images/Facebook.png" alt="Facebook logo" className="h-5 w-5" />
                                <span className="font-semibold text-black w-full text-center">Continue with Facebook</span>
                            </button>
                        </div>
                        <div className="flex items-center justify-center font-semibold w-full">
                            <span className="bg-[#939CA3] h-[0.1rem] w-full"></span>
                            <span className="block w-full text-sm text-center mb-1.5">or connect with</span>
                            <span className="bg-[#939CA3] h-[0.1rem] w-full"></span>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full gap-y-5">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                                placeholder="Email"
                                className="border-none rounded-sm w-full outline-[#8064A2] px-2.5 py-1.5"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                                placeholder="Password"
                                className="border-none rounded-sm w-full outline-[#8064A2] px-2.5 py-1.5"
                            />
                        </div>
                        <div className="flex items-center justify-between w-full gap-y-5">
                            <div className="flex items-center justify-start gap-x-2">
                                <input type="checkbox" className="mt-0.5 text-xl" />
                                <span className="text-sm">Remember me</span>
                            </div>
                            <div className="flex items-center justify-start gap-x-2">
                                <img src="/Images/lock_black_24dp 1.png" alt="Lock icon" className="h-5 w-5" />
                                <span className="text-sm cursor-pointer">Forgot password?</span>
                            </div>
                        </div>
                        <button className="flex items-center justify-center rounded-md w-full border-2 border-[#8064A2] border-solid py-1.5 px-3 cursor-pointer">
                            Continue
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col w-full gap-y-7 items-center justify-center">
                        <div className="flex flex-col items-center justify-center w-full gap-y-5">
                            <button className="flex items-center justify-center rounded-md w-full border-2 border-[#8064A2] border-solid py-1.5 px-3 cursor-pointer">
                                <img src="/images/google.png" alt="Google logo" className="h-5 w-5" />
                                <span className="font-semibold text-black w-full text-center">Continue with Google</span>
                            </button>
                            <button className="flex items-center justify-center rounded-md w-full border-2 border-[#8064A2] border-solid py-1.5 px-3 cursor-pointer">
                                <img src="/images/facebook.png" alt="Facebook logo" className="h-5 w-5" />
                                <span className="font-semibold text-black w-full text-center">Continue with Facebook</span>
                            </button>
                        </div>
                        <div className="flex items-center justify-center font-semibold w-full">
                            <span className="bg-[#939CA3] h-[0.1rem] w-full"></span>
                            <span className="block w-full text-sm text-center mb-1.5">or connect with</span>
                            <span className="bg-[#939CA3] h-[0.1rem] w-full"></span>
                        </div>
                        <div className="flex flex-col items-center justify-center w-full gap-y-5">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                                placeholder="Email"
                                className="border-none rounded-sm w-full outline-[#8064A2] px-2.5 py-1.5"
                            />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                                placeholder="Password"
                                className="border-none rounded-sm w-full outline-[#8064A2] px-2.5 py-1.5"
                            />
                        </div>
                        <div className="flex items-center justify-start w-full text-sm flex-wrap text-left">
                            By continuing, you agree to our{" "}
                            <a href="#" className="text-black font-semibold inline mx-1">Terms of Service</a> and{" "}
                            <a href="#" className="text-black font-semibold inline mx-1">Privacy Policy</a>.
                        </div>
                        <button className="flex items-center text-white bg-[#8064A2] justify-center rounded-md w-full border-2 border-[#8064A2] border-solid py-1.5 px-3 cursor-pointer">
                            Agree and Continue
                        </button>
                    </div>
                )}
            </div>
            <div className="flex items-center justify-center w-full md:hidden">
                <img src="/Images/lock_black_24dp 1.png" alt="Lock icon" />
            </div>
        </div>
    </div>
</section>

        </>
    );
}

export default Landing
