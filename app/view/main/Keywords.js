Ext.define('SpySERP.view.main.Keywords', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.keywords',

    requires: [
        'SpySERP.view.main.KeywordsController'
    ],

    controller: 'keywords',

    hideHeaders: true,
    disableSelection: true,

    bind: {
        store: '{keywordsStore}'
    },

    columns: [{
        xtype: 'rownumberer',
        tdCls: 'keywords-rownumberer',
        width: 50,
        resizable: true
    }, {
        text: 'Name',
        dataIndex: 'name',
        flex: 1,
        cell: {
            userCls: 'bold'
        }
    }, {
        width: 50,
        hideable: false,
        cell: {
            tools: {
                remove: {
                    iconCls: 'x-fa fa-trash',
                    handler: 'onRemove'
                }
            }
        }
    }]
});
