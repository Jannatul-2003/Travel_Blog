"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Calendar,
  Users,
  Camera,
  Mail,
  ArrowRight,
} from "lucide-react";
import { PhotoLightbox } from "@/components/photo-lightbox";
import type { TravelDestination, BlogPost } from "@/lib/content";
import { SiFacebook } from "react-icons/si";

interface HomePageClientProps {
  destinations: TravelDestination[];
  blogPosts: BlogPost[];
}

export function HomePageClient({
  destinations,
  blogPosts,
}: HomePageClientProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [contactForm, setContactForm] = useState({
    name: "",
    message: "",
  });



  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactForm.message) {
      alert("Please enter your message.");
      return;
    }

    const subject = encodeURIComponent(
      `Travel Inquiry from ${contactForm.name || "Website Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${contactForm.name || "Not provided"}\n\nMessage:\n${
        contactForm.message
      }\n\n---\nSent from Mamun The Nomad website contact form`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=almamunurrashid1973@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");

    setContactForm({
      name: "",
      message: "",
    });
  };

  const handlePhotoClick = (destination: TravelDestination) => {
    const index = destinations.findIndex((d) => d.id === destination.id);
    setCurrentPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  const handleNavigate = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo - LEFT */}
        <Link href="/" className="text-2xl font-bold text-emerald-600">
          Mamun The Nomad
        </Link>

        {/* Right side nav + admin icon */}
        <div className="flex items-center gap-6">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#home"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#journey"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              My Journey
            </Link>
            <Link
              href="#blog"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Admin Icon - always visible */}
          <Link href="/admin" className="flex items-center">
            <User className="w-5 h-5 text-gray-700 hover:text-emerald-600 transition-colors" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-b shadow-sm">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <Link
              href="#home"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#journey"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              My Journey
            </Link>
            <Link
              href="#blog"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/photo_2025-06-08_14-42-04.jpg"
            alt="Traditional fishing boat on pristine beach"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">Embark On</h1>
          <p className="text-2xl md:text-4xl font-light mb-8">
            ADVENTURES BEYOND BORDERS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
              onClick={() => (window.location.href = "/gallery")}
            >
              Start Journey
            </Button>
          </div>
        </div>
      </section>

      {/* My Journey Section */}
      <section id="journey" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              My Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Discover incredible adventures from paragliding and camping to
              exploring indigenous communities and pristine natural landscapes.
              Click on any photo to view it in detail.
            </p>
            <div className="flex justify-center">
              <Link href="/gallery">
                <Button variant="outline" className="flex items-center gap-2">
                  View All {destinations.length} Photos
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Featured Photos Grid - Show first 12 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.slice(0, 12).map((destination, index) => (
              <Card
                key={destination.id}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handlePhotoClick(destination)}
              >
                <div className="relative h-48">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold text-lg">
                      {destination.title}
                    </h3>
                    <p className="text-sm opacity-90">{destination.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Show More Button
          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
              >
                View All {destinations.length} Photos
              </Button>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Latest Adventures Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Latest Adventures
            </h2>
            <p className="text-lg text-gray-600">
              Recent explorations and discoveries
            </p>
            <div className="text-center mt-12">
              <Link href="/blog">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
                >
                  View All Blog Posts
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 6).map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sailor's Journey Map Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-400 to-teal-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Explorer's Journey Map
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Follow my adventures across Bangladesh
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{destinations.length}</h3>
              <p className="text-lg">Documented Locations</p>
            </div>
            <div className="text-white">
              <Camera className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-lg">Photos Captured</p>
            </div>
            <div className="text-white">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p className="text-lg">Stories Shared</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button
                size="lg"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3"
              >
                Explore Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              About Mamun
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-4">
                  The Bangladesh Explorer
                </h3>
                <p className="text-gray-600 mb-6">
                  Born with an insatiable curiosity for adventure, I have
                  dedicated my life to exploring not just Bangladesh, but
                  diverse cultures and landscapes across South Asia. From
                  paragliding in hill stations to camping under the stars, from
                  connecting with indigenous communities to documenting
                  traditional ways of life, my passion for authentic travel
                  experiences has taken me on incredible journeys.
                </p>
                <p className="text-gray-600 mb-6">
                  Through this blog, I share the hidden gems, rich culture, and
                  incredible stories of Bangladesh. Whether you're a fellow
                  Bangladeshi or an international traveler, I hope my adventures
                  inspire you to discover the magic of this land of rivers.
                </p>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">
                      {destinations.length}
                    </div>
                    <div className="text-sm text-gray-500">Photos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">
                      25+
                    </div>
                    <div className="text-sm text-gray-500">Years Exploring</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">
                      25+
                    </div>
                    <div className="text-sm text-gray-500">Adventures</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/photo_2025-06-08_14-42-02.jpg"
                  alt="Mamun The Nomad"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Me Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Follow Me</h2>
            <p className="text-xl text-gray-300 mb-8">
              Stay connected and join the adventure
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            {destinations.slice(0, 6).map((destination, index) => (
              <div
                key={index}
                className="relative aspect-square cursor-pointer"
                onClick={() => handlePhotoClick(destination)}
              >
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={`Social media post ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://www.facebook.com/people/Mamun-The-Nomad/61569651252365/"
              className="text-white hover:text-emerald-600 transition-colors"
            >
              <SiFacebook className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600">
                Have a question about Bangladesh travel or want to share your
                own adventure? I'd love to hear from you!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">
                    Follow the Journey
                  </h4>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.facebook.com/people/Mamun-The-Nomad/61569651252365/"
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      <SiFacebook className="w-6 h-6" />
                    </Link>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=almamunurrashid1973@gmail.com&su=Hello%20from%20your%20travel%20blog%20visitor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <form className="space-y-6" onSubmit={handleContactSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={contactForm.message}
                      onChange={handleContactChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Tell me about your Bangladesh travel dreams or ask any questions..."
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                    disabled={!contactForm.message}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Lightbox */}
      <PhotoLightbox
        photos={destinations}
        currentIndex={currentPhotoIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mamun The Nomad</h3>
              <p className="text-gray-300">
                Sharing the beauty of Bangladesh and inspiring others to explore
                this incredible country.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#journey"
                    className="text-gray-300 hover:text-white"
                  >
                    My Journey
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-gray-300 hover:text-white"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-300 hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-300 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-300">
                Email: almamunurrashid1973@gmail.com
                <br />
                Follow the journey on social media
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 Mamun The Nomad. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}