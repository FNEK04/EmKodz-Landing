export type Language = 'ru' | 'en';

export const translations = {
  ru: {
    seo: {
      title: 'EmKodZ | Создаем артефакты будущего',
      description: 'Студия EmKodZ создает цифровые продукты для визионеров. Разработка корпоративных сайтов, мобильных приложений, UI/UX дизайн.',
      keywords: 'создание сайтов, веб-студия, разработка мобильных приложений, ui/ux дизайн'
    },
    nav: {
      services: 'Услуги',
      process: 'Процесс',
      techStack: 'Технологии',
      portfolio: 'Портфолио',
      calculator: 'Калькулятор',
      reviews: 'Отзывы',
      faq: 'FAQ',
      contact: '[ Связаться ]',
    },
    hero: {
      tagline: 'Digital Studio / 2026',
      title1: 'Мы ',
      titleHighlight: 'кодируем',
      title2: ' смыслы,\nа не просто интерфейсы.',
      desc: 'Студия EmKodZ создает цифровые продукты для визионеров. Мы не делаем шаблоны — мы создаем артефакты будущего.',
      btnDiscuss: 'Обсудить проект',
      btnWorks: 'Смотреть работы',
      live: 'LIVE',
      perfTitle: 'Высокая производительность',
      perfDesc: 'Оптимизация на всех уровнях',
    },
    services: {
      title: '// Наши компетенции',
      items: [
        {
          title: 'Веб-разработка',
          desc: 'Создаем современные корпоративные сайты, лендинги и сложные веб-приложения на актуальном стеке (React, Vue, Node.js).'
        },
        {
          title: 'Мобильные приложения',
          desc: 'Разработка нативных и кроссплатформенных приложений для iOS и Android с фокусом на UX и производительность.'
        },
        {
          title: 'UI/UX Дизайн',
          desc: 'Проектируем интуитивно понятные интерфейсы. От вайрфреймов до интерактивных прототипов и дизайн-систем.'
        },
        {
          title: 'Backend & API',
          desc: 'Надежная серверная архитектура, проектирование баз данных и разработка REST/GraphQL API для ваших сервисов.'
        },
        {
          title: 'SEO Оптимизация',
          desc: 'Техническая оптимизация сайтов для поисковых систем, улучшение Core Web Vitals и повышение видимости.'
        },
        {
          title: 'Поддержка и аудит',
          desc: 'Обеспечиваем бесперебойную работу проектов, проводим рефакторинг кода и аудит безопасности.'
        }
      ]
    },
    process: {
      title: '// Процесс работы',
      items: [
        {
          step: '01',
          title: 'Аналитика и ТЗ',
          desc: 'Погружаемся в бизнес, проводим аудит и составляем подробное техническое задание.',
        },
        {
          step: '02',
          title: 'Дизайн и Прототипирование',
          desc: 'Создаем интерактивные прототипы и разрабатываем уникальный дизайн, ориентированный на пользователя.',
        },
        {
          step: '03',
          title: 'Разработка',
          desc: 'Пишем чистый, масштабируемый код с использованием современных технологий и фреймворков.',
        },
        {
          step: '04',
          title: 'Тестирование и Релиз',
          desc: 'Проверяем продукт на всех устройствах, после чего осуществляем запуск.',
        }
      ]
    },
    techStack: {
      title: '// Технологии',
      desc: 'Мы используем проверенные инструменты для создания надежных цифровых продуктов.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile',
        design: 'Design'
      }
    },
    portfolio: {
      title: '// Портфолио',
      categories: {
        'Fintech App': 'Финтех Приложение',
        'E-commerce': 'E-commerce',
        'Corporate Portal': 'Корпоративный Портал',
        'Web3 Dashboard': 'Web3 Дашборд'
      }
    },
    calculator: {
      title: 'Калькулятор',
      pages: 'Сложность (Страницы)',
      designLevel: 'Уровень дизайна',
      designBasic: 'Базовый',
      designBasicDesc: 'Шаблонные решения',
      designUnique: 'Уникальный',
      designUniqueDesc: 'Кастомный UI/UX',
      designPremium: 'Премиум',
      designPremiumDesc: 'Сложные анимации и 3D',
      backend: 'Нужна разработка Backend / CMS',
      backendDesc: 'Панель управления, базы данных, API',
      total: 'Итого:',
      order: 'Заказать расчет',
      currency: '₽'
    },
    reviews: {
      title: 'Отзывы:',
      items: [
        {
          name: 'Алексей Иванов',
          company: 'TechCorp',
          text: 'EmKodZ превзошли все ожидания. Их подход к деталям и сроки выполнения — на высшем уровне. Новый сайт конвертирует в 3 раза лучше.',
        },
        {
          name: 'Елена Смирнова',
          company: 'EcoLife',
          text: 'Искали команду для создания мобильного приложения. Ребята быстро вникли в суть и предложили классный UI. Очень довольны сотрудничеством.',
        },
        {
          name: 'Дмитрий Волков',
          company: 'FinInvest',
          text: 'Сложный финтех проект реализовали без запинок. Особенно порадовала чистота кода и готовность архитектуры к масштабированию.',
        }
      ]
    },
    faq: {
      title: 'FAQ',
      items: [
        {
          q: 'Какие технологии вы используете?',
          a: 'Мы специализируемся на современном стеке: React, Vue, Next.js для frontend; Node.js, NestJS, Python для backend. Для мобильной разработки используем React Native и Flutter.'
        },
        {
          q: 'Как строится процесс работы?',
          a: 'Аналитика и ТЗ -> Дизайн (UI/UX) -> Разработка -> Тестирование -> Релиз и поддержка. Мы работаем по Agile (спринты), поэтому вы всегда видите промежуточный результат.'
        },
        {
          q: 'Сколько времени занимает разработка сайта?',
          a: 'Сроки зависят от сложности. Простой лендинг — от 2 недель. Корпоративный сайт — 1-2 месяца. Сложные веб-сервисы — от 3 месяцев.'
        },
        {
          q: 'Вы оказываете техническую поддержку после сдачи проекта?',
          a: 'Да, мы предоставляем гарантийную поддержку и предлагаем SLA-контракты на дальнейшее развитие, обновление и мониторинг вашего проекта.'
        }
      ]
    },
    contact: {
      title: '[ Связаться ]',
      heading1: 'Готовы начать',
      headingHighlight: 'что-то великое?',
      desc: 'Оставьте заявку, и наш менеджер свяжется с вами в течение часа для обсуждения деталей вашего проекта.',
      name: 'Ваше имя',
      namePlaceholder: 'Иван Иванов',
      contact: 'Email или Telegram',
      contactPlaceholder: '@username',
      project: 'О проекте',
      projectPlaceholder: 'Кратко опишите вашу задачу...',
      submit: 'Отправить заявку',
      submitted: 'Отправлено!'
    },
    footer: {
      rights: 'Все права защищены'
    }
  },
  en: {
    seo: {
      title: 'EmKodZ | Creating artifacts of the future',
      description: 'EmKodZ Studio creates digital products for visionaries. Development of corporate websites, mobile apps, UI/UX design.',
      keywords: 'website creation, web studio, mobile app development, ui/ux design'
    },
    nav: {
      services: 'Services',
      process: 'Process',
      techStack: 'Technologies',
      portfolio: 'Portfolio',
      calculator: 'Calculator',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: '[ Contact Us ]',
    },
    hero: {
      tagline: 'Digital Studio / 2026',
      title1: 'We ',
      titleHighlight: 'code',
      title2: ' meanings,\nnot just interfaces.',
      desc: 'EmKodZ Studio creates digital products for visionaries. We don\'t do templates — we create artifacts of the future.',
      btnDiscuss: 'Discuss Project',
      btnWorks: 'View Works',
      live: 'LIVE',
      perfTitle: 'High Performance',
      perfDesc: 'Optimization at all levels',
    },
    services: {
      title: '// Our Competencies',
      items: [
        {
          title: 'Web Development',
          desc: 'We create modern corporate websites, landing pages, and complex web applications on relevant stacks (React, Vue, Node.js).'
        },
        {
          title: 'Mobile Apps',
          desc: 'Development of native and cross-platform applications for iOS and Android focusing on UX and performance.'
        },
        {
          title: 'UI/UX Design',
          desc: 'We design intuitive interfaces. From wireframes to interactive prototypes and design systems.'
        },
        {
          title: 'Backend & API',
          desc: 'Reliable server architecture, database design, and REST/GraphQL API development for your services.'
        },
        {
          title: 'SEO Optimization',
          desc: 'Technical optimization of websites for search engines, improving Core Web Vitals and increasing visibility.'
        },
        {
          title: 'Support and Audit',
          desc: 'We ensure smooth operation of projects, perform code refactoring, and security audits.'
        }
      ]
    },
    process: {
      title: '// Work Process',
      items: [
        {
          step: '01',
          title: 'Analytics & BRD',
          desc: 'We dive into your business, conduct audits, and create detailed technical specifications.',
        },
        {
          step: '02',
          title: 'Design & Prototyping',
          desc: 'We create interactive prototypes and develop a unique, user-centric design.',
        },
        {
          step: '03',
          title: 'Development',
          desc: 'We write clean, scalable code using modern technologies and frameworks.',
        },
        {
          step: '04',
          title: 'Testing & Release',
          desc: 'We thoroughly test the product on all devices before a successful launch.',
        }
      ]
    },
    techStack: {
      title: '// Technologies',
      desc: 'We use only proven and relevant tools to create reliable digital products.',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        mobile: 'Mobile',
        design: 'Design'
      }
    },
    portfolio: {
      title: '// Portfolio',
      categories: {
        'Fintech App': 'Fintech App',
        'E-commerce': 'E-commerce',
        'Corporate Portal': 'Corporate Portal',
        'Web3 Dashboard': 'Web3 Dashboard'
      }
    },
    calculator: {
      title: 'Calculator',
      pages: 'Complexity (Pages)',
      designLevel: 'Design Level',
      designBasic: 'Basic',
      designBasicDesc: 'Template solutions',
      designUnique: 'Unique',
      designUniqueDesc: 'Custom UI/UX',
      designPremium: 'Premium',
      designPremiumDesc: 'Complex animations & 3D',
      backend: 'Backend / CMS Development',
      backendDesc: 'Admin panel, databases, API',
      total: 'Total:',
      order: 'Order Estimate',
      currency: '₽'
    },
    reviews: {
      title: 'Reviews:',
      items: [
        {
          name: 'Alex Ivanov',
          company: 'TechCorp',
          text: 'EmKodZ exceeded all expectations. Their attention to detail and delivery times are top-notch. The new site converts 3 times better.',
        },
        {
          name: 'Elena Smirnova',
          company: 'EcoLife',
          text: 'We were looking for a team to create a mobile app. The guys quickly got the idea and offered a cool UI. Very happy with the cooperation.',
        },
        {
          name: 'Dmitry Volkov',
          company: 'FinInvest',
          text: 'The complex fintech project was implemented without a hitch. I was especially pleased with the clean code and the architecture\'s readiness for scaling.',
        }
      ]
    },
    faq: {
      title: 'FAQ',
      items: [
        {
          q: 'What technologies do you use?',
          a: 'We specialize in modern stacks: React, Vue, Next.js for frontend; Node.js, NestJS, Python for backend. For mobile development, we use React Native and Flutter.'
        },
        {
          q: 'How is the work process structured?',
          a: 'Analytics and BRD -> Design (UI/UX) -> Development -> Testing -> Release and Support. We work using Agile (sprints), so you always see the intermediate result.'
        },
        {
          q: 'How long does website development take?',
          a: 'Deadlines depend on complexity. A simple landing page — from 2 weeks. A corporate website — 1-2 months. Complex web services — from 3 months.'
        },
        {
          q: 'Do you provide technical support after project delivery?',
          a: 'Yes, we provide warranty support and offer SLA contracts for further development, updates, and monitoring of your project.'
        }
      ]
    },
    contact: {
      title: '[ Contact ]',
      heading1: 'Ready to start',
      headingHighlight: 'something great?',
      desc: 'Leave a request, and our manager will contact you within an hour to discuss the details of your project.',
      name: 'Your Name',
      namePlaceholder: 'John Doe',
      contact: 'Email or Telegram',
      contactPlaceholder: '@username',
      project: 'About the project',
      projectPlaceholder: 'Briefly describe your task...',
      submit: 'Submit Request',
      submitted: 'Submitted!'
    },
    footer: {
      rights: 'All rights reserved'
    }
  }
};
