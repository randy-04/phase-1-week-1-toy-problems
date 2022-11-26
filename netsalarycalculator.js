// function declaration with two parameters, basic salary and benefits which is set to 0 as the default.
function netSalaryCalculator(basicSal, benefits = 0) {
    // calculating gross salary which is basic salary plus benefits
    const grossSalary = basicSal + benefits;

    // displaying the gross salary value
    console.log("Gross Salary: " + "Ksh. " + grossSalary);



    // Start of Deductions

    // PAYE Deductions
    // declaring paye variable with let because it is subject to change
    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    }
    else if (grossSalary > 24000 && grossSalary <= 32333) {
        paye = grossSalary * 0.25;
    }
    else if (grossSalary > 32333) {
        paye = grossSalary * 0.3;
    }
    // displaying the PAYE deduction value
    console.log("PAYE: " + "Ksh. " + paye);

    // NHIF Deductions

    // declaring nhif variable with let because it is subject to change and to avoid declaration in each if statement
    // deductions are done on the gross salary

    let nhif;

    // I used if else statements despite being tedious because they are processedway faster than switch statements. 
    // Switch statements can use up up to 10 times more processing time because they have to be run twice or more per evaluation.
    if (grossSalary < 6000) {
        nhif = 150;
    }
    else if(grossSalary >= 6000 && grossSalary <= 7999) {
        nhif = 300;
    }
    else if(grossSalary >= 8000 && grossSalary <= 11999) {
        nhif = 400;
    }
    else if(grossSalary >= 12000 && grossSalary <= 14999) {
        nhif = 500;
    }
    else if(grossSalary >= 15000 && grossSalary <= 19999) {
        nhif = 600;
    }
    else if(grossSalary >= 20000 && grossSalary <= 24999) {
        nhif = 750;
    }
    else if(grossSalary >= 25000 && grossSalary <= 29999) {
        nhif = 850;
    }
    else if(grossSalary >= 30000 && grossSalary <= 34999) {
        nhif = 900;
    }
    else if(grossSalary >= 35000 && grossSalary <= 39999) {
        nhif = 950;
    }
    else if(grossSalary >= 40000 && grossSalary <= 44999) {
        nhif = 1000;
    }
    else if(grossSalary >= 45000 && grossSalary <= 49999) {
        nhif = 1100;
    }
    else if(grossSalary >= 50000 && grossSalary <= 59999) {
        nhif = 1200;
    }
    else if(grossSalary >= 60000 && grossSalary <= 69999) {
        nhif = 1300;
    }
    else if(grossSalary >= 70000 && grossSalary <= 79999) {
        nhif = 1400;
    }
    else if(grossSalary >= 80000 && grossSalary <= 89999) {
        nhif = 1500;
    }
    else if(grossSalary >= 90000 && grossSalary <= 99999) {
        nhif = 1600;
    }
    else if(grossSalary >= 100000) {
        nhif = 1700;
    }

    // displaying the NHIF deduction value
    console.log("NHIF: " + "Ksh. " + nhif);


    // NSSF Deductions

    // declaration of nssf using let because of subject to change (I think you now get the gist now).
    // NSSF is 5% of the gross salary
    let nssf = grossSalary * 0.05;

    // if the 5% is above 400, 400 becomes the maximum deduction
    if (nssf > 400) {
        nssf = 400;
    }

    // displaying the NSSF deduction value
    console.log("NSSF: " + "Ksh. " + nssf)


    // End of Deductions



    // Calculating the net salary which is the gross salary minus all deductions
    // summation of all deductions
    const deductions = nssf + nhif + paye;

    // displaying the total amount of deductions
    console.log("Total deductions: " + "Ksh. " + deductions);


    // net salary calculation
    const netSalary = grossSalary - deductions;

    // displaying the net salary value
    return console.log(`Your Net Salary: Ksh. ${netSalary}`);

}

console.log(netSalaryCalculator(1000))