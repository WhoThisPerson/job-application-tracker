/**
 * Represents a company with the associated portal
 * and account login credentials for the user
 */
class Company {

    /** The name of the company
     * Also serves as the primary key for the Company model
     */
    private _company_name: string;

    /** The URL to the company's job site portal
     *  Ex: Workday, Greenhouse, Lever, etc.
     */
    private _company_portal: string;

    /** The email the user uses to log in to the work portal */
    private _account_email: string;

    /** The username the user uses to log in to the work portal
     * (Optional if the portal uses email for login)
     */
    private _account_username: string;

    /** The password the user uses to log in to the work portal 
     * (Optional if the portal only uses email for login)
    */
    private _account_password: string;

    /**
   * Creates a new Company instance.
   * @param params - Initialization parameters
   * @param params.company_name - The company name
   * @param params.company_portal - Optional portal URL
   * @param params.account_email - Optional email
   * @param params.account_username - Optional username
   * @param params.account_password - Optional password
   */
    constructor(params: {
        company_name: string,
        company_portal?: string,
        account_email?: string,
        account_username?: string,
        account_password?: string
    }) {
        this._company_name = params.company_name.trim()
        this._company_portal = params.company_portal ?? "N/A"
        this._account_email = params.account_email ?? "N/A"
        this._account_username = params.account_username ?? "N/A"
        this._account_password = params.account_password ?? "N/A"
    };

    /** Retrieve company name */
    get company_name(): string { return this._company_name; }
    /** Modify company name */
    set company_name(name: string) { this._company_name = name; }

    /** Retrieve company portal */
    get company_portal(): string { return this._company_portal; }
    /** Modify company portal */
    set company_portal(portal: string) { this._company_portal = portal; }

    /** Retrieve account email */
    get account_email(): string { return this._account_email; }
    /** Modify account email */
    set account_email(email: string) { this._account_email = email; }

    /** Retrieve account username */
    get account_username(): string { return this._account_username; }
    /** Modify account username */
    set account_username(username: string) { this._account_username = username; }

    /** Retrieve account password */
    get account_password(): string { return this._account_password; }
    /** Modify account password */
    set account_password(password: string) { this._account_password = password; }
}

export default Company;
