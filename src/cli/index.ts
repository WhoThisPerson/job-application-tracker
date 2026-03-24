import JobApplication from "../models/job-application.ts";
import { TrackerState } from "../models/tracker-state";
import { createPromptOptions } from "./prompts.ts";

/**
 * Displays the initial menu options to the user
 * to either load an existing spreadsheet or 
 * create a new one.
 */
function displayLoadOrCreateMenu() {
    console.log("\n=== Job Application Tracker ===");
    console.log("L) Load Existing Spreadsheet");
    console.log("N) Create New Spreadsheet");
    console.log("Q) Quit");
    console.log("==============================\n");
}

/**
 * Displays the main menu options to the user
 * after loading an exisiting spreadsheet or 
 * creating a new one.
 */
function displayMainMenu() {
    console.log("\n=== Job Application Tracker Main Menu ===");
    console.log("V) View All Applications");
    console.log("A) Add Application");
    console.log("E) Edit Application");
    console.log("C) Edit Company Information");
    console.log("D) Delete Application");
    console.log("Q) Quit");
    console.log("=========================================\n");
}

/**
 * Displays all job applications in a table format
 * @param jobApplications - The list of job applications to display
 */
function viewAllApplications(jobApplications: JobApplication[]) {
    if (jobApplications.length === 0) {
        console.log("NO APPLICATIONS FOUND.");
        return;
    }
    console.log("Job Applications:");
    console.log("+----+----------------+----------------+----------------+----------------+");
    console.log("| ID | Company        | Position       | Status         | Application Date |");
    console.log("+----+----------------+----------------+----------------+----------------+");
    for (const app of jobApplications) {
        console.log(`| ${app.iD} | ${app.companyName} | ${app.positionTitle} | ${app.applicationStatus} | ${app.applicationDate} |`);
    }
    console.log("+----+----------------+----------------+----------------+----------------+");
}

/**
 * Adds a new job application to the state.
 * Function will also add the company to the state.companies array if it doesn't already exist.
 * @param state - The current state of the application, which includes the list of job applications and companies
 */
function addNewApplication(state: TrackerState) {
    console.log("Add New Application functionality is not implemented yet.");
}

/**
 * Acts as the entry point for the application.
 * Will prompt the user to either load an existing spreadsheet
 * or create a new one, then proceeds to the main menu.
 */
export async function main() {
    
    // Variable that maintains the local state of the application
    let state: TrackerState | null = null;
    const prompts = createPromptOptions();

    // Preliminary loop to load or create a spreadsheet
    while (!state) {
        displayLoadOrCreateMenu();
        const choice = await prompts.askChoice("Select an option: ", ["L", "N", "Q"]);
        
        switch (choice) {
            // Will attempt to load existing spreadsheet 
            case "L": {
                console.log("Loading existing spreadsheet...");
                break;
            }
            // Will setup a new spreadsheet
            case "N": {
                state = { companies: [], jobApplications: [] };
                console.log("New spreadsheet created...");
                break;
            }
            // Quit
            case "Q": {
                prompts.close();
                console.log("Exiting...");
                return;
            }
        }
    }

    // Main application loop
    while (state) {
        displayMainMenu();
        const choice = await prompts.askChoice("Select an option: ", ["V", "A", "E", "C", "D", "Q"]);

        switch (choice) {
            // View all applications
            case "V": {
                console.log("Viewing Applications...");
                viewAllApplications(state.jobApplications);
                break;
            }
            // Add new job application
            case "A": {
                console.log("Adding Application...");
                addNewApplication(state);
                break;
            }
            // Edit existing job application
            case "E": {
                console.log("Editing Application...");
                break;
            }
            // Edit company information
            case "C": {
                console.log("Editing Company Information...");
                break;
            }
            // Delete a job application
            case "D": {
                console.log("Deleting Application...");
                break;
            }
            // Quit and Save
            case "Q": {
                prompts.close();
                console.log("Exiting...");
                return;
            }
        }
    }
}

main();
