export type Medicine={id:string;name:string;brand:string;strength:string;pack:string;purchase:number;sale:number;stock:number;updated:string;status:'In stock'|'Low stock'|'Out of stock'};
export const pharmacy={name:'SwasthyaCare Hospital Pharmacy',license:'UP-LKO-RET-2026-00421',pharmacist:'Dr. Ananya Verma, B.Pharm',address:'Gomti Nagar, Lucknow, Uttar Pradesh',phone:'+91 98765 43210',lastUpdated:'06 Oct 2026'};
export const medicines:Medicine[]=[
{id:'MED-001',name:'Paracetamol 500 mg',brand:'Cipla',strength:'500 mg',pack:'10 tablets',purchase:8.2,sale:10,stock:84,updated:'06 Oct 2026',status:'In stock'},
{id:'MED-002',name:'Azithromycin 500 mg',brand:'Azithral',strength:'500 mg',pack:'5 tablets',purchase:46,sale:52,stock:21,updated:'06 Oct 2026',status:'In stock'},
{id:'MED-003',name:'Pantoprazole 40 mg',brand:'Pantocid',strength:'40 mg',pack:'15 tablets',purchase:72,sale:88,stock:8,updated:'06 Oct 2026',status:'Low stock'},
{id:'MED-004',name:'Amoxicillin 500 mg',brand:'Mox',strength:'500 mg',pack:'10 capsules',purchase:34,sale:41,stock:0,updated:'05 Oct 2026',status:'Out of stock'},
{id:'MED-005',name:'ORS Powder',brand:'Electral',strength:'21.8 g',pack:'1 sachet',purchase:18,sale:20,stock:42,updated:'06 Oct 2026',status:'In stock'},
{id:'MED-006',name:'Atorvastatin 10 mg',brand:'Atorva',strength:'10 mg',pack:'10 tablets',purchase:31,sale:38,stock:17,updated:'06 Oct 2026',status:'In stock'},
];
