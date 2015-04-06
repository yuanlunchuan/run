var args = arguments[0]||
{
};

var AddShares =
{
  New:
  {
  }
};

var self = AddShares.New;

AddShares.New.Const =
{
};

AddShares.New.View =
{
  window: null,
  backLabel: null,

  initView: function()
  {
    self.View.window = $.window;
    self.View.backLabel = $.backLabel;
  },

  initialize: function()
  {
    self.View.initView();
  },
};

AddShares.New.Controller =
{
  onBackLabelClicked: function(event)
  {
    self.Controller.close();
  },

  open: function()
  {
    self.View.window.open();
    self.View.backLabel.addEventListener('click', self.Controller.onBackLabelClicked);
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

AddShares.New.Controller.initialize().Controller.open();
