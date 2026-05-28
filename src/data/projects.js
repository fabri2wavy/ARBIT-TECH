// src/data/projects.js
export const projects = [
  {
    id: 'crm-legal',
    title: 'CRM Legal',
    subtitle: 'Next.js · React Native',
    description:
      'Sistema integral de gestión de clientes y proyectos para firmas legales. Seguimiento de casos, facturación automatizada y panel de control en tiempo real.',
    image: '/projects/crm-legal.jpg',
    color: '#059669',
    gradient: 'from-emerald-500 to-teal-600',
    tags: ['Next.js', 'React Native', 'PostgreSQL'],
    action: {
      label: 'Ver Caso de Estudio',
      iconName: 'FileText',
    },
    details: {
      challenge: 'La firma necesitaba centralizar expedientes, fechas límite y facturación, eliminando el uso de hojas de cálculo dispersas para garantizar la confidencialidad absoluta.',
      solution: 'Desarrollamos un entorno privado (Next.js) con bases de datos segregadas. Automatizamos recordatorios de audiencias y un pipeline de facturación conectando a servicios internos.',
    }
  },
  {
    id: 'inventarios',
    title: 'Sistema de Inventarios y Ventas',
    subtitle: 'React · Node.js',
    description:
      'Plataforma de control de stock para retail y ferretería. Gestión de proveedores, alertas de stock mínimo y reportes de ventas con gráficos interactivos.',
    image: '/projects/inventarios.jpg',
    color: '#10B981',
    gradient: 'from-teal-500 to-emerald-500',
    tags: ['React', 'Node.js', 'MongoDB'],
    action: {
      label: 'Ver Demo UI',
      iconName: 'Play',
    },
    details: {
      challenge: 'El cliente perdía oportunidades de venta por desajustes en el stock y no tenía visibilidad en tiempo real del margen de ganancias por producto.',
      solution: 'Construimos un dashboard transaccional con React que simula la operación diaria de una ferretería, con alertas en tiempo real y reportes exportables.',
    }
  },
  {
    id: 'fintech',
    title: 'App Móvil Fintech',
    subtitle: 'React Native · APIs Bancarias',
    description:
      'Aplicación móvil con integración bancaria en Sandbox. Transacciones seguras con encriptación end-to-end, verificación biométrica y dashboard financiero.',
    image: '/projects/fintech.jpg',
    color: '#047857',
    gradient: 'from-emerald-600 to-green-700',
    tags: ['React Native', 'APIs Bancarias', 'E2E Encryption'],
    action: {
      label: 'Ver Arquitectura',
      iconName: 'Smartphone',
    },
    details: {
      challenge: 'Se requería una interfaz nativa que soporte autenticación biométrica y consumo seguro de APIs financieras en entorno de pruebas (Sandbox).',
      solution: 'Diseñamos la app en React Native con flujos de onboarding seguros, manejo de tokens encriptados y mock de transferencias hacia APIs bancarias.',
    }
  },
]
