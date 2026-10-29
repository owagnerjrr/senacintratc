export type LinkItem={id:string;name:string;description:string;category:string;url?:string;icon:string;restricted?:boolean};
export const catalog:LinkItem[]=[
{id:"salas",name:"Painel de Salas",description:"Consultar ocupação e disponibilidade das salas",category:"Sistemas",url:"https://painel-salas-senac-tc.vercel.app/",icon:"calendar"},
{id:"notebooks",name:"Agendamento de Notebooks",description:"Docentes: consultar e solicitar notebooks",category:"Sistemas",url:"https://notebooks-tau.vercel.app/",icon:"laptop"},
{id:"frota",name:"Gestão de Frota",description:"Consultar e solicitar utilização dos veículos",category:"Sistemas",url:"https://gestaodefrota-kappa.vercel.app/",icon:"car"},
{id:"calendario",name:"Calendário Senac",description:"Consultar o calendário da unidade",category:"Institucionais",url:"https://calendariossenac.vercel.app/",icon:"calendar"}
];