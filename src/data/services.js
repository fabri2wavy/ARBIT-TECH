// src/data/services.js
import { Globe, LayoutDashboard, Smartphone } from 'lucide-react'

export const services = [
  {
    id: 'web',
    icon: Globe,
    title: 'Desarrollo Web & Landing Pages',
    description:
      'Creamos experiencias web de alto rendimiento que convierten visitantes en clientes. Sitios optimizados para SEO, velocidad y diseño visual impactante.',
    tags: ['React', 'Next.js', 'Tailwind', 'SEO'],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    id: 'crm',
    icon: LayoutDashboard,
    title: 'Sistemas de Gestión CRM/ERP',
    description:
      'Diseñamos plataformas de gestión que centralizan tu operación. Dashboards intuitivos, reportes en tiempo real y automatización de procesos clave.',
    tags: ['CRM', 'ERP', 'Dashboard', 'Analytics'],
    gradient: 'from-violet-500 to-blue-500',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Apps Móviles e Integraciones',
    description:
      'Desarrollamos aplicaciones móviles nativas y cross-platform con integración directa a APIs bancarias, pasarelas de pago y servicios en la nube.',
    tags: ['React Native', 'APIs', 'Fintech', 'Sandbox'],
    gradient: 'from-cyan-400 to-emerald-400',
  },
]
