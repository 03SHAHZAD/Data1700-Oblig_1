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


        for (let liste of billetter){
            ut+="<tr>"
            ut+="<td>" + liste.film + "</td> <td>"+liste.antall+"</td><td>"+liste.fornavn+"</td>" +
                "<td>" + liste.etternavn+ "</td><td>"+liste.telefonnr+"</td><td>"+liste.epost+"</td>";
            ut+="</tr>"
        }
        document.getElementById("ut").innerHTML=ut;

        billetter=[];

        document.getElementById("AntallError").innerHTML="";
        document.getElementById("FornavnError").innerHTML="";
        document.getElementById("EtternavnError").innerHTML="";
        document.getElementById("TelefonNrError").innerHTML="";
        document.getElementById("EpostError").innerHTML=""
    }

    document.getElementById("Antall").value="";
    document.getElementById("Fornavn").value="";
    document.getElementById("Etternavn").value="";
    document.getElementById("TelefonNr").value="";
    document.getElementById("Epost").value="";

}

function DeleteAlt(){
    document.getElementById("ut").innerHTML="";
    billetter=[];
}