import { render, screen } from '@testing-library/angular';
import { TermosUsoComponent } from './termos-uso.component';
import userEvent from '@testing-library/user-event'

describe('TermosUsoComponent', () => {

  it('deve ser criado', async () => {
    await render(TermosUsoComponent);
  });

  it('deve possuir titulo informativo dos termos de uso', async () =>  {
    await render(TermosUsoComponent);
    const titulo = screen.getByRole('heading', { name: 'Termos de uso' });
    // toBeInTheDocument faz parte dos matchers customizados do pacote @testing-library/jest-dom
    expect(titulo).toBeInTheDocument();
  });

  it('deve possuir botoes de aceitar e rejeitar os termos', async () =>  {
    await render(TermosUsoComponent);
    // para a query get, o teste falha caso o elemento desejado não for encontrado
    screen.getByRole('button', { name: 'Aceitar' });
    screen.getByRole('button', { name: 'Rejeitar' });
  });

  it('deve redirecionar o usuario para respectiva mensagem a depender da acao', async () =>  {
    await render(TermosUsoComponent);
    const botaoAceitar = screen.getByRole('button', { name: 'Aceitar' });
    userEvent.click(botaoAceitar);
    // usei o queryBy porque quero testar se um elemento não está presente na tela
    let paragrafosTermo = screen.queryByTestId('paragrafosTermo');
    expect(paragrafosTermo).not.toBeInTheDocument();
    // novamente usando o truque de já testar fazendo a query
    // usando uma função como TextMatcher por conta da tag <strong>
    screen.getByText((conteudoHtml, noh) => noh.textContent == 'Os termos foram aceitos');
    
    const botaoVoltar = screen.getByRole('button', { name: 'Voltar' });
    userEvent.click(botaoVoltar);
    screen.getByTestId('paragrafosTermo');

    const botaoRejeitar = screen.getByRole('button', { name: 'Rejeitar' });
    userEvent.click(botaoRejeitar);
    paragrafosTermo = screen.queryByTestId('paragrafosTermo');
    expect(paragrafosTermo).not.toBeInTheDocument();
    screen.getByText((conteudo, no) => no.textContent == 'Os termos foram rejeitados');
  });
});
