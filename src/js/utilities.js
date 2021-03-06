(function() {
  var Wonkavision;

  Wonkavision = this.Wonkavision;

  Wonkavision.Utilities = {
    keyToDate: function(keyStr, unwrap) {
      var date, dateStr;

      if (unwrap == null) {
        unwrap = true;
      }
      keyStr = keyStr.toString().replace("-", "");
      dateStr = "" + keyStr.slice(0, 4) + "-" + (keyStr.slice(4, 6) || '01') + "-" + (keyStr.slice(6, 8) || '01');
      date = moment(dateStr);
      if (unwrap) {
        return date._d;
      } else {
        return date;
      }
    },
    dateToKey: function(date) {
      if (date == null) {
        date = moment();
      }
      return parseInt(moment(date).format("YYYYMMDD"));
    },
    rangeToKeys: function(dateRange) {
      return _.map(dateRange, this.dateToKey);
    },
    beginningOfMonth: function(date) {
      if (date == null) {
        date = new Date();
      }
      return moment(date).startOf('month')._d;
    },
    endOfMonth: function(date) {
      if (date == null) {
        date = new Date();
      }
      return moment(date).endOf('month')._d;
    },
    quarter: function(date) {
      if (date == null) {
        date = new Date();
      }
      return parseInt(moment(date).month() / 3) + 1;
    },
    beginningOfQuarter: function(date) {
      var offset;

      if (date == null) {
        date = new Date();
      }
      date = moment(date);
      offset = date.month() % 3;
      return date.add("months", offset * -1).date(1)._d;
    },
    beginningOfYear: function(date) {
      if (date == null) {
        date = new Date();
      }
      return moment(date).dayOfYear(1)._d;
    },
    dateRange: function(startDate, endDate, toKeys) {
      var range;

      if (toKeys == null) {
        toKeys = false;
      }
      range = [startDate, endDate];
      if (toKeys) {
        return this.rangeToKeys(range);
      } else {
        return range;
      }
    },
    timeWindow: function(startDate, period, windowSize, toKeys) {
      var end, start;

      if (toKeys == null) {
        toKeys = false;
      }
      start = moment(startDate).add(period, windowSize * -1)._d;
      end = moment(startDate);
      return this.dateRange(start, end, toKeys);
    },
    mtd: function(startDate, toKeys) {
      var end, start;

      if (startDate == null) {
        startDate = new Date();
      }
      if (toKeys == null) {
        toKeys = false;
      }
      start = this.beginningOfMonth(startDate);
      end = startDate;
      return this.dateRange(start, end, toKeys);
    },
    ytd: function(startDate, toKeys) {
      var end, start;

      if (startDate == null) {
        startDate = new Date();
      }
      if (toKeys == null) {
        toKeys = false;
      }
      start = this.beginningOfYear(startDate);
      end = startDate;
      return this.dateRange(start, end, toKeys);
    },
    qtd: function(startDate, toKeys) {
      var end, start;

      if (startDate == null) {
        startDate = new Date();
      }
      if (toKeys == null) {
        toKeys = false;
      }
      start = this.beginningOfQuarter(startDate);
      end = startDate;
      return this.dateRange(start, end, toKeys);
    },
    lastMonth: function(startDate, toKeys) {
      var start;

      if (startDate == null) {
        startDate = new Date();
      }
      if (toKeys == null) {
        toKeys = false;
      }
      start = moment(start).add("months", -1);
      return this.dateRange(this.beginningOfMonth(start), this.endOfMonth(start), toKeys);
    },
    smoothSeries: function(points, opts) {
      var calc,
        _this = this;

      if (opts == null) {
        opts = {};
      }
      _.defaults(opts, {
        windowSize: 30,
        windowType: "days",
        calculation: "average",
        transformation: function(val) {
          return val;
        }
      });
      calc = new Wonkavision.MovingCalculation(opts);
      _.each(points, function(point) {
        return calc.add(point.x, point.y);
      });
      return _.map(calc.values.slice(opts.windowSize), function(point) {
        return {
          x: point[0],
          y: point[1]
        };
      });
    },
    sortRows: function(cellset, options) {
      var columnKey, dir, measureName;

      if (options == null) {
        options = {};
      }
      measureName = options["measureName"] || cellset.measureNames[0];
      columnKey = options["columnKey"] || null;
      dir = options["direction"] || 1;
      return cellset.rows.dimensions[0].sortBy(function(m) {
        var _ref, _ref1;

        return (((_ref = cellset.cell(columnKey, m.key)) != null ? (_ref1 = _ref.measures[measureName]) != null ? _ref1.value : void 0 : void 0) || 0) * dir;
      });
    }
  };

}).call(this);
