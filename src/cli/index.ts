import JobApplication from "../models/job-application.ts";
import { TrackerState } from "../models/tracker-state";
import { createPromptOptions } from "./prompts.ts";
import ApplicationStatus from "../models/application-status.ts";
import Company from "../models/company-model.ts";

const prompts = createPromptOptions();

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
 * Adds a new company to the state
 * @param company_name - The name of the company
 * @param state - The current state of the application, which includes the list of job applications and companies
 */
async function addNewCompany(company_name: string, state: TrackerState) {

    let id = state.numCompanies + 1;
    let company_portal = await prompts.askNonEmpty("Enter company portal URL or 'N/A' if there isn't one");
    let account_email = await prompts.askNonEmpty("Enter company portal email or 'N/A' if there isn't one");
    let account_username = await prompts.askNonEmpty("Enter company portal username or 'N/A' if there isn't one");
    let account_password = await prompts.askNonEmpty("Enter company portal password or 'N/A' if there isn't one");

    let new_company = new Company({
        id,
        company_name,
        company_portal,
        account_email,
        account_username,
        account_password
    })

    // Add comapny details to state
    state.companies.set(company_name, new_company);
    // Update number of companies
    state.numCompanies++;
}

/**
 * Adds a new job application to the state.
 * Function will also add the company to the state.companies array if it doesn't already exist.
 * @param state - The current state of the application, which includes the list of job applications and companies
 */
async function addNewApplication(state: TrackerState) {
    
    let id = state.numApplications + 1;
    const company_name = await prompts.askNonEmpty("Enter company name");

    // Will add company info to trackerstate if company not previously found
    if (!state.companies.has(company_name)) {
        await addNewCompany(company_name, state)
    }

    const position_title = await prompts.askNonEmpty("Enter position title");
    const status = ApplicationStatus.APPLIED;
    const application_date = new Date();

      const newApplication = new JobApplication({
            id,
            company_name,
            position_title,
            application_date,
            status
        });

    // Add new application
    state.jobApplications.push(newApplication);
    // Update numebr of applications
    state.numApplications++;
}

/**
 * Acts as the entry point for the application.
 * Will prompt the user to either load an existing spreadsheet
 * or create a new one, then proceeds to the main menu.
 */
export async function main() {

    // Variable that maintains the local state of the application
    let state: TrackerState | null = null;

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
                state = { 
                    companies: new Map<string, Company>(), 
                    jobApplications: [], 
                    numApplications: 0, 
                    numCompanies: 0};
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
                await addNewApplication(state);
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
