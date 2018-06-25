Ext.define('Dashboard.view.desktop.content.subview.MainContent', {
    extend: 'VerticalLayout',
    alias: 'widget.maincontent',
    items: [{
        xtype: 'headercontent',
        height: 75
    }, {
        xtype: 'maindevice',
        flex: 1
    },{
        xtype: 'footercontent',
        height: 75
    }]
});