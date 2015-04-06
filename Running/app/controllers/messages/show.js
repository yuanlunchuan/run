var args = arguments[0]||
{
};

var Messages =
{
  Show:
  {
  }
};

var self = Messages.Show;

Messages.Show.Const =
{
};

Messages.Show.View =
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

Messages.Show.Controller =
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
  },
};

Messages.Show.Controller.initialize().Controller.open();
