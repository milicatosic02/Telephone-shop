window.addEventListener("load", function(){
    document.getElementById("forma").addEventListener("submit", function(event){
        event.preventDefault();
        var validno = true;

        var idBrend = document.getElementById("brend").value;
        if(idBrend == 0){
            alert("Izaberi brend");
            event.preventDefault();
        }


        if( document.getElementById("naziv").value.length < 2 ){
         validno = false;
         document.getElementById("naziv").classList.add("error");
         document.getElementById("naziv").classList.remove("success");        
    }
      else {
        document.getElementById("naziv").classList.add("success");
         document.getElementById("naziv").classList.remove("error");
   }

        var spanovi = document.querySelectorAll("#boje > span.badge");
        var niz = [];

        for(let i=0; i<spanovi.length; i++){
            niz.push(spanovi[i].dataset.id);
         }
         
         var jsonString = JSON.stringify(niz);
         document.getElementById("boje-input").value = jsonString;


     if(!validno){
       return;
      }

      var promenjenTelefon = {};     
      promenjenTelefon.naziv = document.getElementById("naziv").value; 
      promenjenTelefon.brend = document.getElementById("brend").value; 
      promenjenTelefon.opis = document.getElementById("opis").value; 
      promenjenTelefon.memorija = document.getElementById("memorija").value; 
      promenjenTelefon.cena = document.getElementById("cena").value; 
      promenjenTelefon.kolicina = document.getElementById("kolicina").value;
      

fetch('http://localhost:9000/telefon/' + id, {
    method:"PUT",
            headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(promenjenTelefon)
})
.then(succ=>succ.json())
.then(data=>{
    //dobili smo objekat novounesenog jela, koje ima svoj id, super
    //mozemo nazad na spisak, a mozemo i na izmenu tog jela
    window.location.href='http://localhost:8000/telefoni.html';
})
.catch(err => console.log(err));    
});

   // });

    document.getElementById("naziv").addEventListener("keypress", function(){
        this.classList.remove('success'); 
        this.classList.remove('error'); 
    });

    document.getElementById("dodaj-boju").addEventListener("click", function(){
        var id = document.getElementById("spisak-boja").value;
        // if(id==0){
        //     alert("Izaberi boju");
        //     return;
        // }
        dodajBoju( id );
    });

    document.getElementById("obrisi").addEventListener("click", function(){

        if( confirm("Potvrdi brisanje") ){

            fetch('http://localhost:9000/telefon/' + id, { method:"DELETE" })
            .then( resp=>resp.json()).then(data=>{
                  //response sadrzi samo id obrisanog
                alert("Obrisan je zapis "+data);
                window.location.href='http://localhost:8000/telefoni.html';
          })
    .catch( err=>console.log(err));

        } else {
            return;
        }
        
      
    });
});

function dodajBoju(id){ 
    document.querySelector(`#spisak-boja > option[value='${id}']`).disabled = true;
    document.getElementById("spisak-boja").selectedIndex = 0;

    var naziv = document.querySelector(`#spisak-boja > option[value='${id}']`).innerHTML;

    var span = document.createElement("span");
    span.classList.add("badge");
    span.classList.add("bg-secondary");
    span.dataset.id = id;
    span.innerHTML = naziv;

    var button = document.createElement("button");
    button.type="button";
    button.classList.add("btn");
    button.classList.add("btn-default");
    button.classList.add("btn-sm");
    button.innerHTML = "X";

    span.appendChild(button);

    document.getElementById("boje").appendChild(span);
    document.getElementById("boje").appendChild(document.createTextNode(" "));

    button.addEventListener("click", function(){  
        var id = this.parentNode.dataset.id;
        this.parentNode.parentNode.removeChild( this.parentNode );
        document.querySelector(`#spisak-boja > option[value='${id}']`).disabled = false;
      });


  }
