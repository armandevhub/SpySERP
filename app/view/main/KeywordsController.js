Ext.define('SpySERP.view.main.KeywordsController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.keywords',

    onRemove: function (grid, info) {
        var keywordsGrid = this.getView();
        grid.getStore().remove(info.record);
    }
});
