function obliczenia(przycisk)
{
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    
    if ( a == "" || b == "" )
    {
        document.getElementById("wynik").innerHTML = "Proszę uzupełnić obie liczby.";
    }
    else
    {
        a = parseFloat(a);
        b = parseFloat(b);
        
        /*switch (przycisk)
        {
            case 1:
            document.getElementById("wynik").innerHTML = "Wynik działania wynosi: "+ (a + b) +".";
            break;
            case 2:
            document.getElementById("wynik").innerHTML = "Wynik działania wynosi: "+ (a - b) +".";
            break;
            case 3:
            document.getElementById("wynik").innerHTML = "Wynik działania wynosi: "+ (a * b) +".";
            break;
            case 4:
            if (b == 0)
                {
                    document.getElementById("wynik").innerHTML = "Nie wolno dzielić przez zero.";
                }
                else
                {
                    document.getElementById("wynik").innerHTML = "Wynik działania wynosi: "+ (a / b) +".";
                }
            break;
        }*/
        var wynik;
        
        switch (przycisk)
        {
            case 1:
            wynik = a + b;
            break;
            case 2:
            wynik = a - b;
            break;
            case 3:
            wynik = a * b;
            break;
            case 4:
            if (b == 0)
                {
                    document.getElementById("wynik").innerHTML = "Nie wolno dzielić przez zero.";
                }
                else
                {
                    wynik = a / b;
                    document.getElementById("wynik").innerHTML = "Wynik działania wynosi: "+wynik;
                }
            break;
        }
        if ( przycisk < 4 && przycisk > 0 )
            document.getElementById("wynik").innerHTML = "Wynik działania wynosi: "+wynik;
    }

    //alert(a);
    //console.log(a);
    //document.getElementById("wynik").innerHTML = a;
}
