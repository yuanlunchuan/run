var Index =
{
};

var self = Index;

Index.Const =
{
};

Index.View =
{
  window: null,

  initView: function()
  {
    self.View.window = $.window;
  },

  initialize: function()
  {
    self.View.initView();
  },
};

Index.Controller =
{
  open: function()
  {
    Alloy.createController("tab_groups/index",
    {
    });
  },

  close: function()
  {
  },

  initialize: function()
  {
    self.View.initialize();

    //   self.Controller.open();

    return self;
  },
};

Index.Controller.initialize().Controller.open();
