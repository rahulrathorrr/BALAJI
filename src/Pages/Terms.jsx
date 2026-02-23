import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="bg-[#F4F4F2] pt-32 pb-24 text-[#1A1A1A] min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">TERMS & CONDITIONS</h1>
        <p className="text-sm font-bold text-[#3A5A40] uppercase tracking-widest mb-12">
          Last Updated: 18 February 2026
        </p>

        <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing and using the website www.infotechbalaji.in ('Website') operated by Balaji Info Techline Private Limited ('Company', 'we', 'us', 'our'), you agree to be bound by these Terms and Conditions ('Terms'). If you do not agree to these Terms, please discontinue use of the Website immediately.</p>
            <p>These Terms constitute a legally binding agreement between you and the Company under the Information Technology Act, 2000, and applicable Indian law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">2. About the Company</h2>
            <p>Balaji Info Techline Private Limited is a private limited company incorporated under the Companies Act, 2013, with its registered office at 61, Vaishno Vihar, 3rd Block C, Kokawas, Sanganer Bazar, Sanganer, Jaipur, Rajasthan - 302029, India. The Company provides IT infrastructure, cloud services, cybersecurity, data management, software development, and managed IT support services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">3. Use of Website</h2>
            <p className="mb-4">You agree to use this Website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the Website. Prohibited uses include:</p>
            <ul className="list-none space-y-2 pl-4">
              <li>→ Attempting to gain unauthorized access to any part of the Website or its related systems</li>
              <li>→ Transmitting any unsolicited commercial communications</li>
              <li>→ Uploading malicious code, viruses, or any other harmful material</li>
              <li>→ Scraping, harvesting, or collecting information from the Website through automated means without prior written consent</li>
              <li>→ Impersonating any person or entity, or misrepresenting your affiliation with any person or entity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">4. Intellectual Property</h2>
            <p className="mb-4">All content on this Website, including but not limited to text, graphics, logos, icons, images, and software, is the property of Balaji Info Techline Private Limited or its content suppliers and is protected under applicable Indian intellectual property laws. Unauthorized reproduction, distribution, or use of any content is strictly prohibited.</p>
            <p>You may view, download, and print content from the Website for personal, non-commercial use only, provided that all copyright and proprietary notices are preserved.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">5. Service Descriptions</h2>
            <p>Information about our services on the Website is provided for general informational purposes only. Specific service terms, deliverables, timelines, and pricing are governed by individual service agreements or statements of work entered into between the Company and the client. Nothing on this Website constitutes a binding offer unless expressly confirmed in writing by an authorized representative of the Company.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">6. Limitation of Liability</h2>
            <p className="mb-4">To the maximum extent permitted by applicable law, Balaji Info Techline Private Limited, its directors, employees, partners, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this Website or its content.</p>
            <p>The Website is provided on an 'as is' and 'as available' basis. We make no warranties, express or implied, regarding the accuracy, completeness, reliability, or availability of the Website or its content.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">7. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Balaji Info Techline Private Limited and its directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses (including legal fees) arising from your use of the Website, your violation of these Terms, or your violation of any applicable law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">8. Third-Party Links & Services</h2>
            <p>The Website may contain links to third-party websites or services. These links are provided for convenience only. The Company does not endorse, control, or assume any responsibility for the content, privacy policies, or practices of any third-party websites.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">9. Modifications</h2>
            <p>The Company reserves the right to modify these Terms at any time. Continued use of the Website after changes are posted constitutes your acceptance of the revised Terms. We recommend reviewing these Terms periodically.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">10. Governing Law & Jurisdiction</h2>
            <p>These Terms are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Jaipur, Rajasthan, India.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">11. Contact</h2>
            <p className="mb-1">For any questions regarding these Terms, please contact:</p>
            <p className="mb-1">Balaji Info Techline Private Limited</p>
            <p className="mb-1">61, Vaishno Vihar, 3rd Block C, Kokawas, Sanganer Bazar, Sanganer, Jaipur, Rajasthan - 302029</p>
            <p className="mb-1">Email: [legal@infotechbalaji.in]</p>
            <p>Website: www.infotechbalaji.in</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Terms;