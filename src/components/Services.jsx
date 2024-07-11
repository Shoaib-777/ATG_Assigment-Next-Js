import { IoPeopleSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { SlBasket } from "react-icons/sl";
import { FaRegCalendarCheck } from "react-icons/fa";
function Services() {
    return (
        <>
        <section className='flex items-center justify-center w-screen'>
    <div className='flex items-center justify-center w-full max-w-7xl px-3 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-5 place-items-center py-16 md:grid-cols-2'>
            <div className='group flex flex-col rounded-md py-7 px-6 gap-y-5 items-start justify-center w-full max-w-[30rem] border-[1px] border-solid border-[#08090A] hover:bg-[#8064A2]'>
                <div className='flex items-center justify-start gap-x-3.5'>
                    <IoPeopleSharp alt="loading error" className='h-10 w-10 text-[#8064A2] group-hover:text-white' />
                    <h3 className='font-semibold text-xl group-hover:text-white'>People</h3>
                </div>
                <div className='text-[#08090A] font-base group-hover:text-white'>
                    Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.
                </div>
                <button className='py-1 px-5 rounded-md border-2 border-solid border-[#8064A2] text-[#8064A2] group-hover:border-white group-hover:text-white'>Connect</button>
            </div>

            <div className='group flex flex-col rounded-md py-7 px-6 gap-y-5 items-start justify-center max-w-[30rem] w-full border-[1px] border-solid border-[#08090A] hover:bg-[#77933C] '>
                <div className='flex items-center justify-start gap-x-3.5'>
                    <FaLocationDot alt="loading error" className='h-10 w-10 text-[#77933C] group-hover:text-white' />
                    <h3 className='font-semibold text-xl group-hover:text-white'>Place</h3>
                </div>
                <div className='text-[#08090A] font-base group-hover:text-white'>
                    Find a class, school, playground, auditorium, studio, shop, or an event venue. Book a slot at venues that allow booking through hobbycue.
                </div>
                <button className='py-1 px-5 rounded-md border-2 border-solid border-[#77933C] text-[#77933C] group-hover:border-white group-hover:text-white'>Meet up</button>
            </div>

            <div className='group hover:bg-[#C0504D] flex flex-col rounded-md py-7 px-6 gap-y-5 items-start justify-center max-w-[30rem] w-full border-[1px] border-solid border-[#08090A]'>
                <div className='flex items-center justify-start gap-x-3.5'>
                    <SlBasket alt="loading error" className='h-10 w-10 text-[#C0504D] group-hover:text-white' />
                    <h3 className='font-semibold text-xl group-hover:text-white'>Product</h3>
                </div>
                <div className='text-[#08090A] font-base group-hover:text-white'>
                    Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.
                </div>
                <button className='py-1 px-5 rounded-md border-2 border-solid border-[#C0504D] text-[#C0504D] group-hover:border-white group-hover:text-white'>Get it</button>
            </div>

            <div className='group hover:bg-[#0096C8] flex flex-col rounded-md py-7 px-6 gap-y-5 items-start justify-center max-w-[30rem] w-full border-[1px] border-solid border-[#08090A]'>
                <div className='flex items-center justify-start gap-x-3.5'>
                    <FaRegCalendarCheck alt="loading error" className='h-10 w-10 text-[#0096C8] group-hover:text-white' />
                    <h3 className='font-semibold text-xl group-hover:text-white'>Program</h3>
                </div>
                <div className='text-[#08090A] font-base group-hover:text-white'>
                    Find events, meetups, and workshops related to your hobby. Register or buy tickets online.
                </div>
                <button className='py-1 mt-5 px-5 rounded-md border-2 border-solid border-[#0096C8] text-[#0096C8] group-hover:border-white group-hover:text-white'>Attend</button>
            </div>
        </div>
    </div>
</section>

        </>
    )
}
export default Services