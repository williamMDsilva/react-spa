import { useState, useEffect } from 'react';
import { getCourse, getLessons } from '../repository/CourseRepository';

import Course from '../models/Couses';
import Lesson from '../models/Lesson';

export function UseCourse(courseId) {

    const [course, setCourse] = useState(new Course());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCourse() {
            const response = await getCourse(courseId);

            setCourse(new Course(response.data));
            setLoading(false);
        }

        fetchCourse();
    }, [courseId]);

    return [course, loading, setCourse, setLoading];
}

export function UseLessons(courseId) {

    const [lessons, setLessons] = useState(new Lesson());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCourse() {
            const response = await getLessons(courseId);

            setLessons(Lesson.getListEntity(response.data['content']));
            setLoading(false);
        }

        fetchCourse();
    }, [courseId]);

    return [lessons, loading, setLessons, setLoading];
}