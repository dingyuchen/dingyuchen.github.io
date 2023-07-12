type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: Date, dateStyle: DateStyle = 'medium', locales = 'en') {
    const formatter = new Intl.DateTimeFormat(locales, { dateStyle })
    return formatter.format(date)
}