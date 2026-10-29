export type LinkItem={id:string;name:string;description:string;category:string;url?:string;icon:string;restricted?:boolean};
export const catalog:LinkItem[]=[
{id:"salas",name:"Painel de Salas",description:"Ocupação e agendamento de salas",category:"Sistemas",url:"https://painel-salas-senac-tc.vercel.app/",icon:"calendar"},
{id:"notebooks",name:"Agendamento de Notebooks",description:"Solicitação e controle de equipamentos",category:"Sistemas",icon:"laptop"},
{id:"frota",name:"Gestão de Frota",description:"Reservas e utilização de veículos",category:"Sistemas",icon:"car"},
{id:"qr",name:"QR Code Turma",description:"Primeiro acesso e consulta de RA",category:"Sistemas",url:"https://qrcodeturma.vercel.app/",icon:"qr"},
{id:"missao",name:"Missão TI",description:"Quiz e atividades educativas",category:"Ferramentas",url:"https://missaoti.vercel.app/",icon:"game"},
{id:"ava",name:"AVA Senac",description:"Ambiente virtual de aprendizagem",category:"Institucionais",icon:"graduation"},
{id:"chamada",name:"Chamada / S.A.",description:"Registro e acompanhamento de presença",category:"Institucionais",icon:"clipboard"},
{id:"suporte",name:"Suporte TI",description:"Orientações e suporte técnico",category:"Ferramentas",icon:"headphones"}
];