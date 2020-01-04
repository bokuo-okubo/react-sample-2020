import dayjs from 'dayjs'

export const formatDate = (timestamp: string) =>
  dayjs(timestamp).format('DD/MM/YYYY HH:mm:ss')
