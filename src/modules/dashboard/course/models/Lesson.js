export default class Lesson {
    constructor(entity = {}) {
        this.id = entity.id;
        this.title = entity.title;
        // get before upload video
        this.link = entity.link;
        this.description = entity.description;
        // get before upload img
        this.thumbnail = entity.thumbnail;
        this.courseId = entity.courseId || entity.course_id;
    }

    setEntity(entity = {}) {
        return new Lesson(entity);
    }

    static getListEntity(items = []){
        return items.map((item) => new Lesson(item));
    }
}