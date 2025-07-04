import { useState } from 'react'
import './App.css'
import bgImage from './assets/strangerdrug-bg.jpg'

const termsContent = [
  {
    title: 'Términos y Condiciones Generales',
    content: `1. ACEPTACIÓN DE LOS TÉRMINOS\nAl acceder y utilizar esta plataforma, usted acepta estar sujeto a estos términos y condiciones.\n\n2. RESTRICCIONES DE EDAD\n- Debe tener al menos 18 años para acceder y utilizar esta plataforma.\n- Al registrarse, declara y garantiza que tiene al menos 18 años.\n- Nos reservamos el derecho de verificar su edad en cualquier momento.\n\n3. CUENTA DE USUARIO\n- Debe proporcionar información precisa y completa al registrarse.\n- Es responsable de mantener la confidencialidad de su cuenta.\n- Debe notificar inmediatamente cualquier uso no autorizado de su cuenta.\n\n4. CONTENIDO PROHIBIDO\n- No se permite contenido ilegal, violento o que promueva el odio.\n- No se permite contenido que involucre menores de edad.\n- No se permite contenido que viole derechos de autor.\n\n5. PRIVACIDAD Y SEGURIDAD\n- Su privacidad es importante para nosotros.\n- Utilizamos medidas de seguridad para proteger su información.\n- No compartimos su información con terceros sin su consentimiento.\n\n6. LIMITACIÓN DE RESPONSABILIDAD\n- La plataforma se proporciona "tal cual".\n- No somos responsables por daños indirectos o consecuentes.\n- Nos reservamos el derecho de modificar o suspender el servicio.\n\n7. PROPIEDAD INTELECTUAL\n- Todo el contenido es propiedad de sus respectivos dueños.\n- No está permitida la reproducción no autorizada.\n- Respetamos los derechos de autor y esperamos que usted también lo haga.\n\n8. TERMINACIÓN\n- Podemos terminar o suspender su acceso en cualquier momento.\n- Usted puede cerrar su cuenta en cualquier momento.\n- Las disposiciones de estos términos sobreviven a la terminación.\n\n9. CAMBIOS EN LOS TÉRMINOS\n- Nos reservamos el derecho de modificar estos términos.\n- Los cambios entrarán en vigor al publicarlos.\n- Su uso continuado significa que acepta los cambios.\n\n10. CONTACTO\nPara preguntas sobre estos términos, contacte a nuestro equipo de soporte.`
  },
  {
    title: 'Política de Privacidad',
    content: `1. INFORMACIÓN QUE RECOPILAMOS\n- Información de registro (nombre, email, fecha de nacimiento)\n- Información de pago (procesada de forma segura)\n- Datos de uso y preferencias\n- Dirección IP y datos de dispositivo\n\n2. USO DE LA INFORMACIÓN\n- Proporcionar y mejorar nuestros servicios\n- Procesar pagos y prevenir fraudes\n- Enviar comunicaciones importantes\n- Personalizar su experiencia\n\n3. PROTECCIÓN DE DATOS\n- Utilizamos encriptación de extremo a extremo\n- Almacenamos datos en servidores seguros\n- Limitamos el acceso a su información\n- Monitoreamos regularmente la seguridad\n\n4. COMPARTIR INFORMACIÓN\n- No vendemos sus datos personales\n- Solo compartimos información con su consentimiento\n- Podemos compartir datos con proveedores de servicios\n- Cumplimos con órdenes legales cuando sea necesario\n\n5. SUS DERECHOS\n- Acceder a sus datos personales\n- Corregir información inexacta\n- Solicitar eliminación de datos\n- Oponerse al procesamiento de datos\n\n6. COOKIES Y TECNOLOGÍAS SIMILARES\n- Utilizamos cookies para mejorar su experiencia\n- Puede controlar las cookies en su navegador\n- Algunas cookies son esenciales para el funcionamiento\n\n7. SEGURIDAD\n- Implementamos medidas de seguridad robustas\n- Monitoreamos regularmente la seguridad\n- Capacitamos a nuestro personal en seguridad\n- Actualizamos regularmente nuestros sistemas\n\n8. CAMBIOS EN LA POLÍTICA\n- Notificaremos cambios importantes\n- Los cambios entrarán en vigor al publicarlos\n- Su uso continuado significa que acepta los cambios\n\n9. CONTACTO\nPara preguntas sobre privacidad, contacte a nuestro equipo de soporte.`
  },
  {
    title: 'Términos para Creadores de Contenido',
    content: `1. ELEGIBILIDAD\n- Debe tener al menos 18 años\n- Debe proporcionar identificación válida\n- Debe tener una cuenta bancaria válida\n- No debe tener antecedentes penales\n\n2. CONTENIDO PERMITIDO\n- Contenido adulto consensuado\n- Contenido original y de su propiedad\n- Contenido que cumpla con nuestras políticas\n- Contenido que respete los derechos de autor\n\n3. PROHIBICIONES\n- No contenido ilegal\n- No contenido que involucre menores\n- No contenido que promueva el odio\n- No contenido que viole derechos de autor\n\n4. PAGOS Y GANANCIAS\n- 70% de las ganancias para el creador\n- Pagos mensuales\n- Mínimo de retiro: $100\n- Impuestos según su jurisdicción\n\n5. DERECHOS DE PROPIEDAD\n- Usted mantiene los derechos de su contenido\n- Nos otorga licencia para distribuir\n- Podemos usar su contenido para promoción\n- Respetamos sus derechos de autor\n\n6. OBLIGACIONES\n- Mantener su contenido actualizado\n- Responder a sus seguidores\n- Cumplir con las políticas de la plataforma\n- Mantener su información actualizada\n\n7. TERMINACIÓN\n- Podemos terminar su cuenta por violaciones\n- Usted puede cerrar su cuenta en cualquier momento\n- El contenido permanecerá según los términos\n- Los pagos pendientes serán procesados\n\n8. CAMBIOS\n- Notificaremos cambios importantes\n- Los cambios entrarán en vigor al publicarlos\n- Su uso continuado significa que acepta los cambios\n\n9. CONTACTO\nPara preguntas sobre estos términos, contacte a nuestro equipo de soporte.`
  },
  {
    title: 'Términos de Pago y Facturación',
    content: `1. MÉTODOS DE PAGO\n- Tarjetas de crédito/débito\n- Transferencias bancarias\n- Criptomonedas\n- Otros métodos aprobados\n\n2. FACTURACIÓN\n- Facturas mensuales\n- Facturas disponibles en su cuenta\n- Facturas enviadas por email\n- Facturas en formato PDF\n\n3. REEMBOLSOS\n- Reembolsos dentro de 30 días\n- Reembolsos por contenido no disponible\n- Reembolsos por problemas técnicos\n- Reembolsos por violación de términos\n\n4. IMPUESTOS\n- Impuestos según su jurisdicción\n- IVA aplicable\n- Retenciones según la ley\n- Certificados fiscales disponibles\n\n5. SUSCRIPCIONES\n- Renovación automática\n- Cancelación en cualquier momento\n- Períodos de gracia\n- Notificaciones de renovación\n\n6. SEGURIDAD\n- Pagos encriptados\n- Protección contra fraudes\n- Monitoreo de transacciones\n- Verificación de identidad\n\n7. DISPUTAS\n- Proceso de resolución\n- Tiempo de respuesta\n- Documentación requerida\n- Apelaciones\n\n8. CAMBIOS\n- Notificaremos cambios importantes\n- Los cambios entrarán en vigor al publicarlos\n- Su uso continuado significa que acepta los cambios\n\n9. CONTACTO\nPara preguntas sobre pagos, contacte a nuestro equipo de soporte.`
  }
];

function App() {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    birthDate: ''
  })
  const [submitted, setSubmitted] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [termsChecked, setTermsChecked] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(form)
  }

  return (
    <>
      <div className="registro-container" translate="no" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat' }}>
        <div className="brand-title-inside">
          <span className="brand-stranger">stranger</span>
          <span className="brand-drug">Drug</span>
        </div>
        <form onSubmit={handleSubmit} className="registro-form">
          <input
            type="text"
            name="name"
            placeholder="First Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="birthDate"
            placeholder="Birth Date"
            value={form.birthDate}
            onChange={handleChange}
            required
          />
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', margin: '0.5rem 0' }}>
            <button
              type="button"
              className="ver-terminos-btn"
              style={{
                background: 'linear-gradient(90deg, #3ecfff 0%, #ff2d55 100%)',
                color: '#fff',
                fontWeight: 700,
                borderRadius: '10px',
                fontSize: '1rem',
                boxShadow: '0 0 8px #3ecfff99',
                border: 'none',
                padding: '0.7rem 1.2rem',
                cursor: 'pointer',
                letterSpacing: '0.5px',
                textShadow: '0 0 6px #3ecfff99',
              }}
              onClick={() => setShowTerms(true)}
            >
              Ver términos y condiciones
            </button>
            <input
              type="checkbox"
              id="accept-terms"
              checked={acceptedTerms}
              onChange={e => setAcceptedTerms(e.target.checked)}
              style={{marginLeft: '0.7rem'}}
            />
            <label htmlFor="accept-terms" style={{fontSize: '1rem', color: '#fff'}}>Acepto los términos y condiciones</label>
          </div>
          <button type="submit" disabled={!acceptedTerms}>Register</button>
        </form>
        {submitted && (
          <div className="registro-datos">
            <h2>Entered Data:</h2>
            <ul>
              <li><b>First Name:</b> {submitted.name}</li>
              <li><b>Last Name:</b> {submitted.lastName}</li>
              <li><b>Email:</b> {submitted.email}</li>
              <li><b>Password:</b> {submitted.password}</li>
              <li><b>Phone:</b> {submitted.phone}</li>
              <li><b>Birth Date:</b> {submitted.birthDate}</li>
            </ul>
          </div>
        )}
      </div>
      {/* Modal de Términos y Condiciones */}
      {showTerms && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.7)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            background: '#fff',
            color: '#222',
            borderRadius: '18px',
            maxWidth: '90vw',
            width: '480px',
            maxHeight: '80vh',
            overflowY: 'auto',
            padding: '2rem 1.5rem',
            boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
            position: 'relative',
          }}>
            <h2 style={{textAlign: 'center', color: '#ff2d2d', marginBottom: '1.2rem'}}>Términos y Condiciones</h2>
            {termsContent.map((term, idx) => (
              <div key={idx} style={{marginBottom: '1.5rem'}}>
                <h3 style={{color: '#3ecfff', fontSize: '1.1rem', marginBottom: '0.5rem'}}>{term.title}</h3>
                <pre style={{whiteSpace: 'pre-wrap', fontSize: '0.98rem', color: '#222', background: '#f7f7f7', borderRadius: '8px', padding: '0.7rem', margin: 0}}>{term.content}</pre>
              </div>
            ))}
            <button
              style={{
                width: '100%',
                padding: '0.9rem 0',
                background: 'linear-gradient(90deg, #ff073a 0%, #ff2d55 100%)',
                color: '#fff',
                fontWeight: 700,
                borderRadius: '12px',
                fontSize: '1.1rem',
                border: 'none',
                cursor: 'pointer',
                marginTop: '0.5rem',
                boxShadow: '0 0 12px #ff073a99',
                transition: 'all 0.2s',
              }}
              onClick={() => setShowTerms(false)}
            >
              Cerrar
            </button>
            <button
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                color: '#ff2d2d',
                cursor: 'pointer',
              }}
              onClick={() => setShowTerms(false)}
              aria-label="Cerrar"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
