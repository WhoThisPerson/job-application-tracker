import ApplicationStatus from "./application-status";

/**
 * Represents a job application submitted by the user
 */
class JobApplication {
    /** The application counter
     *  This also serves as the primary key for the JobApplication model
     */
    private id: number;

    /** The name of the company to which the application is submitted
     *  References a company found in the Company model
     */
    private company_name: string;

    /** The title of the position for which the application is submitted */
    private position_title: string;

    /** The date the application was submitted */
    private application_date: Date;

    /** The current status of the application 
     *  References the ApplicationStatus enum
    */
    private status: ApplicationStatus;

    /**
   * Creates a new JobApplication instance.
   * @param params - Initialization parameters
   * @param params.id - The application ID
   * @param params.company_name - The company name
   * @param params.position_title - The position title
   * @param params.application_date - The date of application
   * @param params.status - The application status
   */
    constructor(params: {
        id: number,
        company_name: string,
        position_title: string,
        application_date: Date,
        status: ApplicationStatus
    }) {
        this.id = params.id;
        this.company_name = params.company_name;
        this.position_title = params.position_title;
        this.application_date = params.application_date;
        this.status = params.status;
    };

    /** Retrieve application ID */
    get iD(): number { return this.id; }
    /** Modify application ID */
    set iD(id: number) { this.id = id; }

    /** Retrieve company name */
    get companyName(): string { return this.company_name; }
    /** Modify company name */
    set companyName(name: string) { this.company_name = name; }

    /** Retrieve position title */
    get positionTitle(): string { return this.position_title; }
    /** Modify position title */
    set positionTitle(title: string) { this.position_title = title; }

    /** Retrieve application date */
    get applicationDate(): Date { return this.application_date; }
    /** Modify application date */
    set applicationDate(date: Date) { this.application_date = date; }

    /** Retrieve application status */
    get applicationStatus(): ApplicationStatus { return this.status; }
    /** Modify application status */
    set applicationStatus(status: ApplicationStatus) { this.status = status; }
}

export default JobApplication;
