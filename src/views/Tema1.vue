<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Configuración básica en Microsoft 365: identidad y autenticación

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.br-left.p-3.p-sm-4.p-md-5(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El cimiento sobre el cual se construye cualquier ecosistema de servicios en la nube es la correcta identificación de quién accede a los recursos y cómo demuestra que efectivamente es quien dice ser. En el marco de la gestión de aplicaciones y servicios administrativos de Microsoft 365, la identidad y la autenticación representan la primera línea de defensa y el punto de partida para cualquier configuración de seguridad y asignación de roles. Comprender estos conceptos no solo es un requisito técnico, sino una necesidad pedagógica para formar administradores conscientes de la importancia de proteger la información institucional. 

    
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Fundamentos de la identidad digital en entornos corporativos y educativos

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg-1.col-md-2.col-4.mb-3.mb-md-0
        img(src='@/assets/curso/temas/t1/2.svg', alt='')
      .col-lg-11.col-md-10
        p La identidad digital en un entorno corporativo o educativo trasciende la simple idea de un nombre de usuario y una contraseña. Se define como el conjunto de atributos, credenciales y derechos de acceso que representan a una persona, dispositivo o aplicación dentro de una red informática. En el ecosistema de Microsoft 365, esta identidad es gestionada principalmente por Microsoft Entra ID (anteriormente conocido como Azure Active Directory). La correcta configuración de la identidad es el primer paso para lograr el resultado de aprendizaje de este curso, ya que, sin una identidad claramente definida, es imposible gestionar aplicaciones, asignar licencias o establecer niveles de seguridad.

    .row.justify-content-center.mb-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/3.png', alt='')
      .col-lg-9(data-aos="fade-left")
        .tarjeta.bg2.p-4
          .row.justify-content-around
            .col-lg-5.col-md-7.col-10.mb-3.mb-lg-0
              img(src='@/assets/curso/temas/t1/4.svg', alt='')
            .col-lg-6
              p.mb-0 Desde una perspectiva pedagógica, se puede comprender la identidad digital comparándola con un documento de identidad físico dentro de un centro de formación del SENA. Al igual que el carnet de aprendiz contiene información vital (nombre, programa de formación, jornada) y permite el ingreso a ciertos ambientes físicos (laboratorios, biblioteca), la identidad digital en Entra ID encapsula las propiedades del usuario (cargo, departamento, ubicación) y determina a qué recursos virtuales (sitios de SharePoint, equipos de Teams, buzones de correo) puede acceder. Esta analogía facilita la comprensión del concepto, trasladándolo de un plano abstracto en la nube a una realidad tangible de la formación profesional.

    p.mb-4 En la práctica, la gestión de la identidad implica definir convenciones de nomenclatura claras para los nombres principales de usuario (UPN, por sus siglas en inglés), que generalmente coinciden con la dirección de correo electrónico principal. Por ejemplo, en una institución educativa, establecer un formato estandarizado como nombre.apellido@institucion.edu.co facilita la administración y proporciona una imagen profesional. La consistencia en la creación de estas identidades es crucial, ya que un error en esta etapa base genera complicaciones posteriores en la sincronización de directorios, la asignación de roles y la auditoría de accesos.

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span El núcleo de la seguridad
        figure
          img(src='@/assets/curso/temas/t1/fig1.svg', alt="Diagrama concéntrico que ilustra la seguridad centrada en la identidad en una arquitectura Microsoft. La ‘Identidad Digital’ es el núcleo central, rodeada de capas para la ‘Autenticación’, ‘Autorización’ y ‘Acceso a Aplicaciones y Datos’, cada una con iconos ilustrativos.")


    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Modelos de identidad en Microsoft: nube, sincronizada y federada

    p.mb-4 Las organizaciones 4.0 presentan arquitecturas informáticas diversas, lo que requiere que las plataformas en la nube se adapten a diferentes escenarios de infraestructura. Microsoft 365 ofrece tres modelos principales para el aprovisionamiento y la gestión de identidades, cuya elección depende de las políticas de la organización y sus requerimientos técnicos previos. La comprensión de estos modelos es indispensable para el aprendiz, ya que le permite tomar decisiones arquitectónicas que afectan directamente los niveles de seguridad y la experiencia del usuario final, componentes centrales del resultado de aprendizaje abordado.

    .tarjeta.bgi-1.p-4.p-lg-5.pb-lg-4(data-aos="fade")      
      SlyderA(tipo='b')
        .row.justify-content-center.mb-4
          .col-lg-6.col-11
            p.text-white El primer modelo es la "Identidad exclusiva en la nube" (#[em Cloud-only identity]). En este escenario, los usuarios, grupos y contactos se crean y gestionan enteramente dentro de Microsoft Entra ID. Es el modelo más sencillo y pedagógicamente el más fácil de implementar para organizaciones nuevas o pequeñas que no poseen servidores físicos locales. Por ejemplo, un centro de formación técnica de reciente creación que decide alojar toda su operación directamente en la nube optará por este modelo, evitando costos de infraestructura local y simplificando la administración a través de una única consola web. 
          .col-lg-6.col-11.col-md-9
            img(src='@/assets/curso/temas/t1/slider1-1.png', alt='')
        .row.justify-content-center.mb-4
          .col-lg-6.col-11
            p.text-white El segundo modelo es la "Identidad híbrida o sincronizada". Es el escenario más común en instituciones y empresas consolidadas que ya cuentan con un entorno local (#[em on-premises]) gobernado por un Windows Server Active Directory tradicional. En este caso, se utiliza una herramienta, como Microsoft Entra Connect, para sincronizar las cuentas de usuario locales hacia la nube. Esto significa que, si un administrador crea un usuario para un nuevo instructor en el servidor físico del SENA, esa cuenta se replica automáticamente en Microsoft 365. La ventaja radica en que el usuario utiliza la misma contraseña tanto para encender el computador del laboratorio físico como para acceder a su correo en la nube, un proceso conocido como Sincronización de Hash de Contraseña (PHS).
          .col-lg-6.col-11.col-md-9
            img(src='@/assets/curso/temas/t1/slider1-2.png', alt='')
        .row.justify-content-center.mb-4
          .col-lg-6.col-11
            p.text-white El tercer modelo es la "Identidad federada". Aunque similar a la sincronizada, en la federación, la validación de la contraseña no ocurre en la nube, sino que Microsoft 365 redirige la solicitud de inicio de sesión de vuelta a los servidores locales de la institución (usualmente mediante Active Directory Federation Services - AD FS) para que estos aprueben el acceso. Este modelo se aplica en escenarios donde las políticas de la organización exigen un control absoluto sobre el proceso de autenticación por motivos de extremo cumplimiento normativo, aunque su complejidad de mantenimiento es considerablemente mayor.
          .col-lg-6.col-11.col-md-9
            img(src='@/assets/curso/temas/t1/slider1-3.png', alt='')
        

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Mecanismos de autenticación y acceso seguro (MFA y SSO)

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.br-left.p-3.p-sm-4.p-md-5.mb-4(data-aos="fade")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez que la identidad digital está establecida, el siguiente paso crítico en la gestión de servicios administrativos es asegurar que la persona que intenta acceder a dicha identidad es realmente quien afirma ser. Las contraseñas tradicionales, por complejas que sean, han demostrado ser insuficientes frente a las amenazas cibernéticas modernas como el #[em phishing] o los ataques de fuerza bruta. Por ello, la configuración de mecanismos avanzados de autenticación es una habilidad mandatoria para el administrador de sistemas y responde directamente a la necesidad de gestionar niveles de seguridad robustos.

    p.mb-4 La autenticación multifactor (MFA, por sus siglas en inglés) es el pilar de la seguridad moderna en el acceso a recursos digitales. Su principio pedagógico se basa en exigir al usuario al menos dos de tres formas de evidencia antes de conceder el acceso: algo que el usuario sabe (la contraseña), algo que el usuario tiene (un teléfono móvil, una aplicación generadora de #[em tokens] o una llave de seguridad física) o algo que el usuario es (biometría, como huella dactilar o reconocimiento facial). Implementar MFA bloquea la abrumadora mayoría de los intentos de acceso no autorizados, incluso si las contraseñas han sido comprometidas.

    .bg-color-acento-contenido.mb-4(data-aos="fade")
      .row.justify-content-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/6.png', alt='')
        .col-lg-7
          .p-4.h-100.d-flex.flex-column.justify-content-center
            img.w-85x.mb-3(src='@/assets/curso/temas/t1/7.svg', alt='')
            p.text-white.mb-0 En el contexto de la formación profesional, considere el caso de un instructor que maneja calificaciones sensibles y datos personales de los aprendices en la plataforma Teams y SharePoint. Si su contraseña es interceptada, el atacante tendría acceso total. Sin embargo, al configurar MFA según las políticas de la organización, el atacante, al ingresar la contraseña correcta, se topará con una barrera adicional: el sistema enviará una notificación de aprobación a la aplicación Microsoft Authenticator instalada exclusivamente en el teléfono móvil del instructor legítimo. Al no poseer el dispositivo físico, el ataque es frustrado. Esta es una aplicación directa y crítica del saber de proceso relacionado con la configuración de niveles de acceso y autenticación.

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-9.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t1/8.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-2.d-none.d-lg-block
            img(src='@/assets/curso/temas/t1/9.svg', alt='')
          .col-lg-10
            p.mb-0 De la mano con la seguridad, debe existir un equilibrio con la usabilidad. Aquí entra en juego el inicio de sesión único o #[em Single Sign-On] (SSO). Este mecanismo permite que un usuario se autentique una sola vez de forma robusta (incluyendo MFA) y, a partir de ese momento, adquiera un "pasaporte digital" que le otorga acceso fluido a todas las demás aplicaciones vinculadas (correo, LMS, portales de nómina) sin tener que reingresar credenciales repetidamente. El SSO mejora significativamente la experiencia del aprendiz y del personal administrativo, reduciendo la fatiga de contraseñas y las llamadas al soporte técnico, al tiempo que mantiene un estricto control centralizado sobre la sesión del usuario.


</template>

<script>
export default {
  name: 'Tema1',
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
