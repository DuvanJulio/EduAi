export default async function getTeachers(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        const dataArray = Array.isArray(data) ? data : data.items || [];
        return dataArray;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return [];
    }
}