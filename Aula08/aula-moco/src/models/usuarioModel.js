
class usuarioModel {
   static async salvarUsuario(usuario) {
    console.log("salvando user no banco de dados...")
    return {id:1, ...usuario};
;
   }
}
module.exports = usuarioModel;