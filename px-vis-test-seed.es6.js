(function() {
  Polymer({

    is: 'px-vis-test-seed', 

    behaviors: [
        PxColorsBehavior.dataVisColors,
        PxColorsBehavior.dataVisColorTheming,
        PxVisBehavior.getSeriesColors
    ],

    properties: {
      /**
      * This property keeps track of the number of clicks.
      *
      * @property counterValue
      */
      // counterValue: {
      //   type: Number,
      //   value: 0,
      //   notify: true
      // }
            /**
      * Width of the chart.
      * @prop width
      * @type String
      */
      width: {
          type: Number,
          value: 300
      },
      /**
      * Height of the chart.
      * @prop height
      * @type String
      */
      height: {
          type: Number,
          value: 50
      },
      margin: {
          type: Object,
          value: {
            "left":10,
            "right":10,
            "top":10,
            "bottom":10
          }
      },

      chartData:{
        type : Array,
        value : [{
            'x': 1397102460000,
            'y': 0.56
          },{
            'x': 1397139660000,
            'y': 0.4
          },{
            'x': 1397177400000,
            'y': 0.43
          },{
            'x': 1397228040000,
            'y': 0.33
          },{
            'x': 1397248260000,
            'y': 0.47
          },{
            'x': 1397291280000,
            'y': 0.41
          },{
            'x': 1397318100000,
            'y': 0.26
          },{
            'x': 1397342100000,
            'y': 0.42
          },{
            'x': 1397390820000,
            'y': 0.27
          },{
            'x': 1397408100000,
            'y': 0.38
          },{
            'x': 1397458800000,
            'y': 0.36
          },{
            'x': 1397522940000,
            'y': 0.32
        }]
      },

      domainChanged:{
          type: Boolean,
          value: false
      },

      completeSeriesConfig:{
        type: Object,
        value: function(){
            return {
            'mySeries': {
              "name":"My-Series",
              "type": "column",
              "x": 'x',
              "y": 'y',
              'color': 'rgb(123,123,123)'
            }
          }
        }
      },

      dataExtents:{
        type : Object,
          value: {
            "x": [Infinity,-Infinity],
            "y": [0,-Infinity]
          }
      }
    },

    listeners: {
      "px-data-vis-colors-applied" : '_returnCompleteSeriesConfig',
    },

    /**
    * Handles click on the element defined in 'on-click' on the template.
    *
    * @method handleClick
    */
    handleClick: function(event, detail, sender) {
      this.increment();
    },

    /**
    * Increments the counter
    *
    * @method increment
    */
    increment: function() {
      this.counterValue++;
    },

  //   _returnCompleteSeriesConfig: function() {
  //       this.set('completeSeriesConfig', {
  //         'mySeries': {
  //           "name":"My-Series",
  //           "type": "column",
  //           "x": 'x',
  //           "y": 'y',
  //           'color': '#dedede'
  //         }
  //       });
  //     }
  // });
})();
