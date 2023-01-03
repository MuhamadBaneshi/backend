const mongoose = require('mangoose');

mangoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [ String ],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse(){
const course = new Course({
  name: 'Node.js Course',
  author: 'muhamad',
  tags: ['node', 'backend'],
  isPublished: true
});

  const result = await course.save();
  console.log(result);
}

//createCourse();

async function getCourses(){
  const courses = await Course
  // .find({ author: 'muhamad', isPublished: true })
  .find ({ price : { $gte: 10, $lte: 20 }})
  .limit(10)
  .sort({ name: 1 })
  .select({ name: 1, tags: 1 });
  console.log(courses);
}

getCourses();

async function updateCourse(id){
 const course = await Course.findById(id);
  if (!course) return;
  
  course.isPublished = true;
  course.author = 'Another Author';
  
  const result = await course.save();
  console.log(result);
}

async function updateCourse(id){
 const course = await Course.findByIdAndUpdate(id, {
   $set: {
     author: 'jason',
     isPublished = false
   }
 }, { new: true});
  
  console.log(course);
}

updateCourse('56563163');

async function removeCourse(id){
 const result = await Course.deleteOne({ _id: id });
  console.log(result);
}

removeCourse('56563163');

