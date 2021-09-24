const skills = [
    {id: 100000, skill: 'JS', done: true},
    {id: 100001, skill: 'HTML', done: false},
    {id: 100002, skill: 'CSS', done: false},
    {id: 100003, skill: 'Python', done: false},
    {id: 100004, skill: 'Express', done: false},
    {id: 100005, skill: 'MongoDB', done: false}

  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
    check
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  }

  function create(skill) {
    // Add the id
    skill.id = skills.length+100000;
    // New skills wouldn't be learned
    skill.done = false;
    skills.push(skill);
  }

  function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }

  function update(id, update) {
    skills[skills.findIndex(x => x['id'] === parseInt(id))]['skill'] = update
  }

  function check(id) {
    skills[skills.findIndex(x => x['id'] === parseInt(id))]['done'] = true
  }