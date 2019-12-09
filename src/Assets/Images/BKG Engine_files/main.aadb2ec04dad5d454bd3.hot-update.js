webpackHotUpdate("main",{

/***/ "./src/components/ChoiceList/ChoiceListComponent.tsx":
/*!***********************************************************!*\
  !*** ./src/components/ChoiceList/ChoiceListComponent.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_frankcarpio_Desktop_code_BKG_flow_engine_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service */ "./src/service/index.ts");
/* harmony import */ var _Shared_TableComponent_TableComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/TableComponent/TableComponent */ "./src/components/Shared/TableComponent/TableComponent.tsx");
/* harmony import */ var _Utils_History__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Utils/History */ "./src/Utils/History.ts");
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Utils/Utils */ "./src/Utils/Utils.ts");

var _jsxFileName = "/Users/frankcarpio/Desktop/code/BKG/flow-engine-front/src/components/ChoiceList/ChoiceListComponent.tsx";






const ChoiceListComponent = () => {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_Users_frankcarpio_Desktop_code_BKG_flow_engine_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        choiceLists = _useState2[0],
        setChoiceLists = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState4 = Object(_Users_frankcarpio_Desktop_code_BKG_flow_engine_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        newChoiceList = _useState4[0],
        setNewChoiceList = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _useState6 = Object(_Users_frankcarpio_Desktop_code_BKG_flow_engine_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        name = _useState6[0],
        setName = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _useState8 = Object(_Users_frankcarpio_Desktop_code_BKG_flow_engine_front_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
        type = _useState8[0],
        setType = _useState8[1];

  const loadChoicelists = () => {
    _service__WEBPACK_IMPORTED_MODULE_2__["getAllChoiceList"]().then(res => {
      if (res.success) {
        setChoiceLists(res.items);
      }
    });
  };

  const goToDetail = item => {
    console.log(item);
    _Utils_History__WEBPACK_IMPORTED_MODULE_4__["default"].push("/choice_list/".concat(item.id));
  };

  const onDelete = async choice => {
    if (choice.id) {
      const res = await _service__WEBPACK_IMPORTED_MODULE_2__["deleteChoiceList"](choice.id);

      if (res.success) {
        setChoiceLists(res.items);
      }
    }
  };

  const onEdit = async item => {
    // setEditModal(item);
    if (item.id) {
      const res = await _service__WEBPACK_IMPORTED_MODULE_2__["editChoiceList"](item.id, item);

      if (res.success) {
        setChoiceLists(prevState => [res.item, ...prevState]);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    loadChoicelists();
  }, []);

  const postNewChoiceList = async () => {
    if (!name) {
      console.log("incomplete info");
    } else {
      const res = await _service__WEBPACK_IMPORTED_MODULE_2__["addNewChoiceList"]({
        name,
        type
      });

      if (res.success) {
        setName("");
        setType("");
        setNewChoiceList(false);
        _Utils_History__WEBPACK_IMPORTED_MODULE_4__["default"].push("/choice_list/" + res.item.id);
      }
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "page-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "page-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "Response Library"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ml-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-primary ml-3",
    onClick: () => {
      setNewChoiceList(last => !last);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, " ", newChoiceList ? "Cancel" : "Create new Response Library"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row row-cards row-deck",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "table-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Shared_TableComponent_TableComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: choiceLists.sort((a, b) => a.sort_index - b.sort_index),
    onDetail: goToDetail,
    onDelete: onDelete,
    onEdit: onEdit,
    columns: [{
      title: "#",
      field: "id",
      nonEditable: true
    }, {
      title: "Name",
      field: "name",
      sorting: false,
      addRowForm: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        name: "name",
        value: name,
        onChange: e => setName(e.target.value),
        className: "form-control",
        placeholder: "Name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: undefined
      })
    }, {
      title: "Last update",
      field: "updated",
      render: row => {
        return Object(_Utils_Utils__WEBPACK_IMPORTED_MODULE_5__["convertToFullDate"])(new Date(row.updated));
      }
    }],
    onSave: postNewChoiceList,
    addModel: newChoiceList,
    onEditLabel: "Rename",
    onViewLabel: "Edit",
    onCancel: r => setNewChoiceList(r),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ChoiceListComponent);

/***/ })

})
//# sourceMappingURL=main.aadb2ec04dad5d454bd3.hot-update.js.map