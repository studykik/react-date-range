'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  'Today': {
    startDate: function startDate(now) {
      return now;
    },
    endDate: function endDate(now) {
      return now;
    }
  },

  'Yesterday': {
    startDate: function startDate(now) {
      return now.add(-1, 'days');
    },
    endDate: function endDate(now) {
      return now.add(-1, 'days');
    }
  },

  'Last 7 Days': {
    startDate: function startDate(now) {
      return now.add(-7, 'days');
    },
    endDate: function endDate(now) {
      return now;
    }
  },

  'Last 14 Days': {
    startDate: function startDate(now) {
      return now.add(-14, 'days');
    },
    endDate: function endDate(now) {
      return now;
    }
  },

  'Last 30 Days': {
    startDate: function startDate(now) {
      return now.add(-30, 'days');
    },
    endDate: function endDate(now) {
      return now;
    }
  },

  'This Month': {
    startDate: function startDate(now) {
      return now.startOf('month');
    },
    endDate: function endDate(now) {
      return now.endOf('month');
    }
  },

  'Last Month': {
    startDate: function startDate(now) {
      return now.clone().subtract(1, 'months').startOf('month');
    },
    endDate: function endDate(now) {
      return now.clone().subtract(1, 'months').endOf('month');
    }
  }
};
module.exports = exports['default'];