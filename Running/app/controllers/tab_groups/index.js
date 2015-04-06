var args = arguments[0]||
{
};

var Tabgroup =
{
  Index:
  {
  }
};

var self = Tabgroup.Index;

Tabgroup.Index.Const =
{
};

Tabgroup.Index.View =
{
  mainContent: null,
  footerRequired: null,
  window: null,
  footerRequired: null,
  logoImageView: null,

  initView: function()
  {
    self.View.mainContent = $.mainContent;
    self.View.window = $.window;
    self.View.footerRequired = $.footerRequired;
    self.View.logoImageView = $.logoImageView;
  },

  initialize: function()
  {
    self.View.initView();
  }
};

Tabgroup.Index.Controller =
{
  enabledTabName: args.enableTabName||"sites/show",
  activeTab: null,
  menu: null,
  zIndex: 1,
  tabViews:
  {
  },
  backClickedCount: 0,

  showSite: function()
  {
    self.Controller.enabledTabName = 'sites/show';
    self.Controller.showActiveTabView();
  },

  showActiveTabView: function()
  {
    Ti.API.info('----------准备激活 self.Controller.enabledTabName： '+self.Controller.enabledTabName);
    self.View.footerRequired.trigger('active',
    {
      activeTabUrl: self.Controller.enabledTabName
    });

    if (self.Controller.tabViews[self.Controller.enabledTabName]&&self.Controller.enabledTabName!='shopping_carts/show'&&!Alloy.Globals.needRefreshTabGroup)
    {
      self.Controller.activeTab = self.Controller.tabViews[self.Controller.enabledTabName];
    }
    else
    {
      self.Controller.activeTab = Alloy.createController(self.Controller.enabledTabName,
      {
      });

      self.Controller.tabViews[self.Controller.enabledTabName] = self.Controller.activeTab;
      self.View.mainContent.add(self.Controller.activeTab.getView());
    }

    self.Controller.activeTab.getView().zIndex = ++self.Controller.zIndex;
  },

  onAndroidBackClicked: function(event)
  {
    if ('sites/show'===self.Controller.enabledTabName)
    {
      self.Controller.backClickedCount += 1;
      if (self.Controller.backClickedCount>1)
      {
        self.Controller.close();
      }
      else
      {
        Alloy.Globals.toast('再按一次返回键退出应用');

        setTimeout(function()
        {
          self.Controller.backClickedCount = 1;
        }, 3*1000);
      }
    }
    else
    {
      self.Controller.enabledTabName = 'sites/show';
      self.Controller.showActiveTabView();
    }
  },

  onFooterRequiredClicked: function(event)
  {
    if (self.Controller.enabledTabName!=event.clickTabUrl)
    {
      self.Controller.enabledTabName = event.clickTabUrl;
      self.Controller.showActiveTabView();
    }
  },

  open: function()
  {
    self.View.window.open();
    self.Controller.showActiveTabView();

    self.View.window.addEventListener('androidback', self.Controller.onAndroidBackClicked);

    self.View.footerRequired.on('click', self.Controller.onFooterRequiredClicked);
  },

  close: function()
  {
    self.View.window.close();
  },

  initialize: function()
  {
    self.View.initialize();

    return self;
  },
};

Tabgroup.Index.Controller.initialize().Controller.open();
