Ext.define('SpySERP.store.Keywords', {
    extend: 'Ext.data.Store',

    alias: 'store.keywords',

    model: 'SpySERP.model.Keyword',
    autoLoad: true,

    proxy: {
        type: 'ajax',
        url: '/Spyserp/Keywords',
        actionMethods: {
            read: 'POST'
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
