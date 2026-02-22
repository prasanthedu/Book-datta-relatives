import React from 'react';
import { motion } from 'motion/react';
import { Award, Book, PenTool, Lightbulb } from 'lucide-react';

const stats = [
  { icon: <Globe size={20} />, label: "Literary Bridge", value: "Hindi & Telugu" },
  { icon: <PenTool size={20} />, label: "Expert", value: "Translator" },
  { icon: <Book size={20} />, label: "Sensitive", value: "Storyteller" },
  { icon: <Lightbulb size={20} />, label: "Contemporary", value: "Thinker" }
];

import { Globe } from 'lucide-react';

export default function AboutAuthor() {
  return (
    <section className="py-24 px-6 bg-maroon text-cream overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-gold mb-4 inline-block pb-2 border-b border-gold/30">About the Author</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-gold p-2 relative z-10 overflow-hidden">
              <img 
                src="https://different-teal-efnbmvcj7g.edgeone.app/Screenshot_1-150x150.jpg" 
                alt="డా|| నరసింహం శివకోటి" 
                className="w-full h-full object-cover rounded-full hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gold text-maroon p-4 rounded-full shadow-xl z-20">
              <Award size={32} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left"
          >
            <h3 className="telugu-heading text-4xl text-gold mb-2">డా|| నరసింహం శివకోటి</h3>
            <p className="text-gold/70 font-serif italic mb-8 tracking-wide">A Visionary Bridge Between Languages</p>
            
            <p className="telugu-body text-cream/80 text-lg leading-relaxed mb-10">
              హైదరాబాద్ సెంట్రల్ యూనివర్సిటీ నుండి M.A (ఫంక్షనల్ హిందీ అండ్ ట్రాన్స్ లేషన్) (గోల్డుమెడల్), M.Phil (హిందీ) (గోల్డుమెడల్), Ph.D (హిందీ) పట్టాలు పొందిన డా|| నరసింహం శివకోటి హిందీ - తెలుగు భాషలలో పరస్పర అనువాదం, తులనాత్మక సాహిత్య రంగాలలో విశేషమైన కృషి చేస్తున్నారు. వీరు ఈమధ్య కాలంలో ప్రముఖ తెలుగు రచయిత్రి ఓల్గా గారి రెండు పరిశోధనాత్మక గ్రంథాలను 'ప్రభాత కిరణేఁ', 'అనావరణ్' శీర్షికన తెలుగు నుండి హిందీలోకి, అలాగే, ప్రముఖ హిందీ కవి నరేష్ సక్సేనా గారి ఎంపిక చేసిన కవితలను "అంతరిక్షం  నుండి.." శీర్షికతో హిందీ నుండి తెలుగులోకి అనువదించడంతోపాటు సుమారు 20 కథలు, కొన్ని కవితలు తెలుగు నుండి హిందీలోకి అనువదించి ప్రముఖ జాతీయ స్థాయి హిందీ పత్రికల్లో ప్రచురించారు. ప్రస్తుతం వీరు రక్షణ మంత్రిత్వ శాఖలోని భారత ప్రభుత్వ రంగ సంస్థ ' భారత్ డైనమిక్స్ లిమిటెడ్'లో డిప్యూటీ మేనేజర్ (రాజభాష)గా సేవలు అందిస్తున్నారు.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="text-gold">{s.icon}</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gold/50">{s.label}</p>
                    <p className="font-serif font-bold text-sm">{s.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
