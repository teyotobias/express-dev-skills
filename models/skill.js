module.exports = {
    getOne,
    getAll,
    create,
    deleteOne,
    update
};

const skills = [
    {id: 125223, skill: 'HTML', proficiency: 'Expert'},
    {id: 127904, skill: 'CSS', proficiency: 'Intermediate'},
    {id: 139608, skill: 'JavaScript', proficiency: 'Beginner'}
  ];

  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);

    Object.assign(skill, updatedSkill);
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }


  function getAll() {
    return skills;
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.proficiency = 'Beginner';
    skills.push(skill);
  }

  function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
