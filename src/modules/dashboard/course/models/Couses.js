export default class Course {
    constructor(entity = {}) {
        this.id = entity.id;
        this.name = entity.name;
        this.category = entity.category;
        this.description = entity.description;
        this.author = entity.author;
        this.color = entity.color;
    }

    setEntity(entity = {}) {
        return new Course(entity);
    }

}