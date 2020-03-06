module.exports = function() {
    var templates = [
        {
            id: 1,
            name: "Template1"
        },
        {
            id: 1,
            name: "Template1"
        }
    ];

    var users = [
        {
            id: 1,
            firstName: "Name",
            lastName: "Surname",
            userName: "name_surname",
            email: "name.surname@gmail.com",
            password: ""
        },
        {
            id: 2,
            firstName: "Name_2",
            lastName: "Surname_2",
            userName: "name2_surname2",
            email: "name2.surname2@gmail.com",
            password: ""
        },
    ]

    return {
        templates: templates,
        users: users
    }
}