/*16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer */

    let userInput = prompt("Enter the current month");
    userInput = userInput.toLowerCase();
    
    switch (userInput) {
        case "december":
        case "january":
        case "february":
            alert(`Season is Winterπ₯Άπ€§. I need a coffee π΅π΅`);
            break;
    
        case "september":
        case "october":
        case "november":
            alert(`Season is Autumn ππ`);
            break;
    
        case "march":
        case "april":
        case "may":
            alert(`Season is Spring πΈπ. `);
            break;
    
        case "june":
        case "july":
        case "august":
            alert(`Season is Summer πβοΈ. Try some Icecream π¦π¦ `);
            break;
    
        default:
            alert("Please check spelling of month you entered!")
            break;
    }