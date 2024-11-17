export function formatTimeShort(timeObj) {
    const timeComponents = [];

    if (timeObj.years > 0) {
        timeComponents.push(`${timeObj.years}${getPlural(timeObj.years, 'г', 'г', 'л')}`);
    }
    if (timeObj.months > 0) {
        timeComponents.push(`${timeObj.months}${getPlural(timeObj.months, 'м', 'м', 'м')}`);
    }
    if (timeObj.weeks > 0) {
        timeComponents.push(`${timeObj.weeks}${getPlural(timeObj.weeks, 'нед', 'нед', 'нед')}`);
    }
    if (timeObj.days > 0) {
        timeComponents.push(`${timeObj.days}${getPlural(timeObj.days, 'д', 'д', 'д')}`);
    }
    if (timeObj.hours > 0) {
        timeComponents.push(`${timeObj.hours}${getPlural(timeObj.hours, 'ч', 'ч', 'ч')}`);
    }
    if (timeObj.minutes > 0) {
        timeComponents.push(`${timeObj.minutes}${getPlural(timeObj.minutes, 'мин', 'мин', 'мин')}`);
    }

    if (timeComponents.length === 0) {
        return '≈ 0 секунд';
    }

    return `${timeComponents.join(' ')}`;
}

export function formatTime(timeObj) {
    const timeComponents = [];

    if (timeObj.years > 0) {
        timeComponents.push(`${timeObj.years} ${getPlural(timeObj.years, 'год', 'года', 'лет')}`);
    }
    if (timeObj.months > 0) {
        timeComponents.push(`${timeObj.months} ${getPlural(timeObj.months, 'месяц', 'месяца', 'месяцев')}`);
    }
    if (timeObj.weeks > 0) {
        timeComponents.push(`${timeObj.weeks} ${getPlural(timeObj.weeks, 'неделя', 'недели', 'недель')}`);
    }
    if (timeObj.days > 0) {
        timeComponents.push(`${timeObj.days} ${getPlural(timeObj.days, 'день', 'дня', 'дней')}`);
    }
    if (timeObj.hours > 0) {
        timeComponents.push(`${timeObj.hours} ${getPlural(timeObj.hours, 'час', 'часа', 'часов')}`);
    }
    if (timeObj.minutes > 0) {
        timeComponents.push(`${timeObj.minutes} ${getPlural(timeObj.minutes, 'минута', 'минуты', 'минут')}`);
    }
    if (timeObj.seconds > 0) {
        timeComponents.push(`${timeObj.seconds} ${getPlural(timeObj.seconds, 'секунда', 'секунды', 'секунд')}`);
    }

    if (timeComponents.length === 0) {
        return '≈ 0 секунд';
    }

    return `≈ ${timeComponents.join(', ')}`;
}

function getPlural(number, one, few, many) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return many;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return few;
    }
    return many;
}

export function convertTicks(ticks) {
    const secondsInTick = 0.05; // 1 тик = 0,05 секунд
    let totalSeconds = ticks * secondsInTick;

    const secondsInYear = 31536000;    // 365 дней
    const secondsInMonth = 2592000;    // 30 дней
    const secondsInWeek = 604800;      // 7 дней
    const secondsInDay = 86400;        // 24 часа
    const secondsInHour = 3600;        // 60 минут
    const secondsInMinute = 60;        // 60 секунд

    const years = Math.floor(totalSeconds / secondsInYear);
    totalSeconds %= secondsInYear;

    const months = Math.floor(totalSeconds / secondsInMonth);
    totalSeconds %= secondsInMonth;

    const weeks = Math.floor(totalSeconds / secondsInWeek);
    totalSeconds %= secondsInWeek;

    const days = Math.floor(totalSeconds / secondsInDay);
    totalSeconds %= secondsInDay;

    const hours = Math.floor(totalSeconds / secondsInHour);
    totalSeconds %= secondsInHour;

    const minutes = Math.floor(totalSeconds / secondsInMinute);
    const seconds = Math.floor(totalSeconds % secondsInMinute);

    return {
        years: years || 0,
        months: months || 0,
        weeks: weeks || 0,
        days: days || 0,
        hours: hours || 0,
        minutes: minutes || 0,
        seconds: seconds || 0
    };
}