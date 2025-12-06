import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-gray-300 transition-colors duration-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2 text-white">
               <div className="bg-indigo-600 p-1.5 rounded-lg font-bold text-lg">MS</div>
               <span className="font-bold text-xl tracking-tight">MySEO Tools</span>
            </div>
            <p className="text-gray-400 text-sm leading-6">
              MySEO Tools provides 170+ free tools for SEO experts, YouTubers, webmasters, students, and writers.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li><a href="#" className="text-sm hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">Disclaimer</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">Terms of Services</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">Report</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Tools Category</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li><a href="#" className="text-sm hover:text-white transition-colors">Text Tools</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">YouTube Tools</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">SEO Tools</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">Domain & IP Tools</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">Web Management</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">Image Editing</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Blog</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li><a href="#" className="text-sm hover:text-white transition-colors">Best Software</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">SEO Tips</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">Web Development</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">Content Strategy</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">YouTube Growth</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">More</h3>
                <ul role="list" className="mt-4 space-y-3">
                  <li><a href="#" className="text-sm hover:text-white transition-colors">Sitemap</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">API</a></li>
                  <li><a href="#" className="text-sm hover:text-white transition-colors">Donate</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2025 MySEO Tools. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;