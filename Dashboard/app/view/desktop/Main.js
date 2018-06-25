Ext.define('Dashboard.view.desktop.Main', {
    extend: 'HorizontalLayout',
    controller: 'main',
    items: [{
        xtype: 'sidenav',
        reference: 'sidenav'
    }, {
        xtype: 'baseview',
        reference: 'baseview',
        flex: 1
    }]
});