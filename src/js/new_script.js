    // Configurações globais
    const CONFIG = {
        cores: {
            principal: '#002D55',
            secundaria: '#0077CC',
            terciaria: '#FFA500',
            fundo: '#000000',
            texto: '#FFFFFF',
        }
    };

    // Dados dos cenários
    const CENARIOS = {
        A: {
            nome: 'Básico',
            investimentoInicial: { min: 40000, max: 50000 },
            manutencaoMensal: { min: 1500, max: 2000 },
            prazo: 3,
            uptime: 99,
            tempoResposta: 8
        },
        B: {
            nome: 'Intermediário',
            investimentoInicial: { min: 60000, max: 75000 },
            manutencaoMensal: { min: 2000, max: 2500 },
            prazo: 5,
            uptime: 99.5,
            tempoResposta: 4
        },
        C: {
            nome: 'Avançado',
            investimentoInicial: { min: 80000, max: 100000 },
            manutencaoMensal: { min: 2500, max: 3500 },
            prazo: 7,
            uptime: 99.9,
            tempoResposta: 2
        }
    };

    // Funcionalidades por cenário
    const FUNCIONALIDADES = [
        { nome: 'Cadastro e Login', A: '✅', B: '✅', C: '✅' },
        { nome: 'Integração Wi-Fi', A: '✅', B: '✅', C: '✅' },
        { nome: 'Banco de Dados de Leads', A: 'Básico', B: '✅', C: '✅' },
        { nome: 'Exibição de Atrações Turísticas', A: '✅', B: '✅', C: '✅' },
        { nome: 'Sistema de Anúncios', A: 'Básico', B: 'Intermediário', C: 'Avançado' },
        { nome: 'Painel de Administração', A: 'Básico', B: 'Intermediário', C: 'Completo' },
        { nome: 'API para Parceiros', A: '-', B: 'Básica', C: '✅' },
        { nome: 'Multilíngue', A: '-', B: '-', C: '✅' }
    ];

    // Slides da apresentação
    const slides = [
        {
            content: `
                <div class="slide-content cover-slide">
                    <div class="cover-content">
                        <h1 class="slide-title">Portal Turístico da Serra do Cipó</h1>
                        <p class="subtitle cover-subtitle">Proposta de Projeto - 2UP Systems</p>
                    </div>
                    <div class="logo-container">
                        <img src="src/assets/images/logos/Logo 2UP.png" alt="2UP Systems Logo">
                    </div>
                </div>
            `
        },
        {
            content: `
                <div class="slide-content scenarios-slide">
                    <h2 class="slide-title">Visão Geral dos Cenários</h2>
                    <div class="slide-body">
                        <div class="table-container">
                            <table>
                                <tr>
                                    <th>Cenário</th>
                                    <th>Investimento Inicial</th>
                                    <th>Manutenção Mensal</th>
                                    <th>Prazo</th>
                                    <th>Uptime</th>
                                    <th>Tempo de Resposta</th>
                                </tr>
                                ${Object.entries(CENARIOS).map(([key, cenario]) => `
                                    <tr>
                                        <td><strong class="orange-text">${key} - ${cenario.nome}</strong></td>
                                        <td>R$ ${cenario.investimentoInicial.min.toLocaleString('pt-BR')} - ${cenario.investimentoInicial.max.toLocaleString('pt-BR')}</td>
                                        <td>R$ ${cenario.manutencaoMensal.min.toLocaleString('pt-BR')} - ${cenario.manutencaoMensal.max.toLocaleString('pt-BR')}</td>
                                        <td>${cenario.prazo} meses</td>
                                        <td>${cenario.uptime}%</td>
                                        <td>${cenario.tempoResposta} horas</td>
                                    </tr>
                                `).join('')}
                            </table>
                        </div>
                        <div class="info-cards-container">
                            <div class="info-card">
                                <i class="bi bi-graph-up"></i>
                                <h3>Escalabilidade</h3>
                                <p>Opções para diferentes necessidades e orçamentos</p>
                            </div>
                            <div class="info-card">
                                <i class="bi bi-shield-check"></i>
                                <h3>Confiabilidade</h3>
                                <p>Alto uptime e suporte rápido em todos os cenários</p>
                            </div>
                            <div class="info-card">
                                <i class="bi bi-gear"></i>
                                <h3>Personalização</h3>
                                <p>Funcionalidades adaptadas a cada nível de investimento</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            content: `
                <div class="slide-content features-slide">
                    <h2 class="slide-title">Comparativo de Funcionalidades</h2>
                    <div class="slide-body">
                        <div class="table-container">
                            <table class="funcionalidades">
                                <tr>
                                    <th>Funcionalidade</th>
                                    <th>Cenário A</th>
                                    <th>Cenário B</th>
                                    <th>Cenário C</th>
                                </tr>
                                ${FUNCIONALIDADES.map(func => `
                                    <tr>
                                        <td>${func.nome}</td>
                                        <td>${func.A === '✅' ? '<span class="highlight">✅</span>' : func.A}</td>
                                        <td>${func.B === '✅' ? '<span class="highlight">✅</span>' : func.B}</td>
                                        <td>${func.C === '✅' ? '<span class="highlight">✅</span>' : func.C}</td>
                                    </tr>
                                `).join('')}
                            </table>
                        </div>
                    </div>
                </div>
            `
        },
        {
            content: `
                <div class="slide-content stack-tech-slide">
                    <h2 class="slide-title">Stack Tecnológico</h2>
                    <div class="slide-body">
                        <div class="tech-stack">
                            ${[
                                { icon: 'server', name: 'Backend', desc: 'PHP com Laravel' },
                                { icon: 'window', name: 'Frontend', desc: 'React.js' },
                                { icon: 'database', name: 'Banco de Dados', desc: 'MySQL' },
                                { icon: 'key', name: 'Autenticação', desc: 'JWT com rotação de tokens' },
                                { icon: 'shield-lock', name: 'Segurança', desc: 'HTTPS, proteção XSS e CSRF, rate limiting' },
                                { icon: 'cloud', name: 'Hospedagem', desc: 'VPS (A), Nuvem escalável (B e C)' }
                            ].map(tech => `
                                <div class="tech-item">
                                    <i class="bi bi-${tech.icon}"></i>
                                    <h4>${tech.name}</h4>
                                    <p>${tech.desc}</p>
                                </div>
                            `).join('')}
                        </div>
                        <div class="info-cards-container bottom-cards">
                            <div class="info-card">
                                <i class="bi bi-layers"></i>
                                <h3>Arquitetura Escalável</h3>
                                <p>Projetada para crescer com o negócio</p>
                            </div>
                            <div class="info-card">
                                <i class="bi bi-shield-check"></i>
                                <h3>Segurança em Primeiro Lugar</h3>
                                <p>Práticas modernas de segurança em todos os níveis</p>
                            </div>
                            <div class="info-card">
                                <i class="bi bi-arrow-repeat"></i>
                                <h3>Integração Contínua</h3>
                                <p>Atualizações rápidas e confiáveis</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        
        {
            content: `
                <div class="slide-content payment-terms-slide">
                    <h2 class="slide-title">Termos de Pagamento e Manutenção</h2>
                    <div class="slide-body">
                        <div class="info-cards-container">
                            <div class="info-card">
                                <i class="bi bi-cash"></i>
                                <h3>Termos de Pagamento</h3>
                                <p><span class="highlight">40%</span> no início do projeto</p>
                                <p><span class="highlight">30%</span> na metade do desenvolvimento</p>
                                <p><span class="highlight">30%</span> na entrega final</p>
                            </div>
                            <div class="info-card">
                                <i class="bi bi-tools"></i>
                                <h3>Manutenção e Suporte</h3>
                                <p>Correção de bugs</p>
                                <p>Atualizações de segurança</p>
                                <p>Suporte técnico conforme SLA</p>
                                <p>Pequenas melhorias e ajustes</p>
                            </div>
                            <div class="info-card">
                                <i class="bi bi-calendar-check"></i>
                                <h3>Garantia</h3>
                                <p><span class="highlight">90 dias</span> de garantia após a entrega</p>
                                <p>Cobertura para bugs e problemas de implementação</p>
                            </div>
                        </div>
                        <div class="table-container">
                            <table>
                                <tr>
                                    <th>Cenário</th>
                                    <th>Manutenção Mensal</th>
                                    <th>Inclui</th>
                                </tr>
                                ${Object.entries(CENARIOS).map(([key, cenario]) => `
                                    <tr>
                                        <td>${key}</td>
                                        <td>R$ ${cenario.manutencaoMensal.min.toLocaleString('pt-BR')} - ${cenario.manutencaoMensal.max.toLocaleString('pt-BR')}</td>
                                        <td>Hospedagem, suporte, atualizações de segurança, backups</td>
                                    </tr>
                                `).join('')}
                            </table>
                        </div>
                    </div>
                </div>
            `
        },
        {
            content: `
                <div class="slide-content conclusion-slide">
                    <h2 class="slide-title">Conclusão</h2>
                    <div class="slide-body">
                        <ul class="conclusion-list">
                            <li><i class="bi bi-check-circle"></i> Solução escalável e customizável para atender às necessidades específicas do cliente</li>
                            <li><i class="bi bi-graph-up"></i> Três cenários de investimento para diferentes níveis de complexidade e orçamento</li>
                            <li><i class="bi bi-shield-check"></i> Foco em segurança, desempenho e experiência do usuário em todos os cenários</li>
                            <li><i class="bi bi-gear"></i> Stack tecnológico moderno e robusto, garantindo longevidade e facilidade de manutenção</li>
                            <li><i class="bi bi-headset"></i> Suporte dedicado e SLAs claros para garantir a satisfação contínua do cliente</li>
                            <li><i class="bi bi-arrow-up-right"></i> Potencial para impulsionar o turismo na Serra do Cipó através de uma plataforma digital inovadora</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            content: `
                <div class="slide-content contact-slide">
                    <h2 class="slide-title">Contato</h2>
                    <div class="slide-body">
                        <div class="contact-info">
                            <div class="contact-item">
                                <i class="bi bi-telephone"></i>
                                <p>+5531983269581</p>
                            </div>
                            <div class="contact-item">
                                <i class="bi bi-envelope"></i>
                                <p><a href="mailto:contato@2upsystems.com">contato@2upsystems.com</a></p>
                            </div>
                            <div class="contact-item">
                                <i class="bi bi-globe"></i>
                                <p><a href="https://2upsystems.com" target="_blank">2upsystems.com</a></p>
                            </div>
                            <div class="contact-item">
                                <i class="bi bi-linkedin"></i>
                                <p><a href="https://www.linkedin.com/company/2up-systems" target="_blank">LinkedIn</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        
        {
            content: `
                <div class="slide-content split-screen">
                    <div class="split-screen-left">
                        <img src="src/assets/images/logos/Logo 2UP.png" alt="2UP Systems Logo">
                    </div>
                    <div class="split-screen-divider"></div>
                    <div class="split-screen-right">
                        <h2>
                            <span class="line1">Imagine the</span>
                            <span class="line2">future now!</span>
                        </h2>
                    </div>
                </div>
            `
        }
    ];

    let currentSlide = 0;

    function createPresentation() {
        const presentationDiv = document.getElementById('presentation');
        slides.forEach((slide, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.classList.add('slide');
            if (index === 0) slideDiv.classList.add('active');
            slideDiv.innerHTML = slide.content;
            presentationDiv.appendChild(slideDiv);
        });
    }

    function addFadeInAnimation() {
        const currentSlide = document.querySelector('.slide.active');
        const title = currentSlide.querySelector('.slide-title');
        const otherElements = currentSlide.querySelectorAll('.subtitle, .info-card, .tech-item, .conclusion-list li, .contact-item, .table-container, .split-screen-left, .split-screen-right, .split-screen img, .split-screen h2');
    
        // Resetar estilos
        const allElements = title ? [title, ...otherElements] : [...otherElements];
        allElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'none';
        });
    
        // Forçar um reflow
        void currentSlide.offsetWidth;
    
        // Animar o título imediatamente (se existir)
        if (title) {
            requestAnimationFrame(() => {
                title.style.opacity = '1';
                title.style.transform = 'translateY(0)';
                title.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            });
        }
    
        // Animar outros elementos em sequência
        otherElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            }, title ? 300 + index * 100 : index * 100);
        });
    }
    
    function showSlide(index) {
        const allSlides = document.querySelectorAll('.slide');
        const oldSlide = document.querySelector('.slide.active');
        const newSlide = allSlides[index];
    
        if (oldSlide) {
            oldSlide.style.opacity = '0';
            oldSlide.classList.remove('active');
        }
    
        newSlide.classList.add('active');
        newSlide.style.opacity = '1';
    
        // Resetar estilos de todos os elementos do novo slide
        const elements = newSlide.querySelectorAll('.slide-title, .subtitle, .info-card, .tech-item, .conclusion-list li, .contact-item, .table-container, .split-screen-left, .split-screen-right, .split-screen img, .split-screen h2');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'none';
        });
    
        // Forçar um reflow
        void newSlide.offsetWidth;
    
        // Adicionar um pequeno atraso antes de iniciar as animações
        setTimeout(addFadeInAnimation, 50);
    }
    


    function showSlide(index) {
        const allSlides = document.querySelectorAll('.slide');
        const oldSlide = document.querySelector('.slide.active');
        const newSlide = allSlides[index];

        if (oldSlide) {
            oldSlide.style.opacity = '0';
            oldSlide.classList.remove('active');
        }

        newSlide.classList.add('active');
        newSlide.style.opacity = '1';

        // Resetar estilos de todos os elementos do novo slide
        const elements = newSlide.querySelectorAll('.slide-title, .subtitle, .info-card, .tech-item, .conclusion-list li, .contact-item, .table-container, .split-screen-left, .split-screen-right, .split-screen img, .split-screen h2');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'none';
        });

        // Forçar um reflow
        void newSlide.offsetWidth;

        // Adicionar um pequeno atraso antes de iniciar as animações
        setTimeout(addFadeInAnimation, 50);
    }


    function addAbstractElements() {
        const coverSlide = document.querySelector('.cover-slide');
        if (coverSlide) {
            const elements = `
                <div class="abstract-element shape1" id="shape1"></div>
                <div class="abstract-element shape2" id="shape2"></div>
                <div class="abstract-element shape3" id="shape3"></div>
            `;
            coverSlide.insertAdjacentHTML('afterbegin', elements);
        }
    }


    document.getElementById('nextBtn').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Adicionar evento de teclado para navegação
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown' || event.key === ' ') {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
    });

    // Chamar a função no carregamento e no redimensionamento da janela
    window.addEventListener('load', adjustContent);
    window.addEventListener('resize', adjustContent);

    function adjustContent() {
        const slides = document.querySelectorAll('.slide');
        slides.forEach(slide => {
            const content = slide.querySelector('.slide-content');
            const title = slide.querySelector('.slide-title');
            const body = slide.querySelector('.slide-body');

            // Resetar estilos
            content.style.transform = 'none';
            body.style.transform = 'none';

            if (slide.querySelector('.stack-tech-content')) {
                const techStack = slide.querySelector('.tech-stack');
                const bottomCards = slide.querySelector('.bottom-cards');
                const availableHeight = slide.offsetHeight - title.offsetHeight - 20; // 20px de margem
                const contentHeight = techStack.offsetHeight + bottomCards.offsetHeight;

                if (contentHeight > availableHeight) {
                    const scale = availableHeight / contentHeight;
                    body.style.transform = `scale(${scale})`;
                    body.style.transformOrigin = 'top center';
                }
            } else if (content.offsetHeight > slide.offsetHeight) {
                const scale = slide.offsetHeight / content.offsetHeight;
                content.style.transform = `scale(${scale})`;
            }
        });
    }

    // Inicializar a apresentação
    createPresentation();
    addAbstractElements();
    showSlide(0);
    adjustContent();
