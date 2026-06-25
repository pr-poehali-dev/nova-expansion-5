import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import Icon from "@/components/ui/icon"

const facts = [
  { icon: "Dumbbell", title: "Пауэрлифтинг", text: "Присед, жим лёжа, становая тяга — три дисциплины, в которых я проверяю себя на каждой тренировке." },
  { icon: "Zap", title: "Тяжёлая атлетика", text: "Рывок и толчок штанги — взрывная сила и точность движения, которую я оттачиваю каждый день." },
  { icon: "Trophy", title: "Соревнования", text: "Выхожу на помост и поднимаю штангу. Соревнования — это не страх, а праздник силы." },
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
            Привет, я Вероника — <em className="italic">спортсменка</em>.
          </motion.h1>
          <motion.p
            className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Я занимаюсь пауэрлифтингом и тяжёлой атлетикой. Для меня спорт — это не просто
            тренировки, это образ жизни, способ познать себя и каждый день становиться
            сильнее. Здесь я делюсь своим путём, результатами и всем, что за этим стоит.
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
