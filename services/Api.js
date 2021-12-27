import axios from 'axios';

const instance = axios.create({

	baseURL: 'https://club-api.novvodesign.com.br/api',
	timeout: 60000,
	headers: {
		'Accept-Language': 'pt-br'
	}

});

export default instance;