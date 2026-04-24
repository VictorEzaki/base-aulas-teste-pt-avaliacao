const RepositorioExercicio= require("../repositories/pessoa.js")

const repositorio = new RepositorioExercicio()
class ServicoExercicio {

    async PegarUm(id){
      if(!id || isNaN(id)) {
        throw new Error("Favor corretamente o id.")
      }
      return repositorio.PegarUm(id)
    }

    async PegarTodos(){
      return repositorio.PegarTodos()
    }

    async Adicionar(pessoa){
      if (pessoa === null) throw new Error('Pessoa não pode ser null');
      
      if(!pessoa) {
        throw new Error("Favor preencher o pessoa.")
      } else if(!pessoa.nome) {
        throw new Error("Favor preencher o nome.")
      } else if(!pessoa.email) {
        throw new Error("Favor preencher o email.")
      } else if(!pessoa.senha) {
        throw new Error("Favor preencher o senha.")
      }

      if (pessoa.senha.length < 8) throw new Error('Senha deve possuir mais que 8 caracteres');

      if (pessoa.nome.length > 80) throw new Error('O campo nome ultrapassou os limites de caracteres');
      if (pessoa.senha.length > 80) throw new Error('O campo senha ultrapassou os limites de caracteres');
      if (pessoa.email.length > 80) throw new Error('O campo e-mail ultrapassou os limites de caracteres');

      return repositorio.Adicionar(pessoa)
    }

    async Alterar(id, pessoa){
      if(!id || isNaN(id)) {
        throw new Error("Favor corretamente o id.")
      }

      return repositorio.Adicionar(pessoa)
    }

    async Deletar(id){
      if(!id || isNaN(id)) {
        throw new Error("Favor corretamente o id.")
      }

      return repositorio.Deletar(id)
    }

}
module.exports = ServicoExercicio