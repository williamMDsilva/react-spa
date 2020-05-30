import { useState, useEffect } from 'react';
import Lesson from '../models/Lesson';
import { getLesson } from '../repository/LessonRepository';

export function UseLessons(lessonId) {

    const [lessons, setLessons] = useState(new Lesson());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCourse() {
            const response = await getLesson(lessonId);

            setLessons(Lesson.getListEntity(response.data['content']));
            setLoading(false);
        }

        fetchCourse();
    }, [lessonId]);

    return [lessons, loading, setLessons, setLoading];
}