import { Card, CardContent, CardHeader } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/testimonials-avatar'
import { motion } from 'framer-motion'

export default function TestimonialsDemo() {
    return (
        <section 
            className="py-20 px-4 testimonials-section" 
            style={{ 
                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                fontWeight: '100'
            }}
        >
            <style dangerouslySetInnerHTML={{
                __html: `
                    .testimonials-section * {
                        font-family: 'Arial Rounded MT Regular', Arial, sans-serif !important;
                        font-weight: 100 !important;
                    }
                    .testimonials-section h1,
                    .testimonials-section h2,
                    .testimonials-section h3,
                    .testimonials-section h4,
                    .testimonials-section h5,
                    .testimonials-section h6 {
                        font-family: 'Arial Rounded MT Regular', Arial, sans-serif !important;
                        font-weight: 100 !important;
                    }
                    .testimonials-section p,
                    .testimonials-section span,
                    .testimonials-section cite,
                    .testimonials-section div {
                        font-family: 'Arial Rounded MT Regular', Arial, sans-serif !important;
                        font-weight: 100 !important;
                        font-style: normal !important;
                    }
                `
            }} />
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="mb-6">
                        <span 
                            className="inline-block text-center"
                            style={{
                                color: '#000000',
                                fontSize: '56px',
                                letterSpacing: '-0.56px',
                                lineHeight: '67.2px',
                                WebkitFontSmoothing: 'antialiased'
                            }}
                        >
                            <span style={{
                                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                                fontWeight: 100
                            }}>What our </span>
                            <span 
                                className="playfair-italic"
                                style={{
                                    fontFamily: 'Playfair Display Italic, Georgia, Times New Roman, serif !important',
                                    fontWeight: 400,
                                    fontStyle: 'italic !important'
                                }}
                            >clients </span>
                            <span style={{
                                fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif',
                                fontWeight: 100
                            }}>say</span>
                        </span>
                    </h2>
                </motion.div>

                <motion.div 
                    className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2"
                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>
                        <CardHeader>
                            <img
                                className="h-6 w-fit dark:invert"
                                src="/logo/logo1.svg"
                                alt="Company Logo"
                                height="24"
                                width="auto"
                            />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium leading-relaxed" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>YourAI has transformed the way we run business operations. Their tailored AI strategies and solutions have significantly accelerated our decision-making. The ability to adapt each aspect to our needs allows us to create lasting impact. YourAI is a game-changer for modern enterprises.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/shekinah.webp"
                                            alt="Sean Thomas"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>ST</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>Sean Thomas</cite>
                                        <span className="text-muted-foreground block text-sm" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>Head of Business</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>
                        <CardContent className="h-full p-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-3">
                                <p className="text-xl font-medium leading-relaxed" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>YourAI is truly exceptional and highly practical, making complex challenges simple to manage. A real source of value.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/jonathan.webp"
                                            alt="Josh Johanson"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>JJ</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>Josh Johanson</cite>
                                        <span className="text-muted-foreground block text-sm" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>Marketing VP</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="leading-relaxed" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>Great work with YourAI. One of the most impactful collaborations I've had.</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/yucel.webp"
                                            alt="Yusuf Faizal"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>YF</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>Yusuf Faizal</cite>
                                        <span className="text-muted-foreground block text-sm" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>Operations Lead</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif' }}>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="leading-relaxed" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>YourAI delivered outstanding results. A transformation unlike anything I've seen before.</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://tailus.io/images/reviews/rodrigo.webp"
                                            alt="Yoel Fernandez"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>YF</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>Yoel Fernandez</p>
                                        <span className="text-muted-foreground block text-sm" style={{ fontFamily: 'Arial Rounded MT Regular, Arial, sans-serif', fontWeight: '100' }}>CPO, Toolisty</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}
