import moment from "moment";

export function longDateFormat(date: Date): string {
    return moment(date).format('DD/MM/YY')
}
