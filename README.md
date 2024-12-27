
# Galeria de Fotos

Bem-vindo ao projeto **Galeria de Fotos**! Este é um site desenvolvido com **Next.js**, **TypeScript**, e **Tailwind CSS**, que exibe uma galeria interativa de imagens com funcionalidades de slider principal, navegação por miniaturas e um modal de exibição em tela cheia.

## ✨ Funcionalidades

- Slider principal para exibição de imagens em destaque.
- Navegação lateral com botões "Anterior" e "Próximo".
- Miniaturas clicáveis para navegar rapidamente entre imagens.
- Modal de tela cheia para exibição detalhada de cada imagem.
- Suporte para **modo claro/escuro** com transições suaves.
- Estilização moderna e responsiva com **Tailwind CSS**.

---

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) – Framework React para renderização no lado do servidor e SPA.
- [TypeScript](https://www.typescriptlang.org/) – Tipagem estática para maior robustez no desenvolvimento.
- [Tailwind CSS](https://tailwindcss.com/) – Framework de estilização utilitário.
- CSS personalizado com suporte a variáveis CSS para temas dinâmicos.

---

## 🚀 Como Executar o Projeto Localmente

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### 2. Instalação

1. Clone este repositório:

   `git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio` 

2.  Instale as dependências:
  
    `npm install
     ou
    yarn install` 
    

### 3. Execução

1.  Inicie o servidor de desenvolvimento:
    
    `npm run dev
      ou
    yarn dev` 
    
2.  Acesse o projeto em seu navegador:
    
    `http://localhost:3000` 
    

----------

## 📂 Estrutura do Projeto

├── components

│   ├── Modal.tsx  # Componente de exibição de imagem em tela cheia
│   ├── PhotoItem.tsx    # Componente para exibir uma imagem na galeria
├── data
│   ├── photoList.ts   # Lista de imagens para a galeria
├── pages
│   ├── index.tsx     # Página principal
├── public
│   ├── assets       # Imagens usadas na galeria
├── styles
│   ├── globals.css      # Estilização global com Tailwind e variáveis CSS
├── tailwind.config.js     # Configurações do Tailwind CSS
├── tsconfig.json          # Configuração do TypeScript

----------

## 📸 Configuração das Imagens

As imagens utilizadas no projeto estão armazenadas na pasta `public/assets`. O arquivo `photoList.ts` contém os dados das imagens, organizados no seguinte formato:

`export const photoList = [
  { id: 1, url: "image1.jpg", title: "Foto 1" },
  { id: 2, url: "image2.jpg", title: "Foto 2" },
  { id: 3, url: "image3.jpg", title: "Foto 3" },
];` 

Para adicionar novas imagens:

1.  Salve o arquivo na pasta `public/assets`.
2.  Adicione as informações no arquivo `photoList.ts`.

----------

## 🎨 Estilização

### Modo Claro/Escuro

O projeto utiliza **variáveis CSS** para alternar entre os modos claro e escuro com base nas preferências do sistema operacional. As cores são definidas no arquivo `globals.css`:

`:root {
  --background: linear-gradient(to right, #3a4fb4, #c27ffe);
  --foreground: #171717;
}`

`@media (prefers-color-scheme: dark) {
  :root {
    --background: linear-gradient(to right, #5249a1, #0a1d44);
    --foreground: #ededed;
  }
}`

----------

## 🧩 Próximos Passos

-   Melhorar a responsividade para dispositivos menores.
-   Implementar transições animadas para mudanças no slider.
-   Adicionar suporte a upload de imagens via interface.

----------

## 📝 Licença

Este projeto está sob a licença **MIT**. Sinta-se à vontade para usá-lo, modificá-lo e compartilhá-lo!

----------

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1.  Faça um fork do projeto.
2.  Crie uma nova branch: `git checkout -b minha-feature`.
3.  Envie suas alterações: `git commit -m 'Minha nova feature'`.
4.  Submeta um Pull Request.

----------

## 🖼️ Prévia do Projeto

<img src="/public/assets/Captura do site.png" alt="Captura do layout">
----------

## 💬 Contato

-   **Nome:** Thainá
-   **Email:** thainados_santos@hotmail.com
-   **GitHub:** [ThainaSantoss](https://github.com/ThainaSantoss)