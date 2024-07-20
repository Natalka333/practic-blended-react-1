import { formatDistanceToNow } from "date-fns"


const formatDateToNow = (data) => {
    return formatDistanceToNow(new Date(data), { addSuffix: true })

}

export default formatDateToNow
