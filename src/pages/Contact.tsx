import { useState } from "react"
import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"
import Icon from "@/components/ui/icon"

const contacts = [
  { icon: "Mail", label: "Почта", value: "veronika@sport.ru" },
  { icon: "Instagram", label: "Instagram", value: "@veronika.lifts" },
  { icon: "MapPin", label: "Город", value: "Россия" },
]

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  return (
    <PageLayout>
      <section className="px-6 pt-40 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="text-muted-foreground text-sm uppercase tracking-widest mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Контакты
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-serif text-foreground max-w-3xl leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Пишите — всегда <em className="italic">на связи</em>.
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Хотите задать вопрос о тренировках, пауэрлифтинге или тяжёлой атлетике?
                Или просто поддержать? Пишите — я рада каждому сообщению.
              </p>
              {contacts.map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center">
                    <Icon name={c.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                    <p className="text-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Ваше имя"
                className="w-full bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Email"
                className="w-full bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Сообщение"
                rows={5}
                className="w-full bg-secondary border-0 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <button
                type="submit"
                className="w-full bg-foreground text-background py-3 rounded-lg hover:bg-foreground/90 transition-colors font-medium"
                data-clickable
              >
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Contact
