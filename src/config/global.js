export default {
  global: {
    Name: 'Gestión administrativa y seguridad de entornos Microsoft 365',
    Description:
      'El componente Gestión administrativa y seguridad de entornos Microsoft 365 desarrolla habilidades para configurar, administrar y proteger recursos tecnológicos en la nube desde una perspectiva estratégica e integral. Promueve la gestión eficiente de identidades, la implementación rigurosa de políticas de seguridad y la consolidación de ecosistemas colaborativos seguros, alineados con el cumplimiento normativo, la operatividad y las demandas productivas de las organizaciones 4.0.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Configuración básica en Microsoft 365: identidad y autenticación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Fundamentos de la identidad digital en entornos corporativos y educativos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Modelos de identidad en Microsoft: nube, sincronizada y federada',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Mecanismos de autenticación y acceso seguro (MFA y SSO)',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Gestión del talento humano y recursos digitales: usuarios, licencias y roles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Creación y administración del ciclo de vida del usuario',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estrategias de asignación y optimización de licencias',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Delegación de administración a través de roles basados en RBAC',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Seguridad de la información y uso responsable de los recursos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Políticas de seguridad y cumplimiento normativo en organizaciones 4.0',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Configuración de niveles de seguridad y protección contra amenazas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Fomento de la ciudadanía digital y el uso responsable',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Administración de unidades de almacenamiento en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Arquitectura de almacenamiento en Microsoft 365: OneDrive y SharePoint',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Políticas de acceso, uso compartido y disponibilidad de la información',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Estrategias de retención y prevención de pérdida de datos (DLP)',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Directorio activo (Active Directory - AD)',
      significado:
        'Servicio de directorio de Microsoft utilizado para la gestión centralizada de identidades y accesos en entornos de red locales.',
    },
    {
      termino: 'Autenticación multifactor (MFA)',
      significado:
        'Método de seguridad que requiere al usuario proporcionar dos o más formas de evidencia (contraseña, dispositivo móvil, biometría) antes de conceder acceso.',
    },
    {
      termino: 'Buzón compartido',
      significado:
        'Cuenta de correo electrónico de Microsoft 365 a la que pueden acceder varios usuarios simultáneamente; no requiere una licencia de usuario de pago.',
    },
    {
      termino: 'Centro de Cumplimiento (Microsoft Purview)',
      significado:
        'Portal de administración donde se configuran las políticas de protección de datos, retención y clasificación de la información.',
    },
    {
      termino: 'Ciudadanía digital',
      significado:
        'Uso responsable, ético, seguro y productivo de las tecnologías de la información y la comunicación.',
    },
    {
      termino: 'Ciclo de vida del usuario',
      significado:
        'Proceso integral de administración de una identidad digital desde su creación (ingreso), modificaciones (movimiento) hasta su desactivación (salida).',
    },
    {
      termino: 'DLP (prevención de pérdida de datos)',
      significado:
        'Conjunto de políticas y herramientas diseñadas para identificar, monitorear y proteger información confidencial, evitando su fuga o acceso no autorizado.',
    },
    {
      termino: 'Identidad federada',
      significado:
        'Modelo de identidad donde la autenticación de los usuarios se delega a un sistema de identidad externo, como un servidor local de <em>Active Directory</em>.',
    },
    {
      termino: 'Identidad híbrida',
      significado:
        'Entorno tecnológico que combina y sincroniza cuentas de usuario gestionadas localmente con cuentas residentes en la nube.',
    },
    {
      termino: 'Inquilino (<em>tenant</em>)',
      significado:
        'Instancia única y dedicada de los servicios en la nube de Microsoft 365 que representa a una organización específica.',
    },
    {
      termino: '<em>Malware</em>',
      significado:
        '<em>Software</em> malicioso diseñado para infiltrarse o dañar un sistema informático sin el consentimiento del propietario.',
    },
    {
      termino: 'OneDrive',
      significado:
        'Servicio de almacenamiento en la nube de Microsoft diseñado para alojar y sincronizar archivos personales y privados de cada usuario.',
    },
    {
      termino: '<em>Phishing</em> (suplantación de identidad)',
      significado:
        'Técnica de ingeniería social utilizada por ciberdelincuentes para obtener información confidencial engañando al usuario para que crea que interactúa con una entidad de confianza.',
    },
    {
      termino: 'RBAC (Control de Acceso Basado en Roles)',
      significado:
        'Método de asignación de permisos que otorga a los usuarios únicamente los niveles de acceso necesarios para cumplir con sus funciones laborales específicas.',
    },
    {
      termino: 'SharePoint',
      significado:
        'Plataforma de colaboración y gestión documental basada en la web, diseñada para el trabajo en equipo y el almacenamiento compartido a nivel organizacional.',
    },
    {
      termino: 'SSO (inicio de sesión único)',
      significado:
        'Sistema de autenticación que permite a un usuario acceder a múltiples aplicaciones independientes con una sola validación de credenciales.',
    },
    {
      termino: 'UPN (nombre principal de usuario)',
      significado:
        'El identificador principal de una cuenta en Microsoft Entra ID, que generalmente coincide con la dirección de correo electrónico del usuario.',
    },
  ],
  referencias: [
    {
      referencia:
        'Caballero, A., & Dominguez, R. (2022). Gestion de la seguridad y privacidad en entornos cloud y Microsoft 365. Editorial Ra-Ma.',
      link: '',
    },
    {
      referencia:
        'Gomez, P. (2021). Implementacion de arquitecturas hibridas y gestion de identidades con Microsoft Entra. Ediciones ENI.',
      link: '',
    },
    {
      referencia:
        'Lopez, M., & Fernandez, J. (2023). Ciberseguridad y cumplimiento normativo en las organizaciones 4.0: Casos practicos. Editorial Sintesis.',
      link: '',
    },
    {
      referencia:
        'Microsoft. (2024). Informacion general sobre la administracion de Microsoft 365. Microsoft Learn.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Tecnologias de la Informacion y las Comunicaciones [MinTIC]. (2022). Guia de adopcion y uso responsable de servicios en la nube para entidades y empresas. Gobierno de Colombia.',
      link: '',
    },
    {
      referencia:
        'Ramirez, C. (2021). Colaboracion y gestion documental en la nube educativa: OneDrive y SharePoint aplicados. Alfaomega Grupo Editor.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Bonza Reyes',
          cargo: 'Experto TIC',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Liliana Cristancho Cruz',
          cargo: 'Apoyo a la Evaluación instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
