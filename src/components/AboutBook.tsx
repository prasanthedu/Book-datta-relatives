import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Users, Globe, ShieldCheck, Zap } from 'lucide-react';

const features = [
  { icon: <Heart className="text-gold" />, title: "Deep Exploration", desc: "A deep exploration of human relationships and emotional bonds." },
  { icon: <Sparkles className="text-gold" />, title: "Timeless Storytelling", desc: "Timeless emotional storytelling that resonates across generations." },
  { icon: <Users className="text-gold" />, title: "Contemporary Issues", desc: "Contemporary issues handled with extreme sensitivity and care." },
  { icon: <Globe className="text-gold" />, title: "Universal Values", desc: "Universal values and understanding that transcend cultural boundaries." },
  { icon: <ShieldCheck className="text-gold" />, title: "Love Beyond Age", desc: "Exploring the power of love beyond age boundaries and societal norms." },
  { icon: <Zap className="text-gold" />, title: "Human Psychology", desc: "A stark look at the reality of intoxication and human psychology." }
];

export default function AboutBook() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Petal/River Animation Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-rose-200 rounded-full blur-sm"
            style={{
              width: Math.random() * 20 + 10,
              height: Math.random() * 20 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 500],
              x: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl text-maroon mb-8 gold-underline inline-block pb-2">About the Book</h2>
            <p className="telugu-body text-xl text-maroon/80 leading-relaxed mb-8">
              "అదే నువ్వు అదే నేను" - ఇది కేవలం ఒక కథ కాదు, జీవితపు లోతైన సత్యాలను ఆవిష్కరించే ఒక అద్భుత ప్రయాణం. మానవ సంబంధాల గొప్పదనం, సార్వత్రిక విలువలు, మరియు ప్రేమకు వయసుతో నిమిత్తం లేని అనంతమైన శక్తిని ఈ కథ హృద్యంగా ఆవిష్కరించింది.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-2 p-4 rounded-xl hover:bg-gold/5 transition-colors"
                >
                  <div className="mb-2">{f.icon}</div>
                  <h3 className="font-serif font-bold text-maroon">{f.title}</h3>
                  <p className="text-sm text-maroon/60">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold/20 rounded-2xl blur-xl rotate-3" />
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl border border-gold/30 w-full max-w-sm aspect-[3/4] flex items-center justify-center overflow-hidden">
                {/* Book Cover Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-maroon to-maroon/80" />
                <div className="relative text-center p-8 border-2 border-gold/50 m-4 h-[calc(100%-2rem)] flex flex-col justify-between">
                  <h3 className="telugu-heading text-3xl text-gold">అదే నువ్వు అదే నేను</h3>
                  <div className="w-12 h-px bg-gold mx-auto" />
                  <p className="text-gold/80 font-serif italic text-sm">A Masterpiece of Translation & Emotion</p>
                  <p className="telugu-body text-gold text-lg">డా. వి.ఎల్. నరసింహం శివకోటి</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
