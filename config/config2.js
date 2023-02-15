// import dotenv from 'dotenv';
// dotenv.config();

const config = {
	
	// CON PLUGIN de VITE-----------------------
	REACT_PROJECT_NAME:import.meta.env.VITE_PROJECT_NAME|| 'No se pudo Recuperar la Variable de Entorno',
	REACT_HOTS:import.meta.env.VITE_HOTS|| 'No se pudo Recuperar la Variable de Entorno',
	REACT_PORT:import.meta.env.VITE_PORT|| 'No se pudo Recuperar la Variable de Entorno',
	REACT_APP_PORT:import.meta.env.VITE_APP_PORT|| 'No se pudo Recuperar la Variable de Entorno',
	REACT_API_URL:import.meta.env.VITE_API_URL|| 'No se pudo Recuperar la Variable de Entorno',
	REACT_APP_API_DIGITAL:import.meta.env.VITE_APP_API_DIGITAL|| 'No se pudo Recuperar la Variable de Entorno',

	REACT_APP_API_URL: import.meta.env.VITE_APP_API_URL || 'http://localhost:4001/api/v1',
	REACT_APP_API_SECURITY: import.meta.env.VITE_APP_API_SECURITY || 'http://localhost:4000/api/v1',
	REACT_APP_SERVER_IO: import.meta.env.VITE_APP_SERVER_IO || 'http://localhost:4000',
	REACT_APP_API_SP: import.meta.env.VITE_APP_API_SP || 'http://localhost:4002/api/v1',
	SECRET_KEY: import.meta.env.VITE_APP_SECRET_KEY || 'secretkey',

	VITE_APP_AVATAR_DEFAULT: import.meta.env.VITE_APP_AVATAR_DEFAULT || 'No se pudo Recuperar la Variable de Entorno',
	VITE_APP_PATH_SIGNATURE: import.meta.env.VITE_APP_PATH_SIGNATURE || 'No se pudo Recuperar la Variable de Entorno',

	PRIMARY_COLOR: '#212e36',
	SECOND_COLOR: '#2a3b47',
	// THIRD_COLOR: '#7eb0cf',
	THIRD_COLOR: '#2599e7',
	WHITE_COLOR: '#edeef0',
	SUCESS_COLOR: '#4CAF50',
	WARNING_COLOR: '#FAC32C',
	DANGER_COLOR: '#EF6262',
	BORDER_RADIUS: '3px',
	TIMEOUT_LOGIN: '10000',

};

export default config;
