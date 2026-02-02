import readline from "node:readline";

/**
 * Defines the structure for prompt options used in CLI interactions.
 */
export type PromptOptions = {
    ask: (question: string) => Promise<string>;
    askNonEmpty: (question: string) => Promise<string>;
    askChoice: (question: string, choices: string[]) => Promise<string>;
    close: () => void;
};

/**
 * Main prompt creation function that will
 * set up the readline interface and provide
 * various prompt methods for user interaction.
 * @returns Object containing asking methods
 */
export function createPromptOptions(): PromptOptions {
    const line = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    /**
     * Baseline ask method that will be used for the other options
     */
    const ask = (question: string) => new Promise<string>((resolve) => { line.question(question, resolve); });

    /**
     * Asks the user for input until non-empty or valid response is given
     */
    const askNonEmpty = async (question: string) => {
        while (true) {
            const answer = (await ask(question)).trim();
            if (answer) { return answer; }
            console.log("Please enter a valid value");
        }
    }

    /**
     * Asks the user to choose from a set of allowed options
     */
    const askChoice = async (question: string, choices: string[]) => {
        const allowed = new Set(choices.map((c) => c.toUpperCase()));
        while (true) {
            const answer = (await ask(question)).trim().toUpperCase();
            if (allowed.has(answer)) { return answer; }
            console.log("Invalid Choice");
        }
    };
    
    /**
     * Closes the readline interface
     */
    const close = () => { line.close(); };
 
    return { ask, askNonEmpty, askChoice, close };
};