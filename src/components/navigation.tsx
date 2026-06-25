import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"

const links = [
  { label: "Главная", href: "/" },
  { label: "Обо мне", href: "/about" },
  { label: "Результаты", href: "/portfolio" },
  { label: "Направления", href: "/series" },
  { label: "Контакты", href: "/contact" },
]

export function Navigation() {
  const location = useLocation()

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between rounded-full border border-border/60 bg-background/70 backdrop-blur-xl px-6 py-3">
        <Link to="/" className="text-xl font-serif tracking-tight text-foreground" data-clickable>
          VERONIKA<span className="text-primary">.</span>
        </Link>

        <nav className="flex items-center gap-1 md:gap-2">
          {links.map((link) => {
            const active = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className="relative px-3 py-1.5 text-xs md:text-sm transition-colors data-[active=true]:text-foreground"
                data-active={active}
                data-clickable
              >
                <span
                  className={
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }
                >
                  {link.label}
                </span>
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </motion.header>
  )
}