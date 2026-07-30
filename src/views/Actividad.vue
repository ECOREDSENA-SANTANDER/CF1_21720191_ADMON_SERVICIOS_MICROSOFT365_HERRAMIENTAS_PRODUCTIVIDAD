<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5

      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión administrativa y seguridad de entornos Microsoft 365',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de la identidad digital, la autenticación, la gestión de usuarios, licencias y roles, las políticas de seguridad y la administración del almacenamiento en Microsoft 365.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cómo se define la identidad digital en el ecosistema de Microsoft 365?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo como una contraseña usada en el correo electrónico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Como el conjunto de atributos, credenciales y derechos de acceso que representan a una persona, dispositivo o aplicación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Como un archivo de configuración exclusivo de SharePoint.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Como un respaldo automático almacenado en OneDrive.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la identidad digital como base del acceso y la administración de recursos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la definición de identidad digital en Microsoft 365.',
        },
        {
          id: 2,
          texto:
            '¿Qué propósito tiene establecer una convención clara para el UPN de los usuarios?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilitar la administración, la consistencia y la imagen profesional de la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar la necesidad de licencias y roles.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar el uso de directorios sincronizados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Impedir la auditoría de accesos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las convenciones de nomenclatura y la estandarización del UPN.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el propósito del UPN y su importancia administrativa.',
        },
        {
          id: 3,
          texto:
            '¿En qué escenario resulta más pertinente el modelo de identidad exclusiva en la nube?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En organizaciones que exigen autenticación local mediante AD FS.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'En instituciones con varios dominios heredados y servidores físicos complejos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En organizaciones nuevas o pequeñas que administran sus cuentas directamente en Microsoft Entra ID.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'En empresas que solo permiten contraseñas almacenadas fuera de la nube.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el modelo de identidad exclusiva en la nube y su pertinencia organizacional.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los escenarios de uso del modelo de identidad en la nube.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una ventaja principal de la identidad híbrida o sincronizada?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obliga a crear usuarios distintos para el entorno local y la nube.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite que el usuario utilice las mismas credenciales en el entorno local y en Microsoft 365.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elimina por completo la necesidad de directorio local.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Impide la sincronización de cuentas desde Windows Server.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la identidad híbrida y la sincronización de credenciales entre entornos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las ventajas de la identidad híbrida o sincronizada.',
        },
        {
          id: 5,
          texto:
            'En un modelo de identidad federada, ¿dónde se valida el inicio de sesión del usuario?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En los servidores locales de la institución que actúan como proveedor de autenticación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Exclusivamente en OneDrive.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'En la aplicación Microsoft Teams.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'En la papelera de reciclaje de SharePoint.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la autenticación delegada en modelos de identidad federada.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el funcionamiento de la identidad federada y la validación del acceso.',
        },
        {
          id: 6,
          texto: '¿Qué caracteriza a la autenticación multifactor (MFA)?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite acceder solo con una contraseña más extensa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituye las credenciales por enlaces anónimos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Exige al usuario al menos dos formas de evidencia antes de conceder el acceso.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Desactiva las notificaciones de seguridad en los dispositivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la autenticación multifactor como mecanismo de acceso seguro.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el propósito y funcionamiento de la MFA.',
        },
        {
          id: 7,
          texto:
            '¿Qué beneficio principal aporta el inicio de sesión único (SSO)?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Obliga a escribir la contraseña en cada aplicación del entorno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permite autenticarse una vez y acceder luego a varias aplicaciones vinculadas sin reingresar credenciales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Bloquea el acceso a correo, Teams y SharePoint desde la misma sesión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplaza las políticas de seguridad y cumplimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el inicio de sesión único y su relación con la usabilidad segura.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los beneficios del SSO dentro del ecosistema Microsoft 365.',
        },
        {
          id: 8,
          texto: '¿Qué describe mejor el ciclo de vida del usuario (JML)?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un proceso limitado a la compra de licencias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una estrategia de respaldo de archivos históricos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un modelo de almacenamiento entre OneDrive y SharePoint.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un proceso que gestiona la identidad desde el ingreso, el cambio de rol y la salida del usuario.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el ciclo de vida del usuario y sus fases de ingreso, movimiento y salida.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la administración del ciclo de vida del usuario.',
        },
        {
          id: 9,
          texto:
            'Cuando un colaborador finaliza su vinculación con la organización, ¿qué acción es prioritaria?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Asignarle de inmediato una licencia superior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Compartir públicamente sus archivos para evitar pérdida de información.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Bloquear el inicio de sesión, revocar sesiones activas y definir el destino de sus datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Convertirlo en administrador global por cierre de cuenta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las acciones de seguridad requeridas en la fase de salida del usuario.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el procedimiento administrativo y de seguridad en la desvinculación.',
        },
        {
          id: 10,
          texto:
            '¿Qué práctica favorece la optimización del licenciamiento en Microsoft 365?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asignar licencias basadas en grupos para estandarizar y agilizar la administración.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Otorgar la licencia más alta a todos los usuarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar la revisión periódica de necesidades por rol.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Crear una asignación distinta para cada usuario de forma manual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la asignación de licencias por grupos como estrategia de optimización.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las buenas prácticas de asignación y optimización de licencias.',
        },
        {
          id: 11,
          texto:
            'Según el principio de privilegio mínimo, ¿qué decisión debe evitarse?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Delegar funciones específicas mediante roles especializados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Restringir permisos según la tarea real del usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Distribuir la administración de forma auditable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Otorgar el rol de "Administrador global" a personas que no lo requieren.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el principio de privilegio mínimo y la delegación responsable.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con los riesgos de otorgar permisos excesivos en roles administrativos.',
        },
        {
          id: 12,
          texto:
            '¿Qué alcance tiene un rol especializado como <em>Helpdesk Admin</em>?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Administrar la facturación y las suscripciones de toda la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Restablecer contraseñas y apoyar incidencias sin acceder a configuraciones ajenas a su función.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Modificar todas las políticas globales de seguridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Visualizar cualquier correo electrónico de directivos y coordinadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el alcance de los roles especializados dentro del modelo RBAC.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las funciones de apoyo permitidas por roles administrativos específicos.',
        },
        {
          id: 13,
          texto:
            '¿Qué herramienta de Microsoft 365 permite traducir las políticas de seguridad y cumplimiento en configuraciones técnicas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Microsoft Paint.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Bloc de notas de Windows.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Microsoft Purview o Centro de Cumplimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Calculadora de Windows.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las herramientas de cumplimiento y la traducción de políticas a controles técnicos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el uso de Microsoft Purview en seguridad y cumplimiento.',
        },
        {
          id: 14,
          texto:
            '¿Qué efecto puede tener una etiqueta de confidencialidad aplicada a datos estudiantiles?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Impedir que el documento se reenvíe fuera de la organización o se imprima sin autorización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar automáticamente el archivo al abrirlo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Convertir el documento en una licencia de Microsoft 365.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Hacer pública la información en todos los equipos de Teams.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las etiquetas de confidencialidad para proteger información sensible.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la clasificación y protección documental mediante etiquetas.',
        },
        {
          id: 15,
          texto:
            '¿Cómo actúa Microsoft Defender for Office 365 frente a enlaces y archivos sospechosos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publica los adjuntos en SharePoint para revisión manual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Envía automáticamente el correo al buzón personal del usuario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Desactiva la autenticación para agilizar la apertura del mensaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Analiza enlaces en tiempo real y ejecuta adjuntos en un entorno aislado antes de entregarlos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la protección contra amenazas mediante enlaces y archivos adjuntos seguros.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con el funcionamiento de Microsoft Defender for Office 365.',
        },
        {
          id: 16,
          texto: '¿Qué ejemplo representa una política de acceso condicional?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permitir siempre el acceso sin verificar el dispositivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Exigir MFA o bloquear el acceso cuando el inicio de sesión se realiza desde ubicaciones o dispositivos de riesgo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar el historial de auditoría para reducir alertas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Compartir enlaces anónimos en todas las bibliotecas de SharePoint.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con el acceso condicional como mecanismo de seguridad adaptativa.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las condiciones de acceso seguro definidas en Microsoft Entra ID.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es la finalidad pedagógica de las simulaciones de ataques en Microsoft 365?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sancionar de inmediato al usuario que abre un correo sospechoso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reemplazar toda la formación en ciudadanía digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Convertir un posible riesgo en una oportunidad de aprendizaje y concienciación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Impedir el uso del correo electrónico dentro de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las simulaciones de ataque como estrategia de concienciación y aprendizaje.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la formación en ciudadanía digital y las simulaciones de <em>phishing</em>.',
        },
        {
          id: 18,
          texto:
            '¿Qué diferencia correctamente a OneDrive frente a SharePoint?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'OneDrive se orienta al almacenamiento personal y SharePoint al trabajo colaborativo organizacional.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'OneDrive solo funciona sin internet y SharePoint solo en equipos locales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'OneDrive reemplaza a Teams y SharePoint reemplaza a Outlook.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'OneDrive se usa únicamente para correo y SharePoint solo para licencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con las diferencias funcionales entre OneDrive y SharePoint.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la arquitectura de almacenamiento en Microsoft 365.',
        },
        {
          id: 19,
          texto:
            '¿Qué configuración ayuda a mantener la disponibilidad y recuperación de la información almacenada?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Desactivar la papelera de reciclaje y las versiones de documentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Permitir el borrado definitivo sin historial ni control.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Compartir todos los archivos mediante acceso anónimo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Configurar versiones de documentos y mecanismos de recuperación ante eliminaciones o cambios accidentales.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la disponibilidad y recuperación de información en la nube.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con las versiones de documentos y los mecanismos de recuperación.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito conjunto de las políticas DLP y de retención?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar el número de aplicaciones instaladas en cada equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar datos sensibles, evitar su fuga y conservar o eliminar la información según requerimientos normativos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir completamente los roles administrativos del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Convertir cualquier sitio de SharePoint en almacenamiento personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con DLP y retención como estrategias de protección y gobierno de la información.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la prevención de pérdida de datos y las políticas de retención.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la gestión administrativa, la seguridad y el almacenamiento en Microsoft 365.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
