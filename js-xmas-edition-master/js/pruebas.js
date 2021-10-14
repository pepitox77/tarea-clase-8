
function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'El campo nombre debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
  console.assert(
      validarNombre("asdf1234") === "El campo nombre solo acepta letras",
      "validar nombre no valido que el nombre solo tenga letras"
  )
  console.assert(
      validarNombre("Fabricio") === "", "validarNombre fallo con un nombre valido"
  )
}

function probarValidarCiudad(){ 
console.assert(
    validarCiudad("") === 'El campo ciudad no puede estar vacío',
    'Validar ciudad no validó que la ciudad no este seleccionada',
)
console.assert(
    validarCiudad("Buenos Aires") === "", "Validar ciudad no funciono con un nombre de ciudad valido"
    )

}
function probarValidarDescripcionRegalo(){ 
console.assert(
    validarDescripcionRegalo("qwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiretqwequiret") === "El campo descripcion es muy largo", 
    "La funcion validar descripcion regalo no valido que el campo no sea muy largo"
)

console.assert(
    validarDescripcionRegalo("Regalo") === "", "La funcion validar descripcion regalo no funciono con una descripcion correcta"
)

console.assert(
    validarDescripcionRegalo(".,.,.,.,") === "El campo descripcion solo puede tener numeros y letras",
    "La funcion validar descripcion no valido que fuera solo numeros y letras")
}

probarValidarNombre()
probarValidarCiudad()
probarValidarDescripcionRegalo()