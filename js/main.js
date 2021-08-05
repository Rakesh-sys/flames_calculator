document.getElementById("but1").style.display="none";

function flam(){

    var firstName = document.getElementById("name1").value.trim();
    var secondName = document.getElementById("name2").value.trim();
    firstName = firstName.toLowerCase();
    
    
    if (/[^a-zA-Z]/.test(firstName) || /[^a-zA-Z]/.test(secondName) || firstName=="" || secondName=="")
    {
        alert("Only Alpha values are allowed");
        document.getElementById("name1").value="";
        document.getElementById("name2").value="";
    }
    
    
    else
    {
        document.getElementById("but").style.display="none";
        document.getElementById("but1").style.display="inline-block";
        document.getElementById("name1").disabled=true;
        document.getElementById("name2").disabled=true;
        firstName = firstName.split("");
        secondName = secondName.split("");
        var lis1 =[];
        var lis2 =[];

        for (var x=0; x<firstName.length; x++)
        {
            lis1.push(firstName[x]);
        }

        for (var x=0; x<secondName.length; x++)
        {
            lis2.push(secondName[x]);
        }

        for (var x=0; x<firstName.length; x++)
        {
            if (lis2.includes(firstName[x]))
            {
                var temp1 = lis2.indexOf(firstName[x]);
                var temp2 = lis1.indexOf(firstName[x]);
                lis2 = lis2.slice(0,temp1).concat(lis2.slice(temp1+1, lis2.length));
                lis1 = lis1.slice(0,temp2).concat(lis1.slice(temp2+1, lis1.length));
            }
            
        }
        var total = lis1.length + lis2.length;

        var lis3 = ["F","L","A","M","E","S"];
        var temp4 =0;

        while (lis3.length !=1 )
        {
            var v = (total+temp4)%lis3.length;
            if (v!=0){
                lis3 = lis3.slice(0,v-1).concat(lis3.slice(v,lis3.length));
            }
            else{
                lis3 = lis3.slice(0,v-1);
            }
            temp4 = v-1;
            if (temp4 ==-1)
            {
                temp4= lis3.length;
            }
        }

        if(lis3[0]=="F")
        {
            var result = "Friends";
        }
        if(lis3[0]=="L")
        {
            var result = "Love";
        }
        if(lis3[0]=="A")
        {
            var result = "Affection";
        }
        if(lis3[0]=="M")
        {
            var result = "Marrige";
        }
        if(lis3[0]=="E")
        {
            var result = "Enemy";
        }
        if(lis3[0]=="S")
        {
            var result = "Sister ? Brother";
        }

        document.getElementById("res").innerHTML=result;


       
    }
}

function rest() {
    document.getElementById("name1").disabled=false;
    document.getElementById("name2").disabled=false;
    document.getElementById("name1").value="";
    document.getElementById("name2").value="";
    document.getElementById("but1").style.display="none";
    document.getElementById("but").style.display="inline-block";
    document.getElementById("res").innerHTML="";
}
