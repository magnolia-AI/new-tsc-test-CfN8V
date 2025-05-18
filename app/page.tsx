"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "@/components/ui/calendar"
import { motion } from "framer-motion"
import { useState } from "react"

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
            backgroundAttachment: "fixed"
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-20 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-6">The Athenaeum</h1>
            <Separator className="w-24 h-[2px] bg-amber-800 mb-8" />
            <p className="text-xl md:text-2xl font-light mb-8 leading-relaxed">
              A sanctuary for literary connoisseurs and scholars, housing rare collections and fostering intellectual discourse.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-amber-800 hover:bg-amber-900 text-white px-8 rounded-none">
                Explore Collections
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-800 px-8 rounded-none">
                Schedule a Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Featured Collections</h2>
              <Separator className="w-24 h-[2px] bg-amber-800 mx-auto mb-6" />
              <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Discover our carefully curated literary treasures, from first editions to rare manuscripts spanning centuries of human knowledge.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rare First Editions",
                image: "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                description: "Our collection of first editions spans centuries, including works by Dickens, Austen, and Hemingway."
              },
              {
                title: "Medieval Manuscripts",
                image: "https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
                description: "Illuminated manuscripts and historical texts dating back to the 12th century."
              },
              {
                title: "Modern Literature",
                image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
                description: "Contemporary first editions, signed copies, and manuscripts from today's most celebrated authors."
              }
            ].map((collection, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden mb-6">
                  <div className="aspect-[4/5] w-full">
                    <img 
                      src={collection.image} 
                      alt={collection.title} 
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-amber-800 rounded-none">
                      View Collection
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-serif mb-2 group-hover:text-amber-800 transition-colors">{collection.title}</h3>
                <p className="text-gray-700">{collection.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Membership Benefits</h2>
            <Separator className="w-24 h-[2px] bg-amber-800 mx-auto mb-6" />
            <p className="text-white/80 max-w-2xl mx-auto leading-relaxed">
              Join our exclusive community of bibliophiles and scholars to enjoy premium access to our collections and services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Private Reading Rooms",
                description: "Access to elegant, quiet spaces designed for focused study and contemplation."
              },
              {
                title: "Curator Consultations",
                description: "Personal consultations with our expert curators to guide your literary exploration and research."
              },
              {
                title: "Exclusive Events",
                description: "Invitations to member-only events, including author readings, scholarly lectures, and collection previews."
              },
              {
                title: "Extended Hours",
                description: "24-hour access to select library facilities, perfect for night owls and dedicated researchers."
              },
              {
                title: "Digital Archive",
                description: "Remote access to our extensive digital archives of rare manuscripts and historical documents."
              },
              {
                title: "Concierge Services",
                description: "Personalized research assistance and book procurement services from our dedicated staff."
              }
            ].map((benefit, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center p-6 border border-white/20 hover:bg-white/10 transition-colors duration-300">
                  <h3 className="text-xl font-serif mb-3">{benefit.title}</h3>
                  <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="bg-white text-amber-800 hover:bg-white/90 px-8 rounded-none">
              Apply for Membership
            </Button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Upcoming Events</h2>
              <Separator className="w-24 h-[2px] bg-amber-800 mb-6" />
              <p className="text-gray-700 leading-relaxed mb-8">
                Join us for a diverse program of literary events, from intimate author discussions to scholarly lectures and workshops.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    date: "May 25, 2025",
                    title: "An Evening with Pulitzer Prize Winner",
                    description: "Join us for an intimate conversation with this year's Pulitzer Prize winner for fiction."
                  },
                  {
                    date: "June 10, 2025",
                    title: "Rare Manuscript Exhibition Opening",
                    description: "Be among the first to view our newly acquired collection of 18th century manuscripts."
                  },
                  {
                    date: "June 22, 2025",
                    title: "Literary Salon: The Art of Translation",
                    description: "A panel discussion with renowned literary translators on the nuances of their craft."
                  }
                ].map((event, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-6 group"
                  >
                    <div className="w-24 flex-shrink-0">
                      <p className="text-amber-800 font-medium">{event.date}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-2 group-hover:text-amber-800 transition-colors">{event.title}</h3>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white rounded-none">
                  View All Events
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 bg-white p-8 shadow-md"
            >
              <h3 className="text-2xl font-serif mb-6">Event Calendar</h3>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              
              <div className="mt-8 p-6 bg-stone-100">
                <h4 className="font-medium mb-2">May 18, 2025</h4>
                <h3 className="text-xl font-serif mb-3">Bookbinding Workshop</h3>
                <p className="text-gray-700 mb-4">Learn traditional bookbinding techniques from our master conservator in this hands-on workshop.</p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span>2:00 PM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Conservation Studio</span>
                  </div>
                </div>
                <Button className="mt-4 bg-amber-800 hover:bg-amber-900 text-white rounded-none">
                  Reserve a Spot
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Experience Literary Luxury</h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Schedule a guided tour of our facilities and collections with one of our expert curators.
            </p>
            <Button size="lg" className="bg-amber-800 hover:bg-amber-900 text-white px-8 rounded-none">
              Request a Private Tour
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
