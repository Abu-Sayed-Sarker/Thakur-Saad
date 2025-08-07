import logo from "@/assets/logo.png";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="container px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4  md:col-span-2  md:gap-8">
            <Image
              src={logo}
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
            <p className="text-sm text-gray-400">
              Professional AI-powered development solutions for modern
              businesses.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>hello@devstudio.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-main-secondary">
                  AI Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-main-secondary">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-main-secondary">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-main-secondary">
                  API Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-main-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-main-secondary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-main-secondary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-main-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} solution SQD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
