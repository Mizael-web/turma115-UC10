
class usuarioModel {
   static async salvarUsuario(usuario) {
    console.log("salvando user no banco de dados...")
    return {id:1, ...usuario};
;
   }
   static async listarUsuarios() {
    console.log("listando usuarios do banco de dados...")
    return [
      {id:1, nome:"João",senha: "123456"},
      {id:2, nome:"Maria", senha: "abcdef"}
      
    ];
   }
}
module.exports = usuarioModel;