import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"
import { CarouselSection } from "@/components/sections/carousel-section"

const series = [
  {
    title: "Пауэрлифтинг",
    count: "Присед · Жим · Тяга",
    text: "Три базовых движения, которые раскрывают настоящую силу. Я тренируюсь в каждом из них и постепенно увеличиваю личные рекорды.",
    src: "/fashion-model-editorial-portrait-dramatic-lighting.jpg",
  },
  {
    title: "Тяжёлая атлетика",
    count: "Рывок · Толчок",
    text: "Техничный и взрывной спорт, где важна каждая деталь. Тяжёлая атлетика научила меня концентрации и уважению к штанге.",
    src: "/modern-architecture-building-exterior-minimal.jpg",
  },
  {
    title: "Соревнования",
    count: "Помост · Результат · Победа",
    text: "Выход на помост — это особое чувство. Всё, что наработано на тренировках, проявляется в один момент. Я люблю это.",
    src: "/interior-design-minimalist-living-room-natural-lig.jpg",
  },
]

const Series = () => {
  return (
    <PageLayout>
      <section className="px-6 pt-40 pb-16">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-muted-foreground text-sm uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Направления
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-serif text-foreground max-w-3xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Чем я <em className="italic">живу</em> в спорте.
          </motion.h1>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {series.map((s, i) => (
            <motion.div
              key={s.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-2xl border border-border bg-secondary/30 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              <div className={`h-[320px] overflow-hidden ${i % 2 ? "md:order-2" : ""}`} data-clickable>
                <motion.img
                  src={s.src}
                  alt={s.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className={`p-8 ${i % 2 ? "md:order-1" : ""}`}>
                <span className="text-xs uppercase tracking-widest text-primary">{s.count}</span>
                <h2 className="text-3xl font-serif text-foreground mt-3 mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CarouselSection />
    </PageLayout>
  )
}

export default Series
