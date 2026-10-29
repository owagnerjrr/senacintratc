# SENAC INTRA TC

Portal público de sistemas e serviços da Unidade Senac Três Corações, com administração autenticada.

## Início
```bash
npm install
npm run dev
npm run build
```

## Fotografias da unidade e homenagem ao Pelé
Adicione as três imagens originais fornecidas pelo responsável, exatamente nestes caminhos:
- `public/images/senac-fachada.png`
- `public/images/pele-mural.png`
- `public/images/pele-monumento.png`

Até o upload dessas imagens, o banner usa fundos com as cores correspondentes e legendas. Evite usar artes geradas que alterem os monumentos originais. Verifique autorização para uso das fotos e elementos de marca em ambiente público.

## Firebase
1. Crie um projeto Firebase próprio para a intranet, sem compartilhar dados com os outros sistemas.
2. Ative Authentication com **Email/Password**.
3. Crie um banco Cloud Firestore e publique as regras do arquivo `firestore.rules`.
4. Copie `.env.example` para `.env.local` e preencha as variáveis fornecidas pelo Firebase.
5. Crie o usuário administrador no Firebase Authentication.
6. No Firestore, como proprietário, crie `admins/{UID_DO_USUARIO}` com um campo `active: true`. As regras devem ser atualizadas se quiser controle por desativação; a versão atual autoriza pela existência do documento.
7. Configure as mesmas variáveis `VITE_...` no Vercel. Não inclua senhas de usuários ou credenciais administrativas no código.

**Segurança:** o portal é público e somente permite editar o catálogo mediante autenticação e regras do Firestore. O campo `restricted` é apenas informativo. NÃO publique links secretos administrativos como itens do catálogo: documentos `links` são legíveis por todos. Proteja os sistemas de destino individualmente com autenticação e autorização próprias.

## Vercel
Importe `owagnerjrr/senacintratc` como projeto Vite, use `npm run build` e a pasta `dist`. Configure as variáveis de ambiente Firebase.

## Cadastro inicial
O catálogo contém links públicos previamente conhecidos. Links de gestão de frota, agendamento de notebooks, AVA e chamada aguardam confirmação do endereço público correto. Não foram inventados URLs.

## Preservação dos projetos
Este repositório é independente. Não modifica código, banco de dados, agendamentos ou permissões dos demais projetos.
