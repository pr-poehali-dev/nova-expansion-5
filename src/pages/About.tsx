import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import Icon from "@/components/ui/icon"

const facts = [
  { icon: "Camera", title: "5 лет с камерой", text: "Фотография началась как хобби и стала способом видеть мир иначе." },
  { icon: "MapPin", title: "12 стран", text: "Снимаю в путешествиях: улицы, люди, природа и случайные моменты." },
  { icon: "Image", title: "3000+ кадров", text: "Лучшие из них собраны здесь — в портфолио и тематических сериях." },
]

const About = () => {
  return (
    <PageLayout>
      <section className="px-6 pt-40 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-muted-foreground text-sm uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Обо мне
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-serif text-foreground leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Фотография — моё <em className="italic">любимое</em> хобби.
          </motion.h1>
          <motion.p
            className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Меня зовут Алекс. В свободное время я беру камеру и ловлю свет, эмоции и
            тишину. Здесь я делюсь кадрами, которые для меня что-то значат, и историями,
            которые за ними стоят.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {facts.map((f, i) => (
            <motion.div
              key={f.title}
              className="rounded-2xl border border-border bg-secondary/40 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Icon name={f.icon} size={28} className="text-primary mb-4" />
              <h3 className="text-xl font-serif text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ManifestoSection />
    </PageLayout>
  )
}

export default About
