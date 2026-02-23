import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#F4F4F2] pt-32 pb-24 text-[#1A1A1A] min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">PRIVACY POLICY</h1>
        <p className="text-sm font-bold text-[#3A5A40] uppercase tracking-widest mb-12">
          Last Updated: 18 February 2026 | Effective Date: 18 February 2026
        </p>

        <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">1. Introduction</h2>
            <p className="mb-4">Balaji Info Techline Private Limited ('Company', 'we', 'our', or 'us'), incorporated under the Companies Act, 2013, and operating from 61, Vaishno Vihar, 3rd Block C, Kokawas, Sanganer Bazar, Sanganer, Jaipur, Rajasthan - 302029, India, is committed to protecting the privacy and personal data of individuals who visit our website at www.infotechbalaji.in ('Website') or engage with our services.</p>
            <p className="mb-4">This Privacy Policy describes how we collect, use, share, store, and protect your personal information in accordance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 ('SPDI Rules'), and applicable data protection principles.</p>
            <p>By using our Website or services, you acknowledge that you have read, understood, and agree to the terms of this Privacy Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">2. Information We Collect</h2>
            <p className="mb-2">We collect the following categories of information:</p>
            
            <h3 className="text-xl font-bold text-[#1A1A1A] mt-6 mb-2">2.1 Information You Provide Directly</h3>
            <p>When you fill in contact forms, request a consultation, subscribe to updates, or communicate with us via email or phone, you may provide us with: your full name, company name, email address, phone number, and the content of your messages or enquiries.</p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-6 mb-2">2.2 Technical & Usage Data</h3>
            <p>When you visit our Website, we automatically collect certain technical data including: your IP address, browser type and version, operating system, referring URLs, pages visited, time spent on pages, and other diagnostic data. This is collected through cookies and similar tracking technologies (see our Cookie Policy).</p>

            <h3 className="text-xl font-bold text-[#1A1A1A] mt-6 mb-2">2.3 Service Delivery Data</h3>
            <p>If you engage us for IT services, we may collect and process data related to your systems, infrastructure, or business operations solely for the purpose of delivering the contracted services. Such data is treated as strictly confidential.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use collected data for the following purposes:</p>
            <ul className="list-none space-y-2 pl-4">
              <li>→ To respond to your enquiries and provide requested information</li>
              <li>→ To deliver, manage, and improve our IT services</li>
              <li>→ To send transactional communications related to our services</li>
              <li>→ To send marketing communications where you have provided consent</li>
              <li>→ To comply with legal obligations</li>
              <li>→ To analyze website usage and improve user experience</li>
              <li>→ To detect, prevent, and address security or technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">4. Legal Basis for Processing</h2>
            <p>We process your personal data on the following legal bases: your explicit consent, performance of a contract with you, compliance with a legal obligation, and our legitimate interests in operating and improving our business, where such interests are not overridden by your rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">5. Sharing of Information</h2>
            <p className="mb-4">We do not sell, rent, or trade your personal information to third parties. We may share information with:</p>
            <ul className="list-none space-y-2 pl-4 mb-4">
              <li>→ Service providers and technology partners who assist us in delivering our services, under strict confidentiality obligations</li>
              <li>→ Law enforcement, regulators, or government authorities where required by applicable Indian law</li>
              <li>→ Professional advisors (legal, financial) under attorney-client or equivalent privilege</li>
            </ul>
            <p>Any third party receiving your data is contractually bound to use it only for the specified purpose and to protect it in accordance with applicable law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">6. Data Retention</h2>
            <p>We retain your personal data only for as long as necessary to fulfil the purposes described in this Policy, or as required by applicable law. Contact enquiry data is typically retained for a period not exceeding 24 months unless an ongoing contractual relationship exists. Service delivery data is retained as per the terms of the applicable service agreement.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">7. Data Security</h2>
            <p className="mb-4">We implement appropriate technical and organisational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These include encrypted data transmission (SSL/TLS), access controls, regular security assessments, and AI-assisted anomaly detection in our internal systems.</p>
            <p>However, no method of electronic transmission or storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">8. Your Rights</h2>
            <p className="mb-4">Subject to applicable law, you have the following rights regarding your personal data:</p>
            <ul className="list-none space-y-2 pl-4 mb-4">
              <li>→ Right to access the personal data we hold about you</li>
              <li>→ Right to correction of inaccurate or incomplete data</li>
              <li>→ Right to erasure of your data, subject to legal obligations</li>
              <li>→ Right to restrict or object to processing</li>
              <li>→ Right to withdraw consent where processing is based on consent</li>
            </ul>
            <p>To exercise any of these rights, please contact us at: [privacy@infotechbalaji.in -update with actual email]</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">9. Cookies</h2>
            <p>We use cookies and similar tracking technologies on our Website. For full details on what cookies we use and how to control them, please refer to our Cookie Policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">10. Third-Party Links</h2>
            <p>Our Website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to review the privacy policies of any third-party sites you visit.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">11. Children's Privacy</h2>
            <p>Our Website and services are not directed at individuals under the age of 18. We do not knowingly collect personal data from minors. If we become aware that we have collected data from a minor without verified parental consent, we will delete it promptly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">12. Changes to This Policy</h2>
            <p>We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated 'Last Updated' date. We encourage you to review this Policy periodically.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">13. Contact for Privacy Matters</h2>
            <p className="mb-1">Balaji Info Techline Private Limited</p>
            <p className="mb-1">61, Vaishno Vihar, 3rd Block C, Kokawas, Sanganer Bazar, Sanganer, Jaipur, Rajasthan - 302029</p>
            <p className="mb-1">Email: [privacy@infotechbalaji.in]</p>
            <p>Website: www.infotechbalaji.in</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;