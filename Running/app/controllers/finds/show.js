var args = arguments[0]||
{
};

var Finds =
{
  Show:
  {
  },
};

var self = Finds.Show;

Finds.Show.Const =
{
};

Finds.Show.View =
{
  body: null,

  initView: function()
  {
    self.View.body = $.body;
  },

  initialize: function()
  {
    self.View.initView();
  },
};

Finds.Show.Controller =
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

Finds.Show.Controller.initialize().Controller.open();

