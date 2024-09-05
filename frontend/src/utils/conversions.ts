/**
 * Convierte un string a number.
 * @param value - El valor a convertir.
 * @returns El número convertido o null si la conversión falla.
 */
export const convertStringToNumber = (value: string): number | null => {
    const convertedValue = Number(value);

    // Verificar si la conversión produjo un NaN
    if (isNaN(convertedValue)) {
        console.error(`No se pudo convertir el valor '${value}' a número.`);
        return null;
    }

    return convertedValue;
};