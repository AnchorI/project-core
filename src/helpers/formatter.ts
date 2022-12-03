import dayjs from "dayjs"
import timezone from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"

dayjs.extend(utc)
dayjs.extend(timezone)

class Formatter {
    public formatMoney(value: number, digits = 4) {
        return (value || 0).toFixed(digits)
    }

    public formatMoneyCents(value: number, digits = 4) {
        return ((value || 0) / 100).toFixed(digits)
    }

    public formatDateTZ(date: Date | string, tz: string, format: string) {
        try {
            return dayjs(date).tz(tz).format(format)
        } catch {
            return dayjs(date).format(format)
        }
    }

    public dateToURL(date: Date | null | undefined): string {
        return date ? dayjs(date).format("MM/DD/YYYY") : ""
    }

    public urlToDate(date: string | null | undefined): Date | null {
        return date && dayjs(date).isValid() ? dayjs(date).toDate() : null
    }

    public stringLengthFormatter(str: string, length = 25) {
        return str.length > length ? `${str.slice(0, length)}...` : str
    }
}

export default Formatter
