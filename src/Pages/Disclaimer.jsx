import React from 'react';
import { motion } from 'framer-motion';

const Disclaimer = () => {
  return (
    <div className="bg-[#F4F4F2] pt-32 pb-24 text-[#1A1A1A] min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-6"
      >
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">DISCLAIMER</h1>
        <p className="text-sm font-bold text-[#3A5A40] uppercase tracking-widest mb-12">
          Last Updated: 18 February 2026
        </p>

        <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">1. General Disclaimer</h2>
            <p className="mb-4">The information provided on the website www.infotechbalaji.in is for general informational purposes only. While Balaji Info Techline Private Limited strives to keep the information accurate and up to date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the Website for any purpose.</p>
            <p>Any reliance you place on such information is therefore strictly at your own risk.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">2. No Professional Advice</h2>
            <p>The content on this Website does not constitute professional IT, legal, financial, or business advice. Any decisions you make based on information from this Website should be made in consultation with qualified professionals appropriate to your specific situation. For tailored IT advice, we encourage you to contact our team directly.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">3. Service Availability</h2>
            <p>We reserve the right to modify, suspend, or discontinue any service or feature described on this Website at any time and without notice. Descriptions of services on this Website are indicative only and do not constitute a binding commitment. All engagements are governed by formal service agreements.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">4. External Links</h2>
            <p>Our Website may include links to other websites provided for your convenience. Balaji Info Techline Private Limited has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">5. Accuracy of Technical Information</h2>
            <p>Technology evolves rapidly. While we make every effort to keep service descriptions and technical content current, some information on the Website may not reflect the most recent developments. We recommend contacting us directly for the most current information about our capabilities and services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">6. Limitation of Liability</h2>
            <p>In no event shall Balaji Info Techline Private Limited, its directors, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages -including loss of data, loss of profits, or business interruption -arising out of or in connection with your use of, or inability to use, this Website or its content, even if the Company has been advised of the possibility of such damages.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">7. Indemnity</h2>
            <p>By using this Website, you agree to indemnify and hold harmless Balaji Info Techline Private Limited and its affiliates, directors, and employees from and against any claims, damages, or expenses arising from your use of the Website or violation of these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">8. Governing Law</h2>
            <p>This Disclaimer is governed by the laws of India. Any disputes arising from its interpretation or application shall be subject to the exclusive jurisdiction of the courts of Jaipur, Rajasthan.</p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#1A1A1A] mb-4">9. Contact</h2>
            <p className="mb-1">For any questions relating to this Disclaimer, please contact:</p>
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

export default Disclaimer;