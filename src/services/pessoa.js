const RepositorioExercicio= require("../repositories/pessoa.js")

const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex para verificar se o e-mail contém 'nome@dominio.extensao'
const repositorio = new RepositorioExercicio()
class ServicoExercicio {
  
  async PegarUm(id) {
    if (!id || isNaN(id)) {
      throw new Error("Favor preencher corretamente o id.");
    }

    if (id < 0) {
      throw new Error("Favor preencher o ID corretamente.");
    }
    
    const pessoa = await repositorio.PegarUm(id);
    
    if (!pessoa) {
      throw new Error("Pessoa não encontrada.");
    }
    
    return {
      nome: pessoa.nome,
      email: pessoa.email
    };
  }
  
  async PegarTodos(){
    return repositorio.PegarTodos()
  }
  
  async Adicionar(pessoa) {
    if (pessoa === null) {
      throw new Error("Pessoa não pode ser null");
    }
    
    if (!pessoa) {
      throw new Error("Favor preencher a pessoa.");
    }
    
    const { nome, email, senha } = pessoa;
    
    // Campos obrigatórios
    if (!nome || nome.trim() === "") {
      throw new Error("Favor preencher o nome.");
    }
    
    if (!email || email.trim() === "") {
      throw new Error("Favor preencher o email.");
    }
    
    if (!senha || senha.trim() === "") {
      throw new Error("Favor preencher a senha.");
    }
    
    // Validação de e-mail
    if (!emailValido.test(email)) {
      throw new Error("E-mail inválido.");
    }
    
    // Regras de senha
    if (senha.length < 8) {
      throw new Error("Senha deve possuir mais que 8 caracteres.");
    }
    
    // Limite de caracteres
    if (nome.length > 80) {
      throw new Error("O campo nome ultrapassou os limites de caracteres.");
    }
    
    if (email.length > 80) {
      throw new Error("O campo e-mail ultrapassou os limites de caracteres.");
    }
    
    if (senha.length > 80) {
      throw new Error("O campo senha ultrapassou os limites de caracteres.");
    }
    
    return repositorio.Adicionar(pessoa);
  }
  
  async Alterar(id, pessoa) {
    if (!id || isNaN(id)) {
      throw new Error("Favor preencher corretamente o id.");
    }
    
    const [linhasAfetadas] = await repositorio.Alterar(id, pessoa);
    
    if (linhasAfetadas === 0) {
      throw new Error("Pessoa não encontrada.");
    }
    
    return {
      message: "Pessoa alterada com sucesso."
    };
  }
  
  async Deletar(id){
    if(!id || isNaN(id)) {
      throw new Error("Favor corretamente o id.")
    }
    
    return repositorio.Deletar(id)
  }
  
}
module.exports = ServicoExercicio