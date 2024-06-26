import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:7062/api',
    headers: {
        'Content-Type': 'application/json',
      
    },
});

export const getAllMovies = async () => {
    try {
        const response = await apiClient.get('/movies');
        return response.data;
    } catch (error) {
        console.error('erreur de recuperation des films:', error);
        throw error;
    }
};

export const addMovie = async (newMovie) => {
    try {
        const response = await apiClient.post('/movies', newMovie);
        return response.data;
    } catch (error) {
        console.error('erreur dajour de film:', error);
        throw error;
    }
};


