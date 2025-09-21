import React, { useState, useEffect } from 'react';
import { JOB_OPENINGS } from '../../constants';
import { JobOpening } from '../../types';
import LoadingSpinner from '../LoadingSpinner';
import MagicBento from '../MagicBento';

const renderJobCard = (job: JobOpening) => (
    <div className="flex flex-col h-full text-white">
        <div className="p-5 bg-[var(--brand-red)]/80 rounded-t-lg">
            <h3 className="text-2xl font-bangers">{job.title}</h3>
            <p className="font-semibold">{job.location}</p>
        </div>
        <div className="p-5 flex-grow space-y-4">
            <div>
                <h4 className="font-bold text-lg text-gray-100 border-b-2 border-[var(--brand-yellow)] pb-1 mb-2">Jawatan Ditawarkan</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    {job.positions.map((pos, i) => <span key={i} className="bg-yellow-200 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{pos}</span>)}
                </div>
            </div>
            <div>
                <h4 className="font-bold text-lg text-gray-100 border-b-2 border-[var(--brand-yellow)] pb-1 mb-2">Kelebihan</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 text-sm">
                    {job.benefits.map((ben, i) => <li key={i}>{ben}</li>)}
                </ul>
            </div>
        </div>
        <div className="bg-black/20 p-4 mt-auto rounded-b-lg">
             <a 
                href={`https://wa.me/${job.contact}?text=Hello!%20I'm%20interested%20in%20the%20job%20opening%20at%20${job.location}.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-green-500 text-white font-bold py-3 px-4 rounded-md hover:bg-green-600 transition-colors duration-300 text-lg"
            >
                Hubungi Kami Segera
            </a>
        </div>
    </div>
);


const CareersPage: React.FC = () => {
    const [jobs, setJobs] = useState<JobOpening[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setJobs(JOB_OPENINGS);
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-center mb-12">
                <h1 className="text-5xl md:text-7xl font-bangers text-[var(--brand-yellow)]" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>
                    JOIN OUR TEAM
                </h1>
                <p className="text-md text-gray-600 dark:text-gray-400 mt-2">Be a part of the Ayam Gepuk Artisan family! / Sertai keluarga Ayam Gepuk Artisan!</p>
            </div>

            {loading ? (
                <div className="h-96 flex justify-center items-center">
                    <LoadingSpinner />
                </div>
            ) : (
                <div className="flex justify-center">
                    <MagicBento
                        cardData={jobs}
                        renderCardContent={renderJobCard}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        glowColor="244, 96, 54"
                    />
                </div>
            )}
        </div>
    );
};

export default CareersPage;
