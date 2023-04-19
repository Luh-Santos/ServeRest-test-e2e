import elementosCadastro from "../definicoes/elementosCadastro";
import dados from "../../fixtures/users/user.json"

module.exports = {
    
    preencherCadastroCerto() {
        cy.get(elementosCadastro.inputNome).type(dados.nome);
        cy.get(elementosCadastro.inputEmail).type(dados.email);
        cy.get(elementosCadastro.inputSenha).type(dados.senha);
        cy.get(elementosCadastro.buttonCadastrar).click();
        cy.intercept('POST', '/login', []).as('postLogin')
        cy.wait('@postLogin')
        cy.get(elementosCadastro.txtProdutos).contains('Produtos');
        
    }

}