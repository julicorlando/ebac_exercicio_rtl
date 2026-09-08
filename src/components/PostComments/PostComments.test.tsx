import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('Testes para o componente PostComments', () => {
    it('Deve inserir e renderizar dois comentários', () => {
        render(<PostComments />);

        const campoComentario = screen.getByTestId('comment-input');
        const botaoComentar = screen.getByTestId('comment-submit');

        fireEvent.change(campoComentario, {
            target: { value: 'Primeiro comentário' }
        });
        fireEvent.click(botaoComentar);

        fireEvent.change(campoComentario, {
            target: { value: 'Segundo comentário' }
        });
        fireEvent.click(botaoComentar);

        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
        expect(screen.getAllByTestId('comment-item')).toHaveLength(2);
    });
});