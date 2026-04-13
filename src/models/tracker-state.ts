import Company from './company-model';
import JobApplication from './job-application';

/**
 * Represents the overall state of the tracker application
 */
export type TrackerState = {
    /**
     * Maintains mapping of company name -> Company object
     * Done to achieve faster lookup and alphabetical sorting
     */
    companies: Map<string, Company>;
    /**
     * Maintains list of job applications being tracked
     */
    jobApplications: JobApplication[];
    /**
     * Tracks number of companies
     */
    numCompanies: number;
    /**
     * Tracks number of applications
     */
    numApplications: number;
}
