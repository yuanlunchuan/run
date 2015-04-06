var RunnerGroups =
{
  Index:
  {
  }
};

var self = RunnerGroups.Index;

RunnerGroups.Index.Const =
{
};

RunnerGroups.Index.View =
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

RunnerGroups.Index.Controller =
{
  open: function()
  {
  },

  close: function()
  {
  },

  showItem: function()
  {
    for (var i = 0; i<5; i++)
    {
      var runnerGroupItem = Alloy.createController('runner_groups/_item',
      {
      });
      self.View.body.add(runnerGroupItem.getView());
    }
  },

  initialize: function()
  {
    self.View.initialize();

    //TODO 暂时显示十条模拟数据
    self.Controller.showItem();

    return self;
  }
};

RunnerGroups.Index.Controller.initialize().Controller.open();
