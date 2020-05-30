import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_PATH;

export function getCourses() {

    const token = localStorage.getItem('token') ?? '';
    
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 20000,
        headers: {'Authorization': `Bearer ${token}`},
        validateStatus: (status) => status >= 200 && status < 500
      });
      
    return instance.get(`/course`);
}


export function getCourse(courseId) {

  const token = localStorage.getItem('token') ?? '';
  
  const instance = axios.create({
      baseURL: BASE_URL,
      timeout: 20000,
      headers: {'Authorization': `Bearer ${token}`},
      validateStatus: (status) => status >= 200 && status < 500
    });
    
  return instance.get(`/course/${courseId}`);
}

export function getLessons(courseId) {

  const token = localStorage.getItem('token') ?? '';
  
  const instance = axios.create({
      baseURL: BASE_URL,
      timeout: 20000,
      headers: {'Authorization': `Bearer ${token}`},
      validateStatus: (status) => status >= 200 && status < 500
    });
    
  return instance.get(`/course/${courseId}/lesson`);
}