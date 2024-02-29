let billetter=[];
let ut="<table><tr>" +
    "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th>"+"</tr>";
    
function kjopbilett(){
    const billett={
        film: document.getElementById("Filmer").value,
        antall: document.getElementById("Antall").value,
        fornavn: document.getElementById("Fornavn").value,
        etternavn: document.getElementById("Etternavn").value,
        telefonnr: document.getElementById("Telefon").value,
        epost: document.getElementById("Epost").value
    };
    
    if (!billett.antall || !billett.fornavn || !billett.etternavn || !billett.telefonnr || !billett.epost ) {
        document.getElementById("AntallError").innerHTML="DU MÅ VELGE ANTALL!";
        document.getElementById("FornavnError").innerHTML="DU MÅ SKRIVE UNDER ET NAVN";
        document.getElementById("EtternavnError").innerHTML="DU MÅ SKRIVE UNDER ET NAVN!";
        document.getElementById("TelefonError").innerHTML=" DU MANGLER TELEFON NUMMMER!";
        document.getElementById("EpostError").innerHTML="DU MÅ SKRIVE EPOST ADRESSEN!";
        return false; 
     } else {
        billetter.push(billett);
        
        for (let liste of billetter){
            ut+="<tr>"
            ut+="<td>" + liste.film + "</td> <td>"+liste.antall+"</td><td>"+liste.fornavn+"</td>" + "<td>" + liste.etternavn+ "</td><td>"+liste.telefonnr+"</td><td>"+liste.epost+"</td>";
            ut+="</tr>"
        }   
        document.getElementById("ut").innerHTML=ut;

       
        document.getElementById("AntallError").innerHTML="";
        document.getElementById("FornavnError").innerHTML="";
        document.getElementById("EtternavnError").innerHTML="";
        document.getElementById("TelefonError").innerHTML="";
        document.getElementById("EpostError").innerHTML=""
    }

    document.getElementById("Antall").value="";
    document.getElementById("Fornavn").value="";
    document.getElementById("Etternavn").value="";
    document.getElementById("Telefon").value="";    
    document.getElementById("Epost").value="";

    return false; 
}

function SlettBiletter(){
    document.getElementById("ut").innerHTML="";
    billetter=[];
}
