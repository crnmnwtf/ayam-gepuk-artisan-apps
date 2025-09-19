import React from 'react';
import { JOB_OPENINGS } from '../../constants';
import { JobOpening } from '../../types';

const JobCard: React.FC<{ job: JobOpening }> = ({ job }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-in-out flex flex-col">
        <div className="p-6 bg-[var(--brand-red)] text-white">
            <h3 className="text-2xl font-bangers">{job.title}</h3>
            <p className="font-semibold">{job.location}</p>
        </div>
        <div className="p-6 flex-grow space-y-4">
            <div>
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 border-b-2 border-[var(--brand-yellow)] pb-1 mb-2">Jawatan Ditawarkan</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    {job.positions.map((pos, i) => <span key={i} className="bg-yellow-200 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{pos}</span>)}
                </div>
            </div>
            <div>
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200 border-b-2 border-[var(--brand-yellow)] pb-1 mb-2">Kelebihan</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    {job.benefits.map((ben, i) => <li key={i}>{ben}</li>)}
                </ul>
            </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-900/50 p-4 mt-auto">
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
    return (
        <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-6xl md:text-7xl font-bangers text-[var(--brand-yellow)]" style={{ textShadow: '4px 4px 0 var(--brand-red)' }}>
                    JOIN OUR TEAM
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Be a part of the Ayam Gepuk Artisan family! / Sertai keluarga Ayam Gepuk Artisan!</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {JOB_OPENINGS.map(job => (
                    <JobCard key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default CareersPage;
