Ext.define('SpySERP.view.main.KeywordsEditor', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.keywordsEditor',

    layout: {
        type: 'vbox'
    },
    scrollable: true,
    border: true,
    bodyPadding: 10,
    items: [{
        xtype: 'label',
        html: 'Put your keywords',
        cls: 'subtitle'
    }, {
        xtype: 'textareafield',
        flex: 1,
        bind: {
            value: '{keywordsList}'
        }
    }]
});
