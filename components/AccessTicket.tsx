"use client";

import { Plane, QrCode } from "lucide-react";

export default function AccessTicket() {
    return (
        <div className="w-full max-w-md mx-auto my-12 filter drop-shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Ticket Container */}
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row border border-gray-200">

                {/* Left Side (Main Info) */}
                <div className="flex-1 p-6 relative">
                    <div className="absolute top-0 bottom-0 left-0 w-2 bg-utility-accent"></div>

                    <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center gap-2 text-utility-accent">
                            <Plane className="w-5 h-5 transform -rotate-45" />
                            <span className="font-bold tracking-widest text-xs uppercase">Sponsorship Air</span>
                        </div>
                        <span className="bg-utility-black text-white px-2 py-1 text-[10px] font-bold rounded uppercase">
                            First Class
                        </span>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Passenger</p>
                            <p className="text-lg font-bold text-utility-text">Future UK Employee</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">From</p>
                                <p className="font-bold text-utility-text">Ghosted</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">To Destination</p>
                                <p className="font-bold text-utility-accent text-xl">HIRED</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Access Link</p>
                            <p className="font-mono text-xs bg-gray-50 p-1 rounded text-utility-subtext truncate">
                                notion.so/sponsorship-intelligence...
                            </p>
                        </div>
                    </div>

                    {/* Perforated Line Decoration */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-gray-100 rounded-l-full translate-x-[50%] z-10"></div>
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-gray-100 rounded-r-full -translate-x-[50%] z-10"></div>
                </div>

                {/* Right Side (Stub/QR) */}
                <div className="bg-gray-50 p-6 flex flex-col justify-center items-center border-l-2 border-dashed border-gray-200 relative min-w-[120px]">
                    <QrCode className="w-16 h-16 text-utility-black mb-2 opacity-80" />
                    <p className="text-[10px] text-gray-400 text-center">SCAN FOR<br />ENTRY</p>
                    <p className="text-[10px] text-utility-accent font-bold mt-2">ADMIT ONE</p>
                </div>

            </div>
            <p className="text-center text-xs text-gray-400 mt-4 font-medium">NOTE: Don't share this. This is your advantage.</p>
        </div>
    );
}
