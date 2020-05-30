import React from 'react';
import { UseLessons } from '../../hooks/CourseHook';
import CheckListLessons from './CheckListLessons.jsx';

function RenderListLessons({courseId}){
    
    const [lessons, loading] = UseLessons(courseId);

    if(!loading){
        return <CheckListLessons lessons={lessons} courseId={courseId}/>
    }

    return <div>loading</div>
}

export default function LessonList(props) {
    return (<div style={{width:'100%'}}>
        <RenderListLessons {...props}/>
    </div>);
}