addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button-stack button');
    // Array with content for each button, in order
    const contents = [
        'A fase de planejamento normalmente inclui tarefas como a análise do custo-benefício, a programação, a estimativa e a alocação de recursos. A equipe de desenvolvimento coleta requisitos de várias partes envolvidas, como clientes, especialistas internos e externos e gerentes, a fim de criar um documento de especificação de requisitos do software. O documento define as expectativas e as metas comuns que ajudarão no planejamento do projeto.A equipe estima os custos, cria uma programação e tem um plano detalhado para atingir suas metas.',
        'Na fase de projeto, os engenheiros de software analisam os requisitos e identificam as melhores soluções para criar o software. Por exemplo, eles poderão considerar a integração de módulos pré-existentes, fazer escolhas tecnológicas e identificar ferramentas de desenvolvimento. Eles analisarão qual a melhor forma de integrar o novo software às infraestruturas de TI existentes que a organização já tiver.',
        'Na fase de implementação, a equipe de desenvolvimento codifica o produto. Eles analisam os requisitos para identificar as tarefas de codificação menores que podem realizar diariamente para alcançar o resultado final.',
        'A equipe de desenvolvimento combina testes manuais e automatizados para identificar bugs no software. A análise de qualidade inclui testar o software para identificar erros e verificar se ele atende aos requisitos do cliente. Como muitas equipes testam o código que desenvolvem, a fase de teste pode ocorrer em paralelo à fase de desenvolvimento.',
        'Quando as equipes desenvolvem software, eles criam e testam o código em uma cópia do software diferente daquela à qual os usuários têm acesso. O software usado pelo cliente é considerado em produção, enquanto outras cópias são consideradas como o ambiente de compilação ou ambiente de teste. O uso de ambientes de compilação e produção separados garante que os clientes possam continuar a usar o software, mesmo quando ele estiver sendo alterado ou atualizado.A fase de implantação inclui várias tarefas para mover a cópia mais recente para o ambiente de produção, como empacotamento, configuração de ambientes e instalação.',
        'Na fase de manutenção, entre outras tarefas, a equipe corrige bugs, soluciona problemas do cliente e gerencia as alterações do software. Além disso, a equipe monitora a performance geral do sistema, a segurança e a experiência do usuário para identificar novas formas de melhorar o software existente.'
    ];
    buttons.forEach((button, i) => {
        button.addEventListener('click', function () {
            const win = window.open('', '_blank', 'width=700,height=450');
            win.document.open();
            win.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>' +
                button.textContent +
                '</title><style>' +
                'body { background-color: #008080; font-family: Arial, sans-serif; padding: 2em; }' +
                'h1 { color: #000000; }' +
                'p { font-family: Arial, sans-serif; font-size: 20px; color: #222; }' +
                '</style></head><body>' +
                '<h1>' + button.textContent + '</h1>' +
                '<p>' + contents[i] + '</p>' +
                '</body></html>');
            win.document.close();
        });
    });
});
