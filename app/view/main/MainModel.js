Ext.define('SpySERP.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    requires: [
        'SpySERP.store.Keywords'
    ],

    stores: {
        keywordsStore: {
            type: 'keywords'
        }
    },

    data: {
        editMode: false
    },

    formulas: {
        text: {
            bind: {
                bindTo: '{editMode}'
            },
            get: function (editMode) {
                return (editMode) ? 'SAVE' : 'EDIT';
            }
        },
        icon: {
            bind: {
                bindTo: '{editMode}',
            },
            get: function (editMode) {
                return (editMode) ? 'x-fa fa-save' : 'x-fa fa-edit';
            }
        },
        keywordsList: {
            bind: {
                bindTo: '{keywordsStore}',
                deep: true
            },
            get: function (store) {
                if (!store) return '';

                var keywords = [];
                store.each(function (rec) {
                    keywords.push(rec.get('name'));
                });
                return keywords.join("\r\n");
            }
        }
    }
});
