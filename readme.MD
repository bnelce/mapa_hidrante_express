Este projeto visa construir um backend para o aplicativo Mapa de Hidrantes do CBMCE.

Objetivo do aplicativo é identificar todos os hidrantes no Ceará, bem como categorizar, vistoriar e ajudar no ambiente operacional.

Requisitos Básicos

O sistema deve ter autenticação via matrícula e senha (validado por token) e repecuração de senha com disparo de emails.
O usuário deve ter acesso ao seu perfil e atualizar seu email quando necessário
O sistema deve permitir uploads de imagens dos hidrantes

Banco de Dados

O sistema é composto por 5 tabelas, devendo ser gerado via MIGRATIONS:

    Users
      id (AI), matricula, username, email, password, token, administrador, token_created_at, created_at, updated_at

    Tokens
      id (AI), user_id (FK), token, type, id_revoked, created_at, updated_at

    Files
      id (AI), file, name, type, subtype, created_at, updated_at

    Hidrantes
      id (AI), ... , created_at, updated_at

    Vistoria
      id (AI), hidrante_id (FK), ... , created_at, updated_at

Rotas

    Users
      store --> users :passando matricula, username, email, password
      index --> users :listar todos usuários (ADM)
      index --> users/:id listar o usuário
      update --> users/:id :update do nome email e password (Perfil do usuário)
      update --> users/:id :update tudo menos o password (ADM)
      delete --> users/:id :deletar usuário (ideal que só desativasse - analisar)
    
    Sessão
      store --> sessions:  Criar sessão retornando um token JWT

    Tokens
      
      store --> passwords: Solicitação de nova senha. Recebe o email, gera o token com a token_created_at
                           e dispara o email para o solicitante  
      update --> passwords: Cadastro de nova senha. Recebe o token e o password, verifica se o token foi criado há mais de 2 dias, se expirado retorna erro 401, se passar seta token e token_created_at = null e seta o novo password, e salva.

    Files

      store --> files : upload de imagem. Recebe o file, define o tamanho máximo de 2mb, monta o fileName concatenando a data e o subtype(extensão), move o arquivo para a pasta de imagens, monta o objeto file e insere (file, name, type, subtype ) no banco
      show  --> files/:id : pelo id é possível montar o caminho do arquivo e mostrar em tela

    Hidrantes

    ...

    Vistorias

    ...

    












