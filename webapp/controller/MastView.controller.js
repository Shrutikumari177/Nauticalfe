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
        },
        onBusinessPress: function() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteBusinessPartner");
        },
        onConfigPress: function() {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteConfigRelease");
        },
        
        onPortUpload:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RoutePortUpload");
        },
        onApiurl:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteMastApiUrl");
        },
        onVesselPress:function(){
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("RouteVesselType");
        }



        
      });    }
  );
  