export class Formulario{
    constructor(
        public nombre:string,
        public apellido:string,
        public cedula:number,
        public fechaNacimiento:string,
        public correoElectronico:string,
        public usuarioGit:string
    ){}

    public igualar(formulario:Formulario){
        this.nombre = formulario.nombre;
        this.apellido = formulario.apellido;
        this.cedula = formulario.cedula;
        this.fechaNacimiento = formulario.fechaNacimiento;
        this.correoElectronico = formulario.correoElectronico;
        this.usuarioGit = formulario.usuarioGit;
    }
}