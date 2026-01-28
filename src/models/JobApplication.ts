import ApplicationStatus from "./ApplicationStatus";

/**
 * Represents a job application submitted by the user
 */
class JobApplication {
    /** The application counter
     *  This also serves as the primary key for the JobApplication model
     */
    private _id: number;

    /** The name of the company to which the application is submitted
     *  References a company found in the Company model
     */
    private _company_name: string;

    /** The title of the position for which the application is submitted */
    private _position_title: string;

    /** The date the application was submitted */
    private _application_date: Date;

    /** The current status of the application 
     *  References the ApplicationStatus enum
    */
    private _status: ApplicationStatus;

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
        this._id = params.id;
        this._company_name = params.company_name;
        this._position_title = params.position_title;
        this._application_date = params.application_date;
        this._status = params.status;
    };

    /** Retrieve application ID */
    get id(): number { return this._id; }
    /** Modify application ID */
    set id(id: number) { this._id = id; }

    /** Retrieve company name */
    get company_name(): string { return this._company_name; }
    /** Modify company name */
    set company_name(name: string) { this._company_name = name; }

    /** Retrieve position title */
    get position_title(): string { return this._position_title; }
    /** Modify position title */
    set position_title(title: string) { this._position_title = title; }

    /** Retrieve application date */
    get application_date(): Date { return this._application_date; }
    /** Modify application date */
    set application_date(date: Date) { this._application_date = date; }

    /** Retrieve application status */
    get status(): ApplicationStatus { return this._status; }
    /** Modify application status */
    set status(status: ApplicationStatus) { this._status = status; }
}

export default JobApplication;
