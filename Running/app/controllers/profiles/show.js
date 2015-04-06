var args = arguments[0]||
{
};

var Profiles =
{
  Show:
  {
  }
};

var self = Profiles.Show;

Profiles.Show.Const =
{
};

Profiles.Show.View =
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

Profiles.Show.Controller =
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

Profiles.Show.Controller.initialize().Controller.open();

