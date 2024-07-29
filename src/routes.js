const { addNoteHandler, getAllNoteHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require("./handler");

const routes = [
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
        options: {
            cors: true
            // {
            //     origin: ['*']
            // }
        }
    },
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNoteHandler,
        options: {
            cors: true
            // {
            //     origin: ['*']
            // }
        }
    },
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
        options: {
            cors: true
            // {
            //     origin: ['*']
            // }
        }
    },
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
        options: {
            cors: true
            // {
            //     origin: ['*']
            // }
        }
    },
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
        options: {
            cors: true
            // {
            //     origin: ['*']
            // }
        }
    }
];

module.exports = routes;
