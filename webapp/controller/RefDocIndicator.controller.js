sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/ColumnListItem",
        "sap/m/Text",
        "sap/m/Select",
        "sap/ui/core/Item"
    ],
    function(BaseController,ColumnListItem, Text, Select, Item) {
      "use strict";
  
      return BaseController.extend("nauticalfe.controller.RefDocIndicator", {
        addedRows: [],
        onInit() {
        },
        onBackPress: function () {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.navTo("MastView");
        },
        onCreatePress: function() {
          // Get the reference to the table by its ID
          var oTable = this.byId("firstTableId");

          // Create a new row (ColumnListItem)
          var oNewRow = new ColumnListItem();

          // Add cells to the new row
          oNewRow.addCell(new Select({
              items: [
                  new Item({ text: "SALES CONTRACT" }),
                  new Item({ text: "PURCHASE CONTRACT" }),
                  new Item({ text: "SALES ORDER" }),
                  new Item({ text: "PURCHASE ORDER" }),
                  new Item({ text: "NOMINATION KEY" }),
                  
                  // Add more items as needed
              ]
          }));

          oNewRow.addCell(new Text({ text: "" }));
          oNewRow.addCell(new Text({ text: "" }));
          // Add more cells as needed

          // Add the new row to the table
          oTable.addItem(oNewRow);
      },
      onSave: function() {
        // Perform save operation for added rows
        this.addedRows.forEach(function(row) {
            // Example: Access and process each added row
            // Access data from cells of the row and perform save operation
            // Save logic here...

            // For example, accessing the cells of the row:
            var cells = row.getCells();
            var selectValue = cells[0].getSelectedItem().getText();
            var textValue1 = cells[1].getText();
            var textValue2 = cells[2].getText();

            // Perform the save operation with the retrieved data
            // Replace this with your save logic using the retrieved values
            console.log("Save:", selectValue, textValue1, textValue2);
        });

        // Clear the addedRows array after saving
            this.addedRows = [];
    }

      });
    }
  );
  