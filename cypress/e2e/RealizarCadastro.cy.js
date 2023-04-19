import validaCadastro from "../support/tarefas/validaCadastro";

describe('Realizar cadastro', () =>{
    beforeEach(() => {
        cy.visit("/cadastrarusuarios")
    });

    it('[C01] Deve realizar um cadastro com sucesso', () => {
        validaCadastro.preencherCadastroCerto();
    });

    it('[C02] Deve realizar um cadastro de administrador com sucesso', () => {
        validaCadastro.preencherCadastroCerto();
    });
});