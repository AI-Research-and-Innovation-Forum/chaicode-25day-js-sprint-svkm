//destructuring objects

const course={
    courseName:"Js with chai",
    price:"999",
    courseTeacher:"hiteshChoudhary"
}

const {courseTeacher:teacher}=course
//syntax-->
//const {property:new_name(optional)}=object_name
console.log(teacher);
//now we can further use teacher instead of course.courseTeacher

// API sends data in form of JSON (JavaScript Object Notation)
//API doesnt always give data in form of object but also in arrays or both

//ex API --> https://api.github.com/users/hiteshchoudhary

