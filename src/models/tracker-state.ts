import Company from './company-model';
import JobApplication from './job-application';

/**
 * Represents the overall state of the tracker application
 */
export type TrackerState = {
    /**
     * Maintains list of companies being tracked
     */
    companies: Company[];
    /**
     * Maintains list of job applications being tracked
     */
    jobApplications: JobApplication[];
}
