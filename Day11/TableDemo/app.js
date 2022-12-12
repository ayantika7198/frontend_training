class myTable{
    constructor(row, col){
        this.row=row;
        this.col=col;
    }
        /*this.attachShadow({mode:'open'});

        let table1=document.createElement('table');

        for(let i=0; i<parseInt(this.row); i++){
            let row=document.createElement('tr');
            for(let j=0; j<parseInt(this.col); j++){
                let col=document.createElement('td');
                col+=`Row:${i}, Col:${j}`;
                row.appendChild(col);
            }
            table1.appendChild(row);
        }
        document.body.appendChild(table1);
        
    }
}*/
    
showTable(){
        let content=document.getElementById('table1').value;
        content="";
        content+=`<table>`;
        for(let i=0; i<parseInt(this.row); i++){
            content+=`<tr>`;
            for(let j=0; j<parseInt(this.col); j++){
                content+=`<td>Row:${i}, Col:${j}</td>`;
            }
            content+=`</tr>`;
        }
        content+=`</table>`;
        
        document.getElementById('table1').innerHTML=content;

    }
}

let tabledemo=new myTable(3,3);
tabledemo.showTable();

