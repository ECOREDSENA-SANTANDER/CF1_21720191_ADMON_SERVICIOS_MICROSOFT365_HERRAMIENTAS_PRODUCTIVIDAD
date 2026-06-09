<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .mb-4
      img(src='@/assets/curso/temas/intro/1.png', alt='')
    
    p.mb-4 El avance acelerado de las Tecnologías de la Información y la Comunicación (TIC) ha transformado radicalmente la manera en que las organizaciones y las instituciones educativas operan, colaboran y gestionan su información. En el contexto de la cuarta revolución industrial, o Industria 4.0, la administración eficiente de plataformas en la nube se ha convertido en una competencia fundamental para los profesionales de todos los sectores. El presente componente fundamenta el programa “Administración de servicios Microsoft 365 y herramientas de productividad para las organizaciones 4.0”, diseñado específicamente para dotar al aprendiz del Servicio Nacional de Aprendizaje (SENA) de las herramientas teóricas, técnicas y prácticas necesarias para gestionar ecosistemas digitales empresariales y educativos. A través de la asimilación de estos contenidos, el participante aprenderá a gestionar aplicaciones, servicios, roles de usuarios y niveles de seguridad, garantizando la operatividad y protección de los datos en entornos basados en Microsoft 365.

    .row.bgcolor-1.align-items-center.p-2.p-md-4.mb-4(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center
        
          .row.justify-content-center.mb-4
            .col-lg-5.col-md-9.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/intro/2.png', alt='')
            .col-lg-7
              .row.justify-content-center
                .col-lg-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/intro/3.svg', alt='')
                .col-lg-10
                  p.mb-0 El dominio de estos saberes resultará de vital importancia para el aprendiz, ya que le permitirá no solo operar una herramienta tecnológica, sino comprender la lógica subyacente a la administración de infraestructuras en la nube. Le servirá para insertarse competitivamente en un mercado laboral que demanda administradores de sistemas informáticos capaces de configurar políticas de acceso, asignar recursos de almacenamiento y salvaguardar la integridad de la información institucional. En un entorno de formación profesional integral, este conocimiento trasciende lo técnico; capacita al individuo para tomar decisiones estratégicas que optimizan la productividad, reducen los riesgos de vulnerabilidad informática y promueven una cultura de uso responsable de los recursos digitales. 

    p.mb-4 El abordaje de los contenidos se realizará desde una perspectiva pedagógica constructivista y aplicada, donde la conceptualización técnica se entrelaza constantemente con escenarios reales de la formación profesional y el sector productivo. Se explorarán, de manera secuencial y progresiva, los fundamentos de la identidad digital, la gestión del ciclo de vida de los usuarios, las políticas de seguridad de la información y la administración del almacenamiento en la nube. Cada sección está diseñada para explicar el "por qué" y el "para qué" de cada configuración, alejándose de la simple memorización de clics en una interfaz que está en constante cambio, para centrarse en los principios universales de la administración de servicios informáticos.

    .cajon.color-primario.bg1.p-4.mb-4
      p.mb-0 Finalmente, la importancia de este curso en el proceso formativo del aprendiz radica en su alineación directa con las necesidades del sector productivo moderno. Al dominar la gestión de usuarios, roles, dispositivos y seguridad en Microsoft 365, el futuro profesional se convierte en un agente facilitador del trabajo colaborativo y seguro. Este documento guía el camino para alcanzar el resultado de aprendizaje propuesto, asegurando que el aprendiz adquiera una visión holística y crítica de la administración de servicios en la nube, preparándolo para enfrentar los retos de conectividad, seguridad y productividad que definen a las organizaciones de la era digital.

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
