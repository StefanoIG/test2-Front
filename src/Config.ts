const base_url = 'http://127.0.0.1:8000/api';

class ApiConfig {
    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    // Función para construir la URL completa
    getUrl(): string {
        return `${base_url}/${this.endpoint}`;
    }

    // Función para obtener los headers con el token si es necesario
    getHeaders(authRequired: boolean = false): HeadersInit {
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };

        if (authRequired) {
            const token = sessionStorage.getItem('token'); // Obtener el token de sessionStorage
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
        }

        return headers;
    }

    // Función para realizar fetch a la API
    async fetchData(method: string = 'GET', body?: any, authRequired: boolean = false) {
        const url = this.getUrl();
        const headers = this.getHeaders(authRequired);

        const options: RequestInit = {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error in fetchData:', error);
            throw error;
        }
    }
}

export { ApiConfig };