<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Seguridad de la información y uso responsable de los recursos digitales

    .row.justify-content-center(data-aos="fade")
      .col-lg-1.col-md-2.col-4.mb-3.mb-md-0
        img(src='@/assets/curso/temas/t3/1.svg', alt='')
      .col-lg-11.col-md-10
        p En el ecosistema de Microsoft 365, la seguridad de la información no es una capa añadida al final del proceso, sino un pilar transversal que debe integrarse desde el diseño mismo de la arquitectura digital. Para las organizaciones 4.0, la protección de los datos ha dejado de ser un tema exclusivamente técnico para convertirse en un imperativo estratégico y normativo. En este apartado, se aborda cómo configurar, según las políticas de la organización, los niveles de seguridad y fomentar el uso responsable, un proceso fundamental que el administrador debe ejecutar no solo protegiendo los sistemas, sino educando a los usuarios finales.


    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Políticas de seguridad y cumplimiento normativo en organizaciones 4.0

    .row.bgcolor-1.align-items-center.p-3.py-4.p-md-4.py-md-5.mb-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-8
              .row.justify-content-center.mb-4
                .col-lg-auto.d-none.d-lg-block
                  img.w-85x(src='@/assets/curso/temas/t3/2.svg', alt='')
                .col-lg
                  p.mb-0 Las políticas de seguridad son el marco rector que define como una institución protege sus activos de información. En el contexto de un entorno virtual de aprendizaje o una empresa moderna, estas políticas deben equilibrar la necesidad de protección con la facilidad de acceso y la colaboración. Microsoft 365 proporciona un conjunto de herramientas dentro del Centro de Cumplimiento (Microsoft Purview) para traducir estas políticas documentales en configuraciones técnicas aplicables automáticamente.
              p.mb-lg-0 El cumplimiento normativo es un aspecto crítico. Las instituciones educativas y las empresas están sujetas a leyes de protección de datos personales (como la Ley 1581 de 2012 en Colombia) y normativas internacionales si operan a escala global (como el GDPR europeo). La plataforma permite configurar etiquetas de confidencialidad y retención que ayudan a clasificar la información automáticamente. Por ejemplo, un documento etiquetado como "Confidencial - Datos Estudiantiles" puede configurarse para que no pueda ser reenviado fuera de la organización o impreso, garantizando el cumplimiento de la ley sin depender de la acción manual del usuario. 
            .col-lg-4.col-md-7.col-10
              img(src='@/assets/curso/temas/t3/3.svg', alt='')

    p.mb-4 Desde una perspectiva pedagógica, el administrador debe comprender que la implementación de estas políticas no se trata de imponer restricciones arbitrarias, sino de construir un entorno de confianza. Al configurar las políticas de seguridad en Microsoft 365, se está enseñando implícitamente a los usuarios a valorar y proteger la información institucional.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Diagrama de política de seguridad organizacional
        figure
          img(src='@/assets/curso/temas/t3/fig3.svg', alt="Un diagrama jerárquico que muestra cómo la 'Política de seguridad organizacional' (nivel estratégico) en la parte superior se ramifica hacia abajo en tres categorías de controles técnicos: 'Etiquetas de confidencialidad' (público, general, confidencial y secreto), 'Políticas de DLP' (bloquear compartición externa, monitorear transferencias y auditar accesos) y 'Controles de acceso condicional' (exigir MFA, restringir dispositivos no gestionados y limitar acceso a apps). Orientado a arquitectura Microsoft.")


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Configuración de niveles de seguridad y protección contra amenazas

    .row.justify-content-center.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/4.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .tarjeta.bg2.p-4.mb-4
          .row.justify-content-around.align-items-center
            .col-lg-4.col-md-6.col-10.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/t3/5.svg', alt='')
            .col-lg-7
              p.mb-0 La protección contra amenazas en Microsoft 365 se basa en una arquitectura de defensa en profundidad, que combina múltiples capas de seguridad para detectar, prevenir y responder a incidentes. El administrador debe dominar la configuración de herramientas como Microsoft Defender for Office 365, que protege contra el #[em phishing], el #[em malware] y los ataques de suplantación de identidad (#[em spoofing]) dirigidos a través del correo electrónico y herramientas de colaboración.
        p Una de las configuraciones más críticas es la protección contra enlaces seguros y archivos adjuntos seguros. Cuando un usuario recibe un correo con un enlace sospechoso, Microsoft Defender analiza el destino en tiempo real; si es malicioso, bloquea el acceso. De manera similar, los archivos adjuntos se ejecutan en un entorno aislado (#[em sandbox]) antes de ser entregados al usuario, neutralizando posibles amenazas antes de que comprometan el equipo.

    .cajon.color-primario.bg1.p-4
      p.mb-0 Además, la configuración de políticas de acceso condicional (Conditional Access) en Microsoft Entra ID permite establecer reglas granulares sobre quién, desde dónde y en qué condiciones puede acceder a los recursos. Por ejemplo, una política puede exigir autenticación multifactor (MFA) solo si el usuario intenta iniciar sesión desde una ubicación fuera del país de origen de la institución, o bloquear el acceso a aplicaciones sensibles si el dispositivo del usuario no cumple con los requisitos de seguridad establecidos. Estas configuraciones son esenciales, ya que demuestran la capacidad del administrador para gestionar los niveles de acceso de forma inteligente y adaptativa.


    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Fomento de la ciudadanía digital y el uso responsable

    .row.justify-content-center
      .col-lg-5.col-md-6.col-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t3/6.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p La tecnología por sí sola no puede garantizar la seguridad; el factor humano es a menudo el eslabón más débil. Por lo tanto, el rol del administrador trasciende la configuración técnica para incluir la promoción de una cultura de seguridad y el uso responsable de los recursos digitales. En el contexto de la formación profesional, esto se alinea con el desarrollo de competencias blandas relacionadas con la ciudadanía digital.
        p.mb-4 El administrador debe aprovechar las herramientas de Microsoft 365 para educar y concientizar. Por ejemplo, las campañas de simulación de ataques (#[em Attack Simulation Training]) permiten enviar correos de #[em phishing] simulados a los usuarios. Si un aprendiz o instructor cae en la trampa, el sistema no lo penaliza, sino que le ofrece capacitación inmediata (#[em micro-learning]) sobre cómo identificar las señales de un ataque real. Este enfoque transforma un evento de riesgo potencial en una oportunidad de aprendizaje, reforzando la dimensión pedagógica del rol del administrador.
        .cajon.color-primario.bg1.p-4
          p.mb-0 El uso responsable también implica la gestión de los recursos de la organización. El administrador debe establecer políticas claras sobre el uso aceptable de OneDrive, Microsoft Teams y el correo electrónico, comunicándolas de manera efectiva a la comunidad. Al fomentar un comportamiento ético y seguro en línea, el administrador contribuye a la formación de ciudadanos digitales responsables, preparados para desenvolverse en las organizaciones 4.0.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
