'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Lock, MapPin, Building2, Timer, CheckCircle2, Globe2 } from 'lucide-react'
import REAL_COMPANIES from '@/data/companies.json'

// Define the type based on our JSON structure
type Company = {
    name: string
    industry: string
    location: string
    roles: string[]
    verified: boolean
    jobCount: number
}

// Ensure the imported data is treated as our Company type
const COMPANIES = REAL_COMPANIES as Company[]

export default function CompanyGrid() {
    const [industryFilter, setIndustryFilter] = useState("All")

    const filteredCompanies = useMemo(() => {
        return COMPANIES.filter(company => {
            return industryFilter === "All" || company.industry === industryFilter
        })
    }, [industryFilter])

    return (
        <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-utility-black">

            {/* Header & Badges */}
            <div className="mb-12 text-center">
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span className="px-3 py-1 bg-utility-gray border border-utility-border text-xs text-utility-text/70 uppercase tracking-widest rounded flex items-center gap-2">
                        <Timer className="w-3 h-3 text-utility-accent" /> Recently Posted
                    </span>
                    <span className="px-3 py-1 bg-utility-gray border border-utility-border text-xs text-utility-text/70 uppercase tracking-widest rounded flex items-center gap-2">
                        <CheckCircle2 className="w-3 h-3 text-utility-accent" /> Verified Jan 2026
                    </span>
                    <span className="px-3 py-1 bg-utility-gray border border-utility-border text-xs text-utility-text/70 uppercase tracking-widest rounded flex items-center gap-2">
                        <Globe2 className="w-3 h-3 text-gray-500" /> All Across UK
                    </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                    Verified. Active. <span className="text-utility-accent">Real-Time.</span>
                </h2>
                <div className="h-1 w-20 bg-utility-border mx-auto mt-4"></div>
            </div>

            {/* Grid Container */}
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredCompanies.slice(0, 9).map((company, idx) => (
                        <motion.div
                            key={company.name}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="p-6 bg-utility-black border border-utility-border relative group hover:border-utility-accent/50 transition-colors"
                        >
                            <div className="absolute top-4 right-4">
                                <div className={`w-2 h-2 rounded-full ${company.verified ? 'bg-green-500' : 'bg-gray-500'} animate-pulse`}></div>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-white mb-1">{company.name}</h3>
                                <p className="text-xs text-utility-text/50 uppercase tracking-wider">{company.industry}</p>
                            </div>

                            <div className="space-y-3 mb-6">
                                {company.roles.map((role, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-utility-text/80">
                                        <div className="w-1 h-1 bg-utility-border rounded-full"></div>
                                        {role}
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-2 text-xs text-utility-text/40 pt-4 border-t border-utility-border">
                                <MapPin className="w-3 h-3" />
                                {company.location}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* The "Lock" Overlay - Heavy Gradient */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    <div className="absolute bottom-0 left-0 right-0 h-[70%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-full flex flex-col items-center justify-end pb-20 pointer-events-auto">
                        <div className="bg-utility-black border border-utility-border p-8 max-w-md w-full text-center shadow-2xl">
                            <Lock className="w-8 h-8 text-utility-text mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Unlock Full Database</h3>
                            <p className="text-sm text-utility-text/60 mb-6">Access 500+ verified direct employer leads.</p>
                            <button className="w-full py-4 bg-utility-accent text-white font-bold uppercase tracking-wider hover:bg-red-600 transition-colors">
                                Unlock Access
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
