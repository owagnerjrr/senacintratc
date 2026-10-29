export type LinkItem={id:string;name:string;description:string;category:string;url?:string;icon:string;restricted?:boolean};
export const catalog:LinkItem[]=[
{id:"salas",name:"Painel de Salas",description:"Consultar ocupação e disponibilidade das salas",category:"Sistemas",url:"https://painel-salas-senac-tc.vercel.app/",icon:"calendar"},
{id:"notebooks",name:"Agendamento de Notebooks",description:"Docentes: consultar e solicitar notebooks",category:"Sistemas",url:"https://notebooks-tau.vercel.app/",icon:"laptop"},
{id:"frota",name:"Gestão de Frota",description:"Consultar e solicitar utilização dos veículos",category:"Sistemas",url:"https://gestaodefrota-kappa.vercel.app/",icon:"car"},
{id:"sa",name:"S.A. — Sistema Acadêmico",description:"Acesso ao sistema acadêmico do Senac",category:"Institucionais",url:"https://sge.mg.senac.br/sa/default.asp",icon:"graduation"},
{id:"rh",name:"Portal Meu RH",description:"Serviços e informações de recursos humanos",category:"Institucionais",url:"https://meurh.mg.senac.br/web/app/RH/PortalMeuRH/#/login",icon:"clipboard"},
{id:"bpm",name:"BPM",description:"Processos e fluxos institucionais",category:"Institucionais",url:"https://bpm.mg.senac.br/workspace/",icon:"clipboard"},
{id:"secretaria",name:"Secretaria Digital",description:"Acesso à plataforma da Secretaria Digital",category:"Institucionais",url:"https://senacmg.nscl17.meucrm.online/",icon:"graduation"},
{id:"ramais",name:"Ramais da Unidade",description:"Consulte telefones, ramais e contatos dos setores",category:"Institucionais",url:"/images/Ramais%20Senac%20Tr%C3%AAs%20Cora%C3%A7%C3%B5es.png",icon:"phone"}
];