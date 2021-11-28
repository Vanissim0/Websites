function findYourBirthday() {
    let text = document.getElementsByTagName("input")[0];
    let val = text.value;
    let valueSplit = val.split(" ");
    let DD = +valueSplit[0],
        MM = +valueSplit[1],
        YYYY = +valueSplit[2];

    let NYYYY,
        NMM,
        IDAY,
        day;
        flag = 0;
    
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    let foundDay,
        foundNum,
        phrase;

    let err = ""; 

        if (DD > 31 || DD <= 0 || MM > 12 || MM <= 0 || YYYY <= 0) {
            err = "It's impossible! Fix your date and try again.";
        } else {

        if (MM <= 2) {
            NYYYY = YYYY - 1;
            NMM = 0;
        }
        else {
            NYYYY = YYYY;
            NMM = (4 * MM + 23) / 10;
        }

        IDAY = 365 * YYYY + DD + 31 * (MM - 1) - NMM + (NYYYY / 4) - ((3 * ((NYYYY / 100) + 1) / 4));
        day = Math.ceil(IDAY % 7);
        console.log(day);
        if (DD != 11 && DD != 12 && DD != 13) {
            flag = DD % 10;
        }
        
    switch(day) {
        case 0:
            foundDay = "You were born on Saturday, "
            break;
            
        case 1:
            foundDay = "You were born on Sunday, ";
            break;
            
        case 2:
            foundDay = "You were born on Monday, ";
            break;
            
        case 3:
            foundDay = "You were born on Tuesday, ";
            break;
            
        case 4:
            foundDay = "You were born on Wednesday, ";
            break;
            
        case 5:
            foundDay = "You were born on Thursday, ";
            break;
            
        case 6:
            foundDay = "You were born on Friday, ";
            break;
        
        case 7:
            foundDay = "You were born on Saturday, "
            break;
    }

    if (flag == 1) {
        foundNum = (DD + "st of ");
    }
    else if (flag == 2) {
        foundNum = (DD + "nd of ");
    }
    else if (flag == 3) {
        foundNum = (DD + "rd of ");
    }
    else {
        foundNum = (DD + "th of ");
    }
    
    phrase = (month[MM - 1] + " of " + YYYY + "!");
    }   

    if (err === "") {
        let yourBirthday = (`${foundDay} ${foundNum} ${phrase}`);
        document.getElementById("output").innerHTML = yourBirthday;
        
    } else {
        document.getElementById("output").innerHTML = err;
    }
    
}

