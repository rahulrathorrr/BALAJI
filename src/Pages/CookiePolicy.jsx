import React from 'react';
import { motion } from 'framer-motion';

const CookiePolicy = () => {
  return (
    <div className="bg-[#F4F4F2] pt-32 pb-24 text-[#1A1A1A] min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">COOKIE POLICY</h1>
        <p className="text-sm font-bold text-[#3A5A40] uppercase tracking-widest mb-12">
          Last Updated: 18 February 2026
        </p>

        <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">1. What Are Cookies</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently, remember your preferences, and provide information to website owners about how visitors use the site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">2. How We Use Cookies</h2>
            <p className="mb-4">Our website www.infotechbalaji.in uses cookies for the following purposes:</p>
            
            <h3 className="text-xl font-bold text-[#1A1A1A] mt-6 mb-2">2.1 Essential / Strictly Necessary Cookies</h3>
            <p>These cookies are required for the Website to function correctly. They enable core functionality such as security, session management, and page navigation. Without these cookies, certain parts of the Website may not work properly. These cookies cannot be disabled.</p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-6 mb-2">2.2 Analytics & Performance Cookies</h3>
            <p>These cookies collect anonymized information about how visitors use our Website -which pages are visited most, how long visitors stay, and where they come from. This data helps us improve the Website experience. We may use tools such as Google Analytics for this purpose. All information collected is aggregated and does not identify individual visitors.</p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-6 mb-2">2.3 Functional Cookies</h3>
            <p>These cookies remember choices you make (such as language preferences or your filled form data) to provide a more personalized experience during your visit.</p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-6 mb-2">2.4 Marketing / Targeting Cookies</h3>
            <p>If we run digital advertising campaigns, targeting cookies may be set on your device to understand your interests and deliver relevant advertisements. These cookies track your browsing across websites. We will only set marketing cookies with your explicit consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">3. Third-Party Cookies</h2>
            <p>Some cookies may be set by third-party services that appear on our Website, such as embedded maps or analytics providers. These third parties may collect information about your online activities across different websites. We do not control these cookies and recommend reviewing the relevant third-party privacy policies.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">4. Managing Cookies</h2>
            <p className="mb-4">You can control and manage cookies in the following ways:</p>
            <ul className="list-none space-y-2 pl-4 mb-4">
              <li>→ Browser Settings: Most browsers allow you to view, delete, or block cookies through the browser's settings menu.</li>
              <li>→ Cookie Consent Tool: We may present a cookie consent banner on your first visit, allowing you to accept or decline non-essential cookies.</li>
              <li>→ Opt-Out Tools: For analytics cookies (e.g., Google Analytics), you can use the Google Analytics Opt-out Browser Add-on.</li>
            </ul>
            <p>Please note that disabling certain cookies may impact the functionality of our Website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">5. Changes to This Cookie Policy</h2>
            <p>We may update this Cookie Policy periodically. Any changes will be posted on this page with an updated effective date.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">6. Contact</h2>
            <p>If you have questions about our use of cookies, please contact us at: [privacy@infotechbalaji.in]</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default CookiePolicy;