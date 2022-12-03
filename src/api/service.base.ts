import dayjs from "dayjs"

import DB from "@root/database/connect"
import Formatter from "@root/helpers/formatter"

import type { DateFilterProps } from "@interfaces/api"

abstract class BaseService {
    protected models = DB.models
    protected formatter = new Formatter()

    public getToDate(addFullDay: boolean, toDate?: string, defaultEndDate?: string) {
        if (!toDate) return defaultEndDate

        return addFullDay
            ? dayjs(toDate, "MM/DD/YYYY").add(1, "day").format("YYYY-MM-DD")
            : dayjs(toDate, "MM/DD/YYYY").add(1, "day").subtract(1, "second").format("YYYY-MM-DD HH:mm:ss")
    }

    public getDateFilter(
        dateFilter: DateFilterProps,
        defaultStartDate?: string,
        defaultEndDate?: string,
        addFullDay = false
    ): DateFilterProps {
        const { from, to } = dateFilter

        const startDate = from ? dayjs(from, "MM/DD/YYYY").format("YYYY-MM-DD") : defaultStartDate
        const endDate = this.getToDate(addFullDay, to, defaultEndDate)

        return { from: startDate, to: endDate }
    }
}

export default BaseService
