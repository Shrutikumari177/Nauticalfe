sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("nauticalfe.controller.MastView", {
        onInit() {
        },
        onPortLoc:function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RoutePortLocMaster");
        },
        onCostMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteCostMaster");
        },
        onEventMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteEventMaster");
        },
        onPortLocUpload:function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RoutePortLocUpload");
        },
        onPortMaster:function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RoutePortMaster");
        },
        onRefDocIndicator:function(){
          const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteRefDocIndicator");
        }
        
      });    }
  );
  