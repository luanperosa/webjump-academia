define([
    'jquery',
    'uiComponent',
    'Magento_Ui/js/modal/confirm'
], function($, Component, modal) {
    'use strict';

    return Component.extend({
        defaults: {
            newTaskLabel: '',
            buttonSelector: '#add-new-task',
            tasks: [
                {id: 1, label: "Tasks 1", status: false},
                {id: 2, label: "Tasks 2", status: false},
                {id: 3, label: "Tasks 3", status: false},
                {id: 4, label: "Tasks 4", status: true}
            ]
        },

        initObservable: function() {
            this._super().observe(['tasks', 'newTaskLabel']);
            return this;
        },

        swithStatus: function(data, event) {
            const taskId = $(event.target).data('id');

            const items = this.tasks().map((task) => {
                if(task.id === taskId) {
                    task.status = !task.status;
                }
                return task;
            });

            this.tasks(items);
        },

        deleteTask: function(taskId) {
            let self = this;

            modal({
                content: 'Tem certeza que deseja remover a task?',
                title: 'Atenção',
                actions: {
                    confirm: function () {
                        self.actionDeleteTask(taskId);
                    }
                }
            });
        },

        actionDeleteTask: function (taskId) {
            let newTasks = [];

            if(this.tasks().length === 1) {
                this.tasks(newTasks);
                return;
            }

            this.tasks().forEach(function (task) {
                if (task.id !== taskId) {
                    newTasks.push(task);
                }
            });

            this.tasks(newTasks);
        },

        addTask: function () {
            const newTask = {
                id: this.tasks().length,
                label: this.newTaskLabel(),
                status: false
            };
            let listTasks = [];
            this.tasks().forEach(function (task) {
                listTasks.push(task);
            });
            listTasks.push(newTask);
            this.tasks(listTasks);
            this.newTaskLabel('');
        },

        checkKey: function (data, event) {
            const eventEnterInput = 13;
            if (event.keyCode === eventEnterInput) {
                event.preventDefault();
                $(this.buttonSelector).click();
            }
        }
    });
});
