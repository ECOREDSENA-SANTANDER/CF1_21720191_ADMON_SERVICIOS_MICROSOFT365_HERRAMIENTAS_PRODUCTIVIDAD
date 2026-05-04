<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p La administración de Microsoft 365 trasciende la simple configuración técnica; es un ejercicio estratégico de gobernanza digital que habilita la operatividad, la seguridad y la colaboración en las organizaciones 4.0. A lo largo de este componente, se estableció que el núcleo de esta gestión comienza con la identidad digital y la autenticación robusta, garantizando que el acceso a los recursos esté estrictamente controlado. A partir de allí, la administración del ciclo de vida del usuario, la asignación eficiente de licencias y la delegación precisa de roles (RBAC) se perfilan como procesos fundamentales para optimizar los recursos tecnológicos y humanos, asegurando que cada miembro de la organización disponga de las herramientas necesarias para su rol, sin comprometer la seguridad global del entorno.

    p.mb-4 Por otro lado, la protección de la información y la gestión del almacenamiento en la nube constituyen la salvaguarda de la memoria institucional y la continuidad del negocio. La implementación de políticas de seguridad, la defensa contra amenazas avanzadas y el fomento de una cultura de ciudadanía digital son imperativos ineludibles. Simultáneamente, la arquitectura de almacenamiento compartida (SharePoint) y personal (OneDrive), respaldada por estrategias de prevención de pérdida de datos (DLP) y retención, asegura que la información sea accesible, colaborativa y esté protegida frente a vulnerabilidades internas y externas, cumpliendo así con los resultados de aprendizaje planteados para este curso de formación profesional.

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual que resume el componente de “Gestión administrativa y seguridad de entornos Microsoft 365” en cuatro pilares interconectados: Identidad y acceso seguro (modelos de identidad y autenticación); Gestión de usuarios y recursos (ciclo de vida, licencias y roles); Seguridad y cumplimiento (protección contra amenazas, políticas y ciudadanía digital); y Almacenamiento en la nube (arquitectura, uso compartido y protección de datos). ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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
