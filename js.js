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
    function kjoppBillett(){
        const film = document.getElementById("Ailmer").value;
        const antall = document.getElementById("ANtall").value;
        const fornavn = document.getElementById("Fornavn").value;
        const etternavn = document.getElementById("Etternavn").value;
        const telefonnr = document.getElementById("TelefonNr").value;
        const epost = document.getElementById("Epost").value;
    
        if (isNaN(Number(antall))){
            alert(" Antallet er ikke et tall!");
            error=true;
        }else if(Number(antall)<1){
            alert("Antallet må være mer enn 0 !")
            error=true;
        }else{
            error = false;
        }
    
      
}