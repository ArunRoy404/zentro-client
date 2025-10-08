import { AlertCircleIcon, CircleCheck } from "lucide-react"
import {
    Alert,
    AlertTitle,
} from "@/components/ui/alert"

const AlertCustom = ({ status }) => {

    if (!status) return <></>

    if (status.type === "success") {
        return (
            <Alert className='rounded-none text-green-700 border-green-700'>
                <CircleCheck />
                <AlertTitle>{status?.message}</AlertTitle>
            </Alert>
        )
    }

    return (
        <Alert variant="destructive" className='rounded-none border-red-400'>
            <AlertCircleIcon />
            {
                status?.type === 'error'
                    ? <AlertTitle>{status?.message}</AlertTitle>
                    : <AlertTitle>Server error: {status?.message}</AlertTitle>
            }
        </Alert>
    );
};

export default AlertCustom;