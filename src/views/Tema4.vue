<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tema 4

    .bloque-texto-g.color-primario.br-right.p-3.p-sm-4.p-md-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 El almacenamiento en la nube es la columna vertebral de la colaboración moderna. Microsoft 365 ofrece soluciones robustas como OneDrive y SharePoint, diseñadas para satisfacer las necesidades de almacenamiento individual y organizacional, respectivamente. La gestión eficiente de estas unidades, asegurando la disponibilidad, el acceso adecuado y la protección de los datos, es un saber de proceso fundamental para el administrador.


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Arquitectura de almacenamiento en Microsoft 365: OneDrive y SharePoint

    .row.justify-content-center
      .col-lg-5.col-md-6.col-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/2.png', alt='')
      .col-lg-7(data-aos="fade-left")
        p Comprender la diferencia arquitectónica y de propósito entre OneDrive y SharePoint es esencial para una correcta administración. OneDrive está diseñado para el almacenamiento personal y privado del usuario; es el equivalente moderno de la carpeta "Mis Documentos" en un disco duro local. Por defecto, los archivos en OneDrive son privados hasta que el usuario decide compartirlos explícitamente. Es ideal para borradores, apuntes de clase o documentos en etapas iniciales de desarrollo.
        .cajon.color-primario.bg1.p-4.mb-4
          p.mb-0 Por otro lado, SharePoint es la plataforma de colaboración y gestión documental a nivel de equipo y organización. Es el motor que impulsa el almacenamiento detrás de Microsoft Teams y los sitios de intranet institucionales. Los archivos en SharePoint están diseñados para ser compartidos y trabajados en conjunto desde el primer momento, sujetos a los permisos del sitio o equipo correspondiente.
        p El administrador debe guiar a la organización en el uso correcto de estas herramientas. Una analogía útil en el contexto educativo es comparar OneDrive con el casillero personal de un aprendiz (privado y personal) y SharePoint con la biblioteca del centro de formación (público o restringido a grupos específicos, pero siempre orientado al recurso compartido). La configuración de las cuotas de almacenamiento y los límites de sincronización son tareas administrativas clave para garantizar un uso equitativo de los recursos.


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2 Políticas de acceso, uso compartido y disponibilidad de la información

    .bg-color-acento-contenido.mb-4(data-aos="fade")
      .row.justify-content-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/3.png', alt='')
        .col-lg-7
          .p-4.h-100.d-flex.flex-column.justify-content-center
            img.w-85x.mb-3(src='@/assets/curso/temas/t4/4.svg', alt='')
            p.text-white.mb-0 La disponibilidad de la información debe estar siempre balanceada con el acceso seguro. Microsoft 365 permite una configuración granular de cómo se comparte la información tanto dentro como fuera de la organización. El administrador debe configurar las políticas de uso compartido externo a nivel de inquilino (#[em tenant]) y de sitio, determinando si los usuarios pueden compartir archivos con personas ajenas a la institución y en qué condiciones. 
    
    p Por ejemplo, para un sitio de SharePoint que contiene material de apoyo general del SENA, se puede permitir el uso compartido externo con cualquier persona que tenga el enlace (acceso anónimo). Sin embargo, para un equipo de Teams del área financiera que maneja presupuestos de la regional, la política debe restringir estrictamente el uso compartido solo a miembros específicos de la organización.

    .row.justify-content-center(data-aos="fade")
      .col-lg-1.col-md-2.col-4.mb-3.mb-md-0
        img(src='@/assets/curso/temas/t4/5.svg', alt='')
      .col-lg-11.col-md-10
        p El administrador también gestiona la disponibilidad de la información mediante la configuración de versiones de documentos y la papelera de reciclaje, permitiendo la recuperación rápida de archivos eliminados o modificados accidentalmente. Esto asegura que la información vital esté siempre disponible para quienes la necesitan, minimizando el impacto de los errores humanos o fallas técnicas.


    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3 Estrategias de retención y prevención de pérdida de datos (DLP)

    .tarjeta.bgi-1.p-4.p-lg-5.pb-lg-4.mb-5(data-aos="fade")      
      SlyderA(tipo='b')
        .row.justify-content-center.mb-4
          .col-lg-6.col-11
            p.text-white En la era digital, la pérdida de datos (ya sea accidental o malintencionada) puede tener consecuencias devastadoras. La prevención de pérdida de datos (DLP) es un conjunto de herramientas y procesos diseñados para identificar, supervisar y proteger la información confidencial en todo Microsoft 365. El administrador debe configurar políticas DLP que analicen el contenido de correos electrónicos, documentos y chats en busca de datos sensibles (como números de identificación nacional o información financiera) y apliquen acciones de protección.
          .col-lg-6.col-11.col-md-9
            img(src='@/assets/curso/temas/t4/slider1-1.png', alt='')
        .row.justify-content-center.mb-4
          .col-lg-6.col-11
            p.text-white Por ejemplo, si un instructor intenta enviar un archivo de Excel con un listado de calificaciones y números de identificación de los aprendices a su correo personal de Gmail (lo cual podría violar las políticas de protección de datos), la política DLP puede configurarse para detectar este patrón, bloquear el envío y enviar una notificación tanto al usuario (explicando la política) como al administrador (para auditoría).
          .col-lg-6.col-11.col-md-9
            img(src='@/assets/curso/temas/t4/slider1-2.png', alt='')
        .row.justify-content-center.mb-4
          .col-lg-6.col-11
            p.text-white Las estrategias de retención, por su parte, determinan cuánto tiempo se debe conservar la información y cuándo debe eliminarse. El administrador configura políticas de retención para asegurar que los registros importantes (como actas de comités académicos o contratos) se conserven durante el tiempo legalmente requerido, y que la información obsoleta se elimine de manera segura para liberar espacio y reducir el riesgo de exposición. Estas estrategias son el nivel más alto de la administración de almacenamiento en la nube y demuestran la capacidad del aprendiz para gestionar la información según los requerimientos de seguridad y normativos de la organización.
          .col-lg-6.col-11.col-md-9
            img(src='@/assets/curso/temas/t4/slider1-3.png', alt='')

    p.mb-4 Se invita al aprendiz a explorar el siguiente recurso de audio, que permite comprender el papel que cumple la identidad digital en la seguridad y el uso responsable de las tecnologías de la información.

    .bg-color-primario
      img(src='@/assets/curso/temas/t4/podcast.png', alt='')
      .p-4
        .bg-white.tarjeta.p-4
          TarjetaAudio.color-acento-botones(
            texto="Pódcast: La identidad digital como base de la seguridad"
            :audio="require('@/assets/componentes/audios/Podcast_CF1_21720191.mp3.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
            .indicador--click(v-if="mostrarIndicadorTarjetaAudio")


</template>

<script>
export default {
  name: 'Tema4',
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
