var Sites =
{
  Show:
  {
  }
};

var self = Sites.Show;

Sites.Show.Const =
{
};

Sites.Show.View =
{
  body: null,
  runingLabel: null,
  runningGroupLabel: null,
  addLabel: null,
  contentView: null,
  runningView: null,
  runnerGroupView: null,

  initView: function()
  {
    self.View.body = $.body;
    self.View.runingLabel = $.runingLabel;
    self.View.runningGroupLabel = $.runningGroupLabel;
    self.View.addLabel = $.addLabel;
    self.View.contentView = $.contentView;
  },

  initialize: function()
  {
    self.View.initView();
  },
};

Sites.Show.Controller =
{
  currentZindex: 0,

  activeRuningLabel: function()
  {
    self.View.runingLabel.color = "#007aff";
    self.View.runningGroupLabel.color = "#fff";

    self.View.runingLabel.backgroundColor = "#fff";
    self.View.runningGroupLabel.backgroundColor = "#007aff";
  },

  activeRunningGroupLabel: function()
  {
    self.View.runingLabel.color = "#fff";
    self.View.runningGroupLabel.color = "#007aff";

    self.View.runingLabel.backgroundColor = "#007aff";
    self.View.runningGroupLabel.backgroundColor = "#fff";
  },

  showRunningView: function()
  {
    self.Controller.activeRuningLabel();

    if (self.View.runningView)
    {
      self.View.runningView.zIndex = ++self.Controller.currentZindex;
    }
    else
    {
      self.View.runningView = Alloy.createController('runnings/show',
      {
      }).getView();
      self.View.contentView.add(self.View.runningView);
    }
  },

  showRunnerGroupView: function()
  {
    self.Controller.activeRunningGroupLabel();

    if (self.View.runnerGroupView)
    {
      self.View.runnerGroupView.zIndex = ++self.Controller.currentZindex;
    }
    else
    {
      self.View.runnerGroupView = Alloy.createController('runner_groups/index',
      {
      }).getView();
      self.View.contentView.add(self.View.runnerGroupView);
    }
  },

  onRuningLabelClicked: function(event)
  {
    self.Controller.showRunningView();
  },

  onRunningGroupLabelClicked: function(event)
  {
    self.Controller.showRunnerGroupView();
  },

  onAddLabelClicked: function(event)
  {
    Alloy.createController('addShares/new',
    {
    });
  },

  open: function()
  {
    self.View.runingLabel.addEventListener('click', self.Controller.onRuningLabelClicked);
    self.View.runningGroupLabel.addEventListener('click', self.Controller.onRunningGroupLabelClicked);
    self.View.addLabel.addEventListener('click', self.Controller.onAddLabelClicked);
  },

  close: function()
  {
  },

  initialize: function()
  {
    self.View.initialize();

    self.Controller.showRunningView();

    return self;
  },
};

Sites.Show.Controller.initialize().Controller.open();

