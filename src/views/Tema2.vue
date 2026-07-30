<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión del talento humano y recursos digitales: usuarios, licencias y roles

    .mb-4
      img(src='@/assets/curso/temas/t2/1.png', alt='')
    
    p Superada la capa fundacional de la identidad y el acceso, la administración de Microsoft 365 se adentra en la operatividad diaria de la organización. La asignación de usuarios, licencias y roles constituye el núcleo de la administración de recursos disponibles, siendo un eje central del resultado de aprendizaje de este curso. Este componente requiere que el administrador no solo domine la interfaz de configuración, sino que posea una visión estratégica para alinear los recursos informáticos con las funciones organizacionales reales, garantizando eficiencia, seguridad y control de costos.

    
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Creación y administración del ciclo de vida del usuario

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-8.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t2/2.png', alt='')
      .col-lg-7
        .row.justify-content-center.mb-4
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/3.svg', alt='')
          .col-lg-10
            p.mb-0 La gestión de usuarios no es un evento aislado, sino un proceso continuo que acompaña a un individuo desde que ingresa a la organización hasta que se retira. Este recorrido se conoce como el ciclo de vida de la identidad (#[em Joiner, Mover, Leaver] - JML). Administrar este ciclo implica configurar metódicamente los accesos según el estado actual de la persona dentro de la institución, asegurando que la disponibilidad de las herramientas productivas sea oportuna y segura.
        p El proceso de "ingreso" (#[em joiner]) abarca la creación de la cuenta de usuario. Pedagógicamente, esto implica entender qué datos son esenciales para que la plataforma funcione correctamente en el contexto institucional. No se trata solo de ingresar un nombre; el administrador debe diligenciar metadatos clave como el departamento, el cargo, la ciudad y quién es el superior jerárquico del usuario. Esta información no es un mero adorno; es el motor que impulsa funcionalidades avanzadas posteriores, como la creación automática de organigramas en la aplicación Teams o la asignación dinámica de políticas de seguridad basadas en el departamento del empleado.

    p.mb-4 El proceso de "movimiento" (#[em mover]) ocurre cuando un usuario cambia de rol dentro de la misma organización. Por ejemplo, si un aprendiz egresa y es contratado inmediatamente como personal de apoyo en un centro de formación SENA. En este escenario, el administrador debe modificar la cuenta existente, retirando los accesos que correspondían a su etapa de estudiante y otorgando los nuevos privilegios administrativos, evitando la creación de cuentas duplicadas que generan confusión y vulnerabilidades de seguridad.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.br-left.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/4.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Finalmente, el proceso de "salida" (#[em leaver]) es quizás el más crítico en términos de seguridad de la información. Cuando un colaborador o contratista finaliza su vinculación, el administrador debe ejecutar un procedimiento estricto: bloquear inmediatamente el inicio de sesión del usuario, revocar sus sesiones activas en todos los dispositivos y decidir el destino de sus datos (como correos electrónicos y archivos en OneDrive). A menudo, esto implica convertir el buzón del exempleado en un "buzón compartido" gratuito y delegar su acceso al jefe de área, permitiendo conservar la memoria institucional sin consumir una licencia paga, lo cual demuestra una gestión eficiente de los recursos disponibles.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Ciclo de vida del usuario
        figure
          img(src='@/assets/curso/temas/t2/fig2.svg', alt="Línea de tiempo horizontal de tres fases que ilustra el ciclo de vida del usuario (Ingreso, Movimiento, Salida) y las acciones administrativas asociadas para la gestión de identidades basada en ITIL. Cada fase está codificada por colores (verde, naranja, gris) y presenta iconos y una lista de tareas de gestión de identidades, desde el aprovisionamiento de cuentas hasta el cierre y la recuperación de activos. ")


    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Estrategias de asignación y optimización de licencias

    .row.bgcolor-1.align-items-center.p-3.py-4.p-md-4.py-md-5.mb-4(data-aos="fade")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center

          .row.justify-content-center.align-items-center
            .col-lg-8
              .row.justify-content-center.mb-4
                .col-lg-auto.d-none.d-lg-block
                  img.w-85x(src='@/assets/curso/temas/t2/5.svg', alt='')
                .col-lg
                  p.mb-0 Microsoft 365 opera bajo un modelo de #[em software] como servicio (SaaS) suscripcional, donde el acceso a las herramientas productivas está dictado por las licencias asignadas a cada cuenta de usuario. La gestión de licencias es una responsabilidad crítica, ya que impacta directamente en el presupuesto de la organización 4.0. Un administrador competente debe comprender profundamente qué incluye cada nivel de licenciamiento para asignar el recurso preciso según las necesidades del usuario, evitando el desperdicio económico ("sobrelicenciamiento") o la limitación técnica ("sublicenciamiento").
              p.mb-0 En el sector educativo e institucional, las licencias se categorizan habitualmente en niveles (como la serie A para educación: A1, A3, A5; o la serie E para empresas: E1, E3, E5). La licencia básica (p. ej. A1) generalmente proporciona acceso gratuito a las versiones web de aplicaciones como Word, Excel y correo electrónico, siendo ideal para aprendices que requieren herramientas de productividad estándar sin necesidad de instalaciones locales en sus equipos personales. Por otro lado, licencias superiores (p. ej. A3 o A5) incluyen las aplicaciones de escritorio completas instalables, análisis avanzado de datos y características de seguridad perimetral complejas, recursos que resultan pertinentes para personal administrativo o instructores que manejan bases de datos pesadas o información altamente confidencial.
            .col-lg-4.col-md-7
              img(src='@/assets/curso/temas/t2/6.svg', alt='')

    .bg-color-acento-contenido.mb-4(data-aos="fade")
      .row.justify-content-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t2/7.png', alt='')
        .col-lg-7
          .p-4.h-100.d-flex.flex-column.justify-content-center
            img.w-85x.mb-3(src='@/assets/curso/temas/t2/8.svg', alt='')
            p.text-white.mb-0 El administrador debe aplicar estrategias de optimización. Una práctica recomendada es la asignación de licencias basada en grupos en lugar de asignaciones directas usuario por usuario. Al vincular un paquete de licencias a un grupo de seguridad de Microsoft Entra (por ejemplo, el grupo "Instructores_Planta"), cualquier nuevo usuario agregado a ese grupo hereda automáticamente las licencias correspondientes. Esto no solo agiliza el trabajo administrativo y reduce el margen de error humano, sino que garantiza que los recursos se asignen de manera estandarizada y coherente con las políticas de la organización. 


    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Delegación de administración a través de roles basados en RBAC

    p.mb-4 En organizaciones de gran envergadura, como una red nacional de centros de formación, es operativamente inviable y altamente inseguro que un solo individuo o un grupo minúsculo concentre todo el poder administrativo del sistema. Para resolver este desafío, Microsoft 365 implementa el modelo de Control de Acceso Basado en Roles (RBAC, por sus siglas en inglés). La comprensión de este modelo es esencial para gestionar los roles de usuarios y administrar los dispositivos de forma escalonada y segura.

    .bloque-texto-g.color-primario.br-right.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El principio fundamental de RBAC y de la seguridad de la información en general es el "privilegio mínimo". Esto dicta que a un usuario se le deben otorgar únicamente los permisos estrictamente necesarios para realizar sus tareas laborales, ni uno más. Por defecto, el usuario que crea el entorno de Microsoft 365 asume el rol de "administrador global", teniendo acceso irrestricto a todas las configuraciones, datos y suscripciones. Otorgar este rol indiscriminadamente a otros colaboradores equivale a entregar las llaves maestras de toda la institución a cualquier empleado, lo cual representa un riesgo de seguridad inaceptable.

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/10.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t2/11.svg', alt='')
          .col-lg-10
            p.mb-0 Para aplicar una delegación responsable, el sistema ofrece una amplia jerarquía de roles especializados. Por ejemplo, en un escenario aplicado a la formación profesional, a un funcionario de la mesa de ayuda técnica regional se le puede asignar el rol de "Administrador del servicio de asistencia" (#[em Helpdesk Admin]), lo que le permite restablecer contraseñas de los aprendices y forzar el cierre de sesiones atascadas, pero le impide tajantemente ver los correos electrónicos de la dirección o modificar las facturaciones de licencias. De manera similar, a un coordinador académico se le podría otorgar el rol de "Administrador de usuarios" para que pueda crear cuentas de nuevos instructores en su centro, sin poder alterar las políticas globales de seguridad.

    p La asignación correcta de estos roles garantiza una gestión distribuida, ágil y auditable. El administrador principal diseña la arquitectura de delegación, estableciendo quién tiene autoridad sobre qué subconjunto de usuarios o herramientas, configurando así, según las políticas de la organización, los niveles de acceso y roles en las herramientas productivas. 


</template>

<script>
export default {
  name: 'Tema2',
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
