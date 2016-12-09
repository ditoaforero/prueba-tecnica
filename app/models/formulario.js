"use strict";
var Formulario = (function () {
    function Formulario(nombre, apellido, cedula, fechaNacimiento, correoElectronico, usuarioGit) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.fechaNacimiento = fechaNacimiento;
        this.correoElectronico = correoElectronico;
        this.usuarioGit = usuarioGit;
    }
    Formulario.prototype.igualar = function (formulario) {
        this.nombre = formulario.nombre;
        this.apellido = formulario.apellido;
        this.cedula = formulario.cedula;
        this.fechaNacimiento = formulario.fechaNacimiento;
        this.correoElectronico = formulario.correoElectronico;
        this.usuarioGit = formulario.usuarioGit;
    };
    return Formulario;
}());
exports.Formulario = Formulario;
//# sourceMappingURL=formulario.js.map