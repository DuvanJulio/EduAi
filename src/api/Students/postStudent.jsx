export default async function postStudent(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        const dataArray = Array.isArray(responseData) ? responseData : responseData.items || [];
        return dataArray;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return [];
    }
}