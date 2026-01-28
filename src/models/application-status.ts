/**
 * Enum representing the status of a job application
 */
enum ApplicationStatus {
    /** Application has not been started yet */
    NOT_STARTED = "NOT STARTED",

    /** Application has been submitted */
    APPLIED = "APPLIED",

    /** Application is in the interview stage */
    INTERVIEW = "INTERVIEW",

    /** Application has been rejected */
    REJECTED = "REJECTED",
    
    /** Application has been accepted */
    ACCEPTED = "ACCEPTED",
}
export default ApplicationStatus;
