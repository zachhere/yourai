'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/faq-accordion'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'How long does a project take?',
            answer: 'Typical engagements last 3–6 weeks for discovery and pilot phases, depending on project scope. Larger transformations may extend over several months, with clear milestones defined at the start.',
        },
        {
            id: 'item-2',
            question: 'What payment methods do you accept?',
            answer: 'We work with standard invoicing and bank transfers. For enterprise clients, flexible billing terms are available, including staged payments aligned with project milestones.',
        },
        {
            id: 'item-3',
            question: 'Can I change or cancel an engagement?',
            answer: 'Engagements can be adjusted during the initial planning phase. Once underway, scope changes are handled collaboratively, ensuring alignment on impact, timeline, and fees.',
        },
        {
            id: 'item-4',
            question: 'Do you work with international clients?',
            answer: 'Yes — we partner with organizations globally. Collaboration is carried out remotely or on-site, depending on client preference. We adapt our methods to local business practices and regulations.',
        },
        {
            id: 'item-5',
            question: 'What is your guarantee?',
            answer: 'We stand by a value-first approach: if our work does not meet agreed outcomes, we continue optimizing until the defined objectives are achieved. Every partnership is structured for measurable results.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                    <div className="md:col-span-2">
                        <h2 
                            className="text-foreground text-4xl font-semibold"
                            style={{ 
                                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                                fontWeight: '100'
                            }}
                        >
                            FAQs
                        </h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">
                            <span style={{ 
                                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                                fontWeight: '100'
                            }}>Your </span>
                            <span style={{ 
                                fontFamily: 'PlayfairDisplay-Italic, serif',
                                fontStyle: 'italic'
                            }}>questions</span>
                            <span style={{ 
                                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                                fontWeight: '100'
                            }}> answered</span>
                        </p>
                    </div>

                    <div className="md:col-span-3">
                        <Accordion
                            type="single"
                            collapsible>
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}>
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-base">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                </div>
            </div>
        </section>
    )
}