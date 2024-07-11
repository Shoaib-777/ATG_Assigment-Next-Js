
function AddNewService() {
    return (
        <>
        <section className="flex items-center justify-center w-screen bg-[#F7FDFF]">
    <div className="flex items-center justify-center w-full max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center place-items-center py-16 md:grid-cols-2">
            <div className="flex flex-col rounded-md py-7 px-6 gap-y-5 items-start justify-center max-w-5xl w-full border-[1px] border-solid border-[#939CA3] bg-white">
                <div className="flex items-center justify-start gap-x-3.5">
                    <img src="/Images/Add.png" alt="Add icon" className="h-10 w-10" />
                    <h3 className="font-semibold text-xl">
                        Add your own
                    </h3>
                </div>
                <p className="text-[#939CA3] font-base">
                    Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page.
                </p>
                <button className="py-1 px-5 rounded-md border-2 border-solid border-[#8064A2] text-[#8064A2]">
                    Add new
                </button>
            </div>
        </div>
    </div>
</section>

        </>
    );
}

export default AddNewService