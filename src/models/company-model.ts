/**
 * Represents a company with the associated portal
 * and account login credentials for the user
 */
class Company {

    /** The name of the company
     * Also serves as the primary key for the Company model
     */
    private company_name: string;

    /** The URL to the company's job site portal
     *  Ex: Workday, Greenhouse, Lever, etc.
     */
    private company_portal: string;

    /** The email the user uses to log in to the work portal */
    private account_email: string;

    /** The username the user uses to log in to the work portal
     * (Optional if the portal uses email for login)
     */
    private account_username: string;

    /** The password the user uses to log in to the work portal 
     * (Optional if the portal only uses email for login)
    */
    private account_password: string;

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
        this.company_name = params.company_name.trim()
        this.company_portal = params.company_portal ?? "N/A"
        this.account_email = params.account_email ?? "N/A"
        this.account_username = params.account_username ?? "N/A"
        this.account_password = params.account_password ?? "N/A"
    };

    /** Retrieve company name */
    get companyName(): string { return this.company_name; }
    /** Modify company name */
    set companyName(name: string) { this.company_name = name; }

    /** Retrieve company portal */
    get companyPortal(): string { return this.company_portal; }
    /** Modify company portal */
    set companyPortal(portal: string) { this.company_portal = portal; }

    /** Retrieve account email */
    get accountEmail(): string { return this.account_email; }
    /** Modify account email */
    set accountEmail(email: string) { this.account_email = email; }

    /** Retrieve account username */
    get accountUsername(): string { return this.account_username; }
    /** Modify account username */
    set accountUsername(username: string) { this.account_username = username; }

    /** Retrieve account password */
    get accountPassword(): string { return this.account_password; }
    /** Modify account password */
    set accountPassword(password: string) { this.account_password = password; }
}

export default Company;
