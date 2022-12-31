
app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found.');


  const { error } = validateCourse(req.body);
  if(error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
 });


app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('The course with the given ID was not found.');

  const index = courses.indexOf(course);
  courses.splice(index, 1);
  
  res.send(course);
});
