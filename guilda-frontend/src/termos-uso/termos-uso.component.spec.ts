import { render, screen } from '@testing-library/angular';
import { TermosUsoComponent } from './termos-uso.component';

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
});
