export type TabRow={label:string,total:number,counts:number[],percentages:number[]};
export function crossTab(rows:Record<string,number>[],topic:string,demographic:string,labels:string[]):TabRow[]{
 const groups=labels.map(label=>({label,total:0,counts:[0,0,0,0,0],percentages:[0,0,0,0,0]}));
 for(const row of rows){const g=groups[row[demographic]],a=row[topic];if(g&&Number.isInteger(a)&&a>=0&&a<5){g.total++;g.counts[a]++;}}
 return groups.map(g=>({...g,percentages:g.counts.map(n=>g.total?n/g.total*100:0)}));
}
export function csvCell(value:unknown):string{let s=String(value??'');if(/^[\s]*[=+\-@]|^[\t\r\n]/.test(s))s="'"+s;return '"'+s.replaceAll('"','""')+'"';}
export function csv(rows:unknown[][]){return '\uFEFF'+rows.map(r=>r.map(csvCell).join(',')).join('\r\n')+'\r\n';}
