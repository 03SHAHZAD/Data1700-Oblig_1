let billetter=[];
let ut="<table><tr>" +
    "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefonnummer</th><th>Epost</th>"+"</tr>";
function BuyTicket(){
    const billett={
    film : document.getElementById("filmer").value,
    antall : document.getElementById("Antall").value,
    fornavn : document.getElementById("Fornavn").value,
    etternavn : document.getElementById("Etternavn").value,
    telefonnr : document.getElementById("TelefonNr").value,
    epost : document.getElementById("Epost").value
};



    if (!billett.antall || !billett.fornavn || !billett.etternavn || !billett.telefonnr || !billett.epost ) {
            document.getElementById("AntallError").innerHTML="You need to fill in amount";
            document.getElementById("FornavnError").innerHTML="You need to fill in firstname";
            document.getElementById("EtternavnError").innerHTML="You need to fill in lastname";
            document.getElementById("TelefonNrError").innerHTML="";
            document.getElementById("EpostError").innerHTML="Du må skrive noe i epost";
        } else {
        billetter.push(billett);
        
    
    
    }
}