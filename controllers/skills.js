const Skill = require('../models/skill')
const { render } = require('../server')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    update,
    check
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        time: req.time
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })

}

function newSkill(req, res) {
    res.render('skills/new')
}

function create(req, res) {
    res.redirect('/skills')
    Skill.create(req.body)
}

function update(req, res) {
    // console.log(req.params.id)
    Skill.update(req.params.id, req.body.update)
    res.redirect('/skills')

}

function deleteSkill(req, res) {
    Skill.deleteOne(req.id)
    res.redirect('/skills')

}

function check(req, res) {
    // console.log(req)
    Skill.check(req.params.id)
    res.redirect('/skills')

}