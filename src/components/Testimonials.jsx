

import React from "react";


function Testimonials() {
    return (
        <>
        <section className="flex items-center justify-center w-screen">
    <div className="flex items-center justify-center w-full max-w-4xl px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center place-items-center py-16 md:grid-cols-2">
            <div className="flex flex-col rounded-md py-7 px-6 gap-y-5 items-start justify-center max-w-5xl w-full bg-[#F7F5F9]">
                <div className="flex items-center justify-start gap-x-3.5">
                    <img
                        src="/Images/quote.png"
                        alt="Quote icon"
                        className="h-10 w-10"
                    />
                    <h3 className="font-semibold text-xl">
                        Testimonials
                    </h3>
                </div>
                <p className="text-[#939CA3] font-base">
                    In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com provide a great service by helping me connect, communicate, and exchange ideas with other dancers. It also offers the benefit of finding quality products and services recommended by the hobbycue community. Having discussions, gaining visibility, and safely exploring various hobbies and activities in my city, all under one roof, is an excellent idea, and I highly recommend it.
                </p>
                <div className="flex flex-col-reverse gap-y-3.5 items-center justify-center w-full sm:flex-row">
                    <div className="flex items-center justify-between w-full py-1.5 px-2 rounded-md bg-[#CCC1DA]">
                        <div className="p-1 rounded-full bg-white cursor-pointer">
                            <img
                                src="Images/play_arrow_black_24dp 1.png"
                                alt="Play button"
                                className="h-4 w-4"
                            />
                        </div>
                        <div className="relative rounded-full object-cover">
                            <img
                                src="/Images/Ellipse 12.png"
                                alt="Profile"
                                className="h-10 w-10"
                            />
                            <img
                                src="/Images/mic_black_24dp 1.png"
                                alt="Microphone"
                                className="absolute h-4 w-4 bottom-0 -left-1.5"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-x-3.5 w-full sm:w-96 sm:justify-end">
                        <img
                            src="/Images/Ellipse 12.png"
                            alt="Profile"
                            className="h-16 w-16 rounded-full"
                        />
                        <div className="flex flex-col items-start justify-center">
                            <h3 className="text-base font-semibold text-[#8064A2]">
                                Shubha Nagarajan
                            </h3>
                            <h5 className="text-sm italic text-[#0096C8]">
                                Classical Dancer
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        </>
    );
}

export default Testimonials;
