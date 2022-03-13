/**
 * Check the age of your marriage and provide age - appropriate Messages
 * 
 * Boys Marrige Age - 21
 * Girls Marrige Age - 18
 * 
 */

// let age = prompt("তোমার বয়স টা বলে ফেলো ! লজ্জা করে লাভ নাই তুমি ৫ টাহা পাবা না");

let age = 21;

// let gender = prompt("তুমি ছেলে নাকি মেয়ে বলে ফেলো !");

let gender = "male";

if (age >= 21 && (gender == "male" || gender == "Male" || gender == "ছেলে")) {

        console.log(`
        

                "ওরে বাপুরে ! এবার বিয়ে টা করে ফেলো...বুড়ো হয়ে গেলে মেয়ে পাবা না"
        
        `);

} else if (age >= 18 && (gender == "female" || gender == "Female" || gender == "মেয়ে")) {


        console.log(`


                 "ওরে বাপুরে ! এবার বিয়ে টা করে ফেলো...বুড়ো হয়ে গেলে ছেলে পাবা না"

        `);

} else {

        console.log(`


                "ওরে বাপুরে! আরেকটু ধৈর্য ধরো .. তোমার বিয়ের বয়স এখনো হয়নি"

        `);

}