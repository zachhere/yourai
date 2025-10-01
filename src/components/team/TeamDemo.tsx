import Link from 'next/link'

const members = [
    {
        name: 'Brian Robinson',
        role: 'Founder - CEO',
        avatar: '/images/brian-robinson.png',
        link: '#',
    },
    {
        name: 'David Liu',
        role: 'Co-Founder - CTO',
        avatar: '/images/david-liu.png',
        link: '#',
    },
    {
        name: 'Aitor Fernandex',
        role: 'Sales Manager',
        avatar: '/images/aitor-fernandez.png',
        link: '#',
    },
]

export default function TeamSection() {
    return (
        <section className="bg-white py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-2/5">
                        <h2 
                            style={{
                                fontSize: '56px',
                                color: '#000000',
                                letterSpacing: '-0.56px',
                                lineHeight: '67.2px',
                                WebkitFontSmoothing: 'antialiased',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            <span style={{
                                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                                fontWeight: 100
                            }}>Our </span><span style={{
                                fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif',
                                fontWeight: 400,
                                fontStyle: 'italic'
                            }}>team</span>
                        </h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p 
                            className="arial-rounded-text"
                            style={{
                                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif !important',
                                fontWeight: 100,
                                fontSize: '16px',
                                fontStyle: 'normal !important',
                                fontVariant: 'normal !important',
                                textTransform: 'none !important'
                            }}
                        >During each engagement, we conduct regular check-ins with the client, because only they can determine whether the AI solutions truly align with their goals and ways of working.</p>
                    </div>
                </div>
                <div className="mt-12 md:mt-24">
                    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                        {members.map((member, index) => (
                            <div key={index} className="group overflow-hidden">
                                <img className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl" src={member.avatar} alt="team member" width="826" height="1239" />
                                <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                                    <div className="flex justify-between">
                                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">{member.name}</h3>
                                        <span className="text-xs">_0{index + 1}</span>
                                    </div>
                                    <div className="mt-1 flex items-center justify-between">
                                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">{member.role}</span>
                                        <Link href={member.link} className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                                            {' '}
                                            LinkedIn
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}