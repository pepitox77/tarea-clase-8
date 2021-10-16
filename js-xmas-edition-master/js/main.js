function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "El campo nombre debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
  if (!/^[a-z]+$/i.test(nombre)) {
    return "El campo nombre solo acepta letras";
  }
  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "El campo ciudad no puede estar vacío";
  }
  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length >= 100) {
    return "El campo descripcion es muy largo";
  } else if (descripcionRegalo.length === 0) {
    return "El campo descripcion no puede estar vacio";
  } else if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
    return "El campo descripcion solo puede tener numeros y letras";
  } else {
    return "";
  }
}

function validarFormulario(event) {
  const $form = document.querySelector("#carta-a-santa");

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    "descripcion-regalo": errorDescripcionRegalo,
    ciudad: errorCiudad,
    nombre: errorNombre,
  };

  const esExito = manejarErrores(errores) === 0;

  if (esExito) {
    $form.className = "oculto";
    document.querySelector("#exito").className = "";
    setTimeout(function () {
      window.location.href = "wishlist.html";
    }, 5000);
  }
  event.preventDefault();
}

function manejarErrores(errores) {
  const keys = Object.keys(errores);
  const $errors = document.querySelector("#errores");
  let cantidadErrores = 0;
  keys.forEach(function (key) {
    let error = errores[key];
    if (error) {
      cantidadErrores++;
      $form[key].className = "error";
      const $error = document.createElement("li");
      $error.innerText = error;
      $error.id = key + "error";
      if (!document.querySelector("#" + key + "error")) {
        $errors.appendChild($error);
      }
    } else {
      $form[key].className = "";
      if (document.querySelector("#" + key + "error")) {
        document.querySelector("#" + key + "error").remove();
      }
    }
  });

  return cantidadErrores;
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
