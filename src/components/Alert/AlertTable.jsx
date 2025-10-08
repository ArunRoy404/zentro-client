import { AlertCircleIcon } from "lucide-react"
import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"


const AlertTable = ({ message, label }) => {
    return (
        <Alert variant="destructive" className='rounded-none'>
            <AlertCircleIcon />
            <AlertTitle>Failed to load {label}</AlertTitle>
            <AlertDescription>
                <p>Error: {message}</p>
                <ul className="list-inside list-disc text-sm">
                    <li>Check your internet connection</li>
                    <li>Ensure the server is running and accessible</li>
                    <li>Verify API endpoint URL is correct</li>
                    <li>Check your API key or authentication (if required)</li>
                    <li>Try reloading the page or clearing cache</li>
                </ul>
            </AlertDescription>
        </Alert>
    );
};

export default AlertTable;