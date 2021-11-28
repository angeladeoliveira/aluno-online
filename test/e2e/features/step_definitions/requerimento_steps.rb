Dado('que um aluno logado acessa a página de novo requerimento') do
    visit('/requerimentos/novo')
end
  
Quando('ele informar a disciplina {string} e a prova {string} e a argumentação {string}') do |string, string2, string3|
    select(value = string, from: 'inputDisciplina')
    select(value = string2, from: 'inputProva')
    fill_in('inputArgumentacao', with: string3)
    click_button('Salvar')
end

Quando('ele clicar em desistir') do
    click_link('Desistir')
end
