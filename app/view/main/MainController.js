Ext.define('SpySERP.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onEdit: function (button, e) {
        var me = this;

        var viewModel = this.getViewModel();
        var viewMode = viewModel.get('editMode');
        viewModel.set('editMode', !viewMode);

        if (viewMode) {
            me._saveKeywords(button);
            return;
        }

        me._fillTextarea(button);
    },

    onDiscard: function (button, e) {
        this.getViewModel().set('editMode', false);
    },

    _saveKeywords: function (sender) {
        var me = this;

        var grid = sender.up('#keywords-container').down('keywords');
        var editor = sender.up('#keywords-container').down('textareafield');

        var keywords = editor.getValue().split(/\r?\n/);

        var store = grid.getStore();
        var data = [];
        for (var i = 0; i < keywords.length; i++) {
            if (keywords[i] == '') continue;
            data.push({ 'name': keywords[i] });
        }
        store.setData(data);
    },

    _fillTextarea: function (sender) {
        var editor = sender.up('#keywords-container').down('textareafield');
        editor.setValue(this.getViewModel().get('keywordsList'));
    }
});
