Ext.define('Dashboard.profile.Desktop', {
    extend: 'Core.profile.Base',
    requires:[
        'Core.profile.Base'
    ],

    mainView: 'Dashboard.view.desktop.Main',
    controllers: ['Dashboard.controller.desktop.DesktopController'],
    isActive: function () {
        return Ext.os.is.Desktop;
    }
});
