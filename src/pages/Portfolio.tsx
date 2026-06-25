import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"
import { ShowcaseSection } from "@/components/sections/showcase-section"

const gallery = [
  { src: "/fashion-photography-editorial-black-and-white.jpg", title: "Чёрно-белый портрет" },
  { src: "/modern-architecture-building-exterior-minimal.jpg", title: "Городская геометрия" },
  { src: "/interior-design-minimalist-living-room-natural-lig.jpg", title: "Свет в интерьере" },
  { src: "/fashion-model-editorial-portrait-dramatic-lighting.jpg", title: "Драматичный свет" },
  { src: "/minimal-architecture-portfolio-with-clean-lines.jpg", title: "Минимализм" },
  { src: "/photography-portfolio-website-clean.jpg", title: "Уличная сцена" },
]

const Portfolio = () => {
  return (
    <PageLayout>
      <section className="px-6 pt-40 pb-12">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-muted-foreground text-sm uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Портфолио
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-serif text-foreground max-w-3xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Избранные кадры из моих <em className="italic">съёмок</em>.
          </motion.h1>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <motion.div
              key={item.title}
              className="relative rounded-xl overflow-hidden group aspect-[3/4]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              data-clickable
            >
              <motion.img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                <span className="text-white font-serif text-lg">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ShowcaseSection />
    </PageLayout>
  )
}

export default Portfolio