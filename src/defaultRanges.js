export default {
  'Today'         : {
    startDate     : (now) => {
      return now;
    },
    endDate       : (now) => {
      return now;
    }
  },

  'Yesterday'     : {
    startDate     : (now) => {
      return now.add(-1, 'days');
    },
    endDate       : (now) => {
      return now.add(-1, 'days');
    }
  },

  'Last 7 Days'   : {
    startDate     : (now) => {
      return now.add(-7, 'days');
    },
    endDate       : (now) => {
      return now;
    }
  },

  'Last 14 Days'   : {
    startDate     : (now) => {
      return now.add(-14, 'days');
    },
    endDate       : (now) => {
      return now;
    }
  },

  'Last 30 Days'  : {
    startDate     : (now) => {
      return now.add(-30, 'days');
    },
    endDate       : (now) => {
      return now;
    }
  },

  'This Month'    : {
    startDate     : (now) => {
      return now.startOf('month');
    },
    endDate       : (now) => {
      return now.endOf('month');
    }
  },

  'Last Month'    : {
    startDate     : (now) => {
      return now.clone().subtract(1, 'months').startOf('month');
    },
    endDate       : (now) => {
      return now.clone().subtract(1, 'months').endOf('month');
    }
  }
}
