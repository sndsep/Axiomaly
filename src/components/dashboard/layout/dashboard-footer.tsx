// File: src/components/dashboard/layout/dashboard-footer.tsx
// Enhanced footer component with role-specific links and company information
"use client"

import Link from 'next/link'
import { useSession } from 'next-auth/react'

export function DashboardFooter() {
  const { data: session } = useSession()
  const role = session?.user?.role || 'STUDENT'

  const footerSections = {
    platform: {
      title: 'Platform',
      links: [
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/courses', label: 'Courses' },
        { href: '/resources', label: 'Resources' },
        { href: '/community', label: 'Community' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/careers', label: 'Careers' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact' },
      ],
    },
    support: {
      title: 'Support',
      links: [
        { href: '/help', label: 'Help Center' },
        { href: '/tutorials', label: 'Tutorials' },
        { href: '/documentation', label: 'Documentation' },
        { href: '/status', label: 'System Status' },
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
        { href: '/cookies', label: 'Cookie Policy' },
        { href: '/compliance', label: 'Compliance' },
      ],
    },
  }

  // Role-specific links
  const roleSpecificLinks = {
    ADMIN: [
      { href: '/dashboard/admin/analytics', label: 'Analytics' },
      { href: '/dashboard/admin/users', label: 'User Management' },
      { href: '/dashboard/admin/settings', label: 'System Settings' },
    ],
    INSTRUCTOR: [
      { href: '/dashboard/instructor/courses', label: 'Course Management' },
      { href: '/dashboard/instructor/analytics', label: 'Course Analytics' },
      { href: '/dashboard/instructor/resources', label: 'Teaching Resources' },
    ],
    STUDENT: [
      { href: '/dashboard/progress', label: 'Learning Progress' },
      { href: '/dashboard/certificates', label: 'Certificates' },
      { href: '/dashboard/mentorship', label: 'Mentorship' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Platform Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerSections.platform.title}</h3>
            <ul className="space-y-2">
              {footerSections.platform.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
              {/* Role-specific links */}
              {roleSpecificLinks[role].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerSections.company.title}</h3>
            <ul className="space-y-2">
              {footerSections.company.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerSections.support.title}</h3>
            <ul className="space-y-2">
              {footerSections.support.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerSections.legal.title}</h3>
            <ul className="space-y-2">
              {footerSections.legal.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold">VFX Academy</span>
              </Link>
              <p className="text-sm text-gray-400 mt-2">
                Empowering the next generation of VFX artists
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  YouTube
                </Link>
              </div>
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} VFX Academy. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}