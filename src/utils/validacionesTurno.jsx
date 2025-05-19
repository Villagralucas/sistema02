


const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regexCel = /^((11\d{8})|(1[3-9]\d{8})|(2\d{2}\d{7}))$/;

export function validarPaso(formData, idx) {
  let nuevosErrores = {};

  if (idx === 0) {
    if (!formData.nombre) {
      nuevosErrores.nombre = "El nombre es obligatorio";
    } else if (!regexNombre.test(formData.nombre.trim())) {
      nuevosErrores.nombre = "Sólo se permiten letras";
    }
    if (!formData.email) {
      nuevosErrores.email = "El email es obligatorio";
    } else if (!regexEmail.test(formData.email.trim())) {
      nuevosErrores.email = "Ingresá un email válido";
    }
    const celNum = formData.celular.replace(/\D/g, "");
    if (!celNum) {
      nuevosErrores.celular = "El celular es obligatorio";
    } else if (!regexCel.test(celNum)) {
      nuevosErrores.celular = "Celular inválido (Argentina, 10 u 11 dígitos)";
    }
  }
  if (idx === 1) {
    if (!formData.servicio) nuevosErrores.servicio = "Elegí un servicio";
    if (!formData.fecha) nuevosErrores.fecha = "Elegí una fecha";
    if (!formData.hora) nuevosErrores.hora = "Elegí un horario";
  }
  return nuevosErrores;
}
