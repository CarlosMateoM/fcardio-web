const format = (date) => {
    
    const formatter = new Intl.DateTimeFormat('es-CO', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'America/Bogota'
    });

    return formatter.format(new Date(date));
}

export default format;