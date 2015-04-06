var RunnerGroups =
{
  Item:
  {
  }
};

RunnerGroups.Item.Const =
{
};

var self = RunnerGroups.Item;

RunnerGroups.Item.View =
{
  body: null,

  initView: function()
  {
    self.View.body = $.body;
  },

  initialize: function()
  {
    self.View.initView();
  }
};

RunnerGroups.Item.Controller =
{
  open: function()
  {
  },

  close: function()
  {
  },

  initialize: function()
  {
    self.View.initialize();

    return self;
  }
};

RunnerGroups.Item.Controller.initialize().Controller.open();
