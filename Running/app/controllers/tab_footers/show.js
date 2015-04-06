var tabFooters =
{
  tabviewId: null,
  event: null,

  onTabFooterDestroied: function()
  {
    tabFooters.tabviewId = null;
    $.off('destroy:footer', tabFooters.onTabFooterDestroied);
    $.destroy();
  },

  onShowFindButtonClicked: function(event)
  {
    var self = tabFooters;

    if (event)
    {
      self.event = event;
      self.event.clickTabUrl = 'finds/show';
    }

    tabFooters.parentTrigger(self.event);
  },

  onShowMessageButtonClicked: function(event)
  {
    var self = tabFooters;

    if (event)
    {
      self.event = event;
      self.event.clickTabUrl = 'messages/show';
    }

    if (tabFooters.tabviewId=='showMessage')
    {
      self.event.clickActivedTab = true;
    }
    tabFooters.parentTrigger(self.event);
  },

  onShowProfileButtonClicked: function(event)
  {
    var self = tabFooters;

    if (event)
    {
      self.event = event;
      self.event.clickTabUrl = 'profiles/show';
    }

    tabFooters.parentTrigger(self.event);
  },

  onShowSiteButtonClicked: function(event)
  {
    var self = tabFooters;

    if (event)
    {
      self.event = event;
      self.event.clickTabUrl = 'sites/show';
    }
    tabFooters.parentTrigger(self.event);
  },

  parentTrigger: function(event)
  {
    if (Alloy.CFG.android)
    {
      Ti.UI.Android.hideSoftKeyboard();
    }
    if (tabFooters.tabviewId!='showSite')
    {
      event.closeWindow = true;
    }
    $.trigger('click', event);
  },

  getActiveTabView: function(options)
  {
    var activeTab = null;
    if (options.activeTab)
    {
      activeTab = $.getView(options.activeTab);
    }
    return activeTab?activeTab:$.showSite;
  },

  highlightActiveTab: function(activeTab)
  {
    var imageViewId = tabFooters.tabviewId+'Image';
    var labelId = tabFooters.tabviewId+'Label';
    var imageView = $.getView(imageViewId);
    var label = $.getView(labelId);

    var imagePath = imageView.getImage();
    if (imagePath.indexOf('-blue')==-1)
    {
      var lastIndex = imagePath.lastIndexOf('.');
      var imagePathWithoutExt = imagePath.substr(0, lastIndex);
      var ext = imagePath.substr(lastIndex);
      var newImagePath = imagePathWithoutExt+'-blue'+ext;
      imageView.setImage(newImagePath);
    };

    label.setColor('#68cc33');
  },

  setDefaultActiveTab: function(activeTab)
  {
    var imageViewId = tabFooters.tabviewId+'Image';
    var labelId = tabFooters.tabviewId+'Label';

    var imageView = $.getView(imageViewId);
    var label = $.getView(labelId);

    var imagePath = imageView.getImage();

    if (imagePath.indexOf('-blue')>-1)
    {
      var newImagePath = imagePath.replace('-blue', '');
      imageView.setImage(newImagePath);
    };

    label.setColor('#000');
  },

  highlightActive: function(options)
  {
    var tabView = tabFooters.getActiveTabView(options);

    tabFooters.tabviewId = tabView.id;

    tabFooters.highlightActiveTab(tabView);
  },

  initialize: function(options)
  {
    tabFooters.highlightActive(options);

    $.on('active', function(e)
    {
      var self = tabFooters;
      var options =
      {
      };

      if (e.activeTabUrl=='sites/show')
      {
        options.activeTab = 'showSite';
      }
      else if (e.activeTabUrl=='finds/show')
      {
        options.activeTab = 'showFind';
      }
      else if (e.activeTabUrl=='messages/show')
      {
        options.activeTab = 'showMessage';
      }
      else if (e.activeTabUrl=='profiles/show')
      {
        options.activeTab = 'showProfile';
      }
      else
      {
        options.activeTab = 'showSite';
      }

      if (tabFooters.tabviewId!=options.activeTab)
      {
        var tabView = tabFooters.getActiveTabView(
        {
          activeTab: tabFooters.tabviewId
        });
        tabFooters.setDefaultActiveTab(tabView);
        tabFooters.highlightActive(options);
      }
    });

    $.showSite.addEventListener('click', tabFooters.onShowSiteButtonClicked);

    $.showFind.addEventListener('click', tabFooters.onShowFindButtonClicked);

    $.showMessage.addEventListener('click', tabFooters.onShowMessageButtonClicked);

    $.showProfile.addEventListener('click', tabFooters.onShowProfileButtonClicked);

    return tabFooters;
  }
};

tabFooters.initialize(arguments[0]);
