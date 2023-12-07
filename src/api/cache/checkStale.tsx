
export function checkStale(stale_time: string): boolean {
    const stale_date = new Date(stale_time);
    const curr_date = new Date();

    return stale_date < curr_date;
}

type StaleTimeProps = {
    days?: number;
    hours?: number;
    minutes?: number;
}

export function newStaleTime(time_after: StaleTimeProps): string {
    let stale_time = new Date();

    if (time_after.days !== undefined) {
        stale_time.setDate(stale_time.getDate() + time_after.days);
    }

    if (time_after.hours !== undefined) {
        stale_time.setHours(stale_time.getHours() + time_after.hours);
    }

    if (time_after.minutes !== undefined) {
        stale_time.setMinutes(stale_time.getMinutes() + time_after.minutes);
    }

    return stale_time.toISOString();
}