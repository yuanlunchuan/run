var toast =
{
  win: null,
  messageLabel: null,
  isInitialized: false,

  initMessager: function(msg)
  {
    var win = Titanium.UI.createWindow(
    {
      height: 30,
      width: 250,
      bottom: 70,
      borderRadius: 10,
      touchEnabled: false,
      orientationModes: [Titanium.UI.PORTRAIT, Titanium.UI.UPSIDE_PORTRAIT, Titanium.UI.LANDSCAPE_LEFT, Titanium.UI.LANDSCAPE_RIGHT]
    });
    
    if (Ti.Platform.osname==='iphone')
    {
      win.orientationModes = [Ti.UI.PORTRAIT];
    }

    var messageView = Titanium.UI.createView(
    {
      id: 'messageview',
      height: 30,
      width: 250,
      borderRadius: 10,
      backgroundColor: '#000',
      opacity: 0.7,
      touchEnabled: false
    });

    var messageLabel = Titanium.UI.createLabel(
    {
      id: 'messagelabel',
      text: '',
      color: '#fff',
      width: 250,
      height: 'auto',
      font:
      {
        fontFamily: 'Helvetica Neue',
        fontSize: 13
      },
      textAlign: 'center'
    });
    win.add(messageView);
    win.add(messageLabel);

    messageLabel.text = msg;
    win.open();

    setTimeout(function()
    {
      win.close(
      {
        opacity: 0,
        duration: 500
      });
    }, 1000);
  },
  
  initialize: function()
  {
    if (!Alloy.CFG.android)
    {
      toast.initMessager();
    }
    toast.isInitialized = true;
  },
  
  show: function(msg)
  {
    if (Alloy.CFG.android)
    {
      Ti.UI.createNotification(
      {
        message: msg,
        duration: Ti.UI.NOTIFICATION_DURATION_LONG
      }).show();
    }
    else
    {
      toast.initMessager(msg);
    }
  }
};

exports.show = toast.show;
