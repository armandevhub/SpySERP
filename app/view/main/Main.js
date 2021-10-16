Ext.define('SpySERP.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'SpySERP.view.main.Keywords',
        'SpySERP.view.main.KeywordsEditor'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'center'
    },
    items: [{
        xtype: 'panel',
        itemId: 'keywords-container',
        width: '100%',
        maxWidth: 680,
        height: 330,
        bodyPadding: 10,
        layout: {
            type: 'vbox'
        },
        items: [{
            xtype: 'label',
            html: 'Keywords List',
            padding: '20 0',
            cls: 'title'
        }, {
            xtype: 'keywords',
            cls: 'shadow',
            flex: 1,
            bind: {
                hidden: '{editMode}'
            }
        }, {
            xtype: 'keywordsEditor',
            cls: 'shadow',
            flex: 1,
            bind: {
                hidden: '{!editMode}'
            }
        }],
        buttons: [{
            text: 'CANCEL',
            cls: 'btn-gray',
            bind: {
                hidden: '{!editMode}'
            },
            handler: 'onDiscard'
        }, {
            bind: {
                text: '{text}',
                iconCls: '{icon}'
            },
            handler: 'onEdit'
        }]
    }],
});
