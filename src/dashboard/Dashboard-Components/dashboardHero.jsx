import React from 'react'

const dashboardHero = () => {
    return (
        <section class="text-white min-h-screen flex items-center">
            <div class="px-6 py-12 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                <div class="flex flex-col justify-center text-center lg:text-left mt-10 md:mt-20 lg:mt-0">
                    <h1 class="mb-6 text-3xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-slate-100 leading-tight">
                        Ubah uang saku harian

                        <span class="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                            menjadi tiket menuju impian masa depanmu
                        </span>
                    </h1>

                    <p class="mb-10 text-base font-normal text-slate-400 md:text-xl lg:pr-12 leading-relaxed">
                        Kelola uang sakumu dengan AI dan simulasi seru. Karena setiap Rupiah adalah investasi untuk impianmu.
                    </p>

                    <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                        <button type="button" class="inline-flex items-center justify-center text-[#0F172A] bg-emerald-400 hover:bg-emerald-500 font-bold rounded-full text-base px-8 py-4 transition-all duration-300 shadow-lg shadow-emerald-500/20">
                            Mulai Sekarang
                        </button>

                        <button type="button" class="inline-flex items-center justify-center text-slate-200 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 font-medium rounded-full text-base px-8 py-4 transition-all duration-300">
                            Pelajari Fitur
                        </button>
                    </div>
                </div>

                <div class="hidden lg:flex justify-center items-center">
                    <div class="w-full h-80 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-3xl border border-slate-800 flex items-center justify-center backdrop-blur-sm">
                        <p class="text-slate-500 italic">Preview Dashboard Sakuku</p>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default dashboardHero
