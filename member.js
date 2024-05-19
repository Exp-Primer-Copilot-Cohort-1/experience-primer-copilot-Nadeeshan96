function skillsMember() {
    // Create a new member
    const member = {
        name: 'Giovanni',
        age: 30,
        skills: ['JS', 'React', 'Node']
    };

    // Add a new skill
    member.skills.push('Mongo');

    // Remove a skill
    member.skills.splice(2, 1);

    // Update a skill
    member.skills[0] = 'JavaScript';

    return member;
}