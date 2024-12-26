/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/TopNav.js":
/*!******************************!*\
  !*** ./components/TopNav.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/Users/chandradipguha/Documents/Github/elearning/client/components/TopNav.js\";\n\n\n\n\n\n\n\n\nconst {\n  Item,\n  SubMenu\n} = antd__WEBPACK_IMPORTED_MODULE_2__.Menu;\n\nconst TopNav = () => {\n  const {\n    0: current,\n    1: setCurrent\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    state,\n    dispatch\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.Context);\n  const {\n    user\n  } = state;\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n     false && 0;\n  }, [ false && 0]);\n\n  const logout = async () => {\n    dispatch({\n      type: \"LOGOUT\"\n    });\n    window.localStorage.removeItem(\"user\");\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_7___default().get(\"/api/logout\");\n    (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(data.message);\n    router.push(\"/login\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n    mode: \"horizontal\",\n    selectedKeys: [current],\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n      onClick: e => setCurrent(e.key),\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AppstoreOutlined, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 62\n      }, undefined),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, undefined)\n    }, \"/\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, undefined), user === null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n        onClick: e => setCurrent(e.key),\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.LoginOutlined, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 19\n        }, undefined),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/login\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \"Login\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, undefined)\n      }, \"/login\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n        onClick: e => setCurrent(e.key),\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserAddOutlined, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 19\n        }, undefined),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/register\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \"Register\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }, undefined)\n      }, \"/register\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true), user !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      style: {\n        marginLeft: \"auto\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CoffeeOutlined, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 19\n        }, undefined),\n        title: user && user.name,\n        className: \"float-right\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n          onClick: logout,\n          className: \"float-right\",\n          children: \"Logout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL1RvcE5hdi5qcz83ZTU3Il0sIm5hbWVzIjpbIkl0ZW0iLCJTdWJNZW51IiwiTWVudSIsIlRvcE5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9nb3V0IiwidHlwZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJkYXRhIiwiYXhpb3MiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJwdXNoIiwiZSIsImtleSIsIm1hcmdpbkxlZnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTTtBQUFFQSxNQUFGO0FBQVFDO0FBQVIsSUFBb0JDLHNDQUExQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsTUFBTTtBQUNuQixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLCtDQUFRLENBQUMsRUFBRCxDQUF0QztBQUVBLFFBQU07QUFBRUMsU0FBRjtBQUFTQztBQUFULE1BQXNCQyxpREFBVSxDQUFDQyw2Q0FBRCxDQUF0QztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFXSixLQUFqQjtBQUVBLFFBQU1LLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsY0FBbUJULENBQW5CO0FBQ0QsR0FGUSxFQUVOLENBQUMsVUFBbUJVLENBQXBCLENBRk0sQ0FBVDs7QUFJQSxRQUFNQyxNQUFNLEdBQUcsWUFBWTtBQUN6QlIsWUFBUSxDQUFDO0FBQUVTLFVBQUksRUFBRTtBQUFSLEtBQUQsQ0FBUjtBQUNBRixVQUFNLENBQUNHLFlBQVAsQ0FBb0JDLFVBQXBCLENBQStCLE1BQS9CO0FBQ0EsVUFBTTtBQUFFQztBQUFGLFFBQVcsTUFBTUMsZ0RBQUEsQ0FBVSxhQUFWLENBQXZCO0FBQ0FDLHlEQUFLLENBQUNGLElBQUksQ0FBQ0csT0FBTixDQUFMO0FBQ0FYLFVBQU0sQ0FBQ1ksSUFBUCxDQUFZLFFBQVo7QUFDRCxHQU5EOztBQVFBLHNCQUNFLDhEQUFDLHNDQUFEO0FBQU0sUUFBSSxFQUFDLFlBQVg7QUFBd0IsZ0JBQVksRUFBRSxDQUFDcEIsT0FBRCxDQUF0QztBQUFBLDRCQUNFLDhEQUFDLElBQUQ7QUFBYyxhQUFPLEVBQUdxQixDQUFELElBQU9wQixVQUFVLENBQUNvQixDQUFDLENBQUNDLEdBQUgsQ0FBeEM7QUFBaUQsVUFBSSxlQUFFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXZEO0FBQUEsNkJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQVUsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBUUdmLElBQUksS0FBSyxJQUFULGlCQUNDO0FBQUEsOEJBQ0UsOERBQUMsSUFBRDtBQUVFLGVBQU8sRUFBR2MsQ0FBRCxJQUFPcEIsVUFBVSxDQUFDb0IsQ0FBQyxDQUFDQyxHQUFILENBRjVCO0FBR0UsWUFBSSxlQUFFLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSFI7QUFBQSwrQkFLRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxRQUFYO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEYsU0FDTSxRQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFXRSw4REFBQyxJQUFEO0FBRUUsZUFBTyxFQUFHRCxDQUFELElBQU9wQixVQUFVLENBQUNvQixDQUFDLENBQUNDLEdBQUgsQ0FGNUI7QUFHRSxZQUFJLGVBQUUsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIUjtBQUFBLCtCQUtFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFdBQVg7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRixTQUNNLFdBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRjtBQUFBLG9CQVRKLEVBZ0NHZixJQUFJLEtBQUssSUFBVCxpQkFDQztBQUFLLFdBQUssRUFBRTtBQUFFZ0Isa0JBQVUsRUFBRTtBQUFkLE9BQVo7QUFBQSw2QkFDRSw4REFBQyxPQUFEO0FBQ0UsWUFBSSxlQUFFLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFI7QUFFRSxhQUFLLEVBQUVoQixJQUFJLElBQUlBLElBQUksQ0FBQ2lCLElBRnRCO0FBR0UsaUJBQVMsRUFBQyxhQUhaO0FBQUEsK0JBS0UsOERBQUMsSUFBRDtBQUFNLGlCQUFPLEVBQUVaLE1BQWY7QUFBdUIsbUJBQVMsRUFBQyxhQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWlERCxDQXJFRDs7QUF1RUEsK0RBQWViLE1BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgQXBwc3RvcmVPdXRsaW5lZCxcbiAgQ29mZmVlT3V0bGluZWQsXG4gIExvZ2luT3V0bGluZWQsXG4gIFVzZXJBZGRPdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuXG5jb25zdCB7IEl0ZW0sIFN1Yk1lbnUgfSA9IE1lbnU7XG5cbmNvbnN0IFRvcE5hdiA9ICgpID0+IHtcbiAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IHsgdXNlciB9ID0gc3RhdGU7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9jZXNzLmJyb3dzZXIgJiYgc2V0Q3VycmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICB9LCBbcHJvY2Vzcy5icm93c2VyICYmIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZV0pO1xuXG4gIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IFwiTE9HT1VUXCIgfSk7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvbG9nb3V0XCIpO1xuICAgIHRvYXN0KGRhdGEubWVzc2FnZSk7XG4gICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiIHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfT5cbiAgICAgIDxJdGVtIGtleT1cIi9cIiBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9IGljb249ezxBcHBzdG9yZU91dGxpbmVkIC8+fT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L0l0ZW0+XG5cblxuICAgICAge3VzZXIgPT09IG51bGwgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICBrZXk9XCIvbG9naW5cIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfVxuICAgICAgICAgICAgaWNvbj17PExvZ2luT3V0bGluZWQgLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICA8YT5Mb2dpbjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0l0ZW0+XG5cbiAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAga2V5PVwiL3JlZ2lzdGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX1cbiAgICAgICAgICAgIGljb249ezxVc2VyQWRkT3V0bGluZWQgLz59XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgICAgICA8YT5SZWdpc3RlcjwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAge3VzZXIgIT09IG51bGwgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiIH19PlxuICAgICAgICAgIDxTdWJNZW51XG4gICAgICAgICAgICBpY29uPXs8Q29mZmVlT3V0bGluZWQgLz59XG4gICAgICAgICAgICB0aXRsZT17dXNlciAmJiB1c2VyLm5hbWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEl0ZW0gb25DbGljaz17bG9nb3V0fSBjbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiPlxuICAgICAgICAgICAgICBMb2dvdXRcbiAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICA8L1N1Yk1lbnU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgIDwvTWVudT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopNav.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_TopNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopNav */ \"./components/TopNav.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/css/styles.css */ \"./public/css/styles.css\");\n/* harmony import */ var _public_css_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_css_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n\nvar _jsxFileName = \"/Users/chandradipguha/Documents/Github/elearning/client/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_7__.Provider, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_5__.ToastContainer, {\n      position: \"top-center\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TopNav__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUNyQyxzQkFDSSw4REFBQyw4Q0FBRDtBQUFBLDRCQUNJLDhEQUFDLDBEQUFEO0FBQWdCLGNBQVEsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU9EOztBQUVILCtEQUFlRixLQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb3BOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9wTmF2XCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuaW1wb3J0IFwiLi4vcHVibGljL2Nzcy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuaW1wb3J0IFwicmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzc1wiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8UHJvdmlkZXI+XG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgcG9zaXRpb249XCJ0b3AtY2VudGVyXCIgLz5cbiAgICAgICAgICAgIDxUb3BOYXYgLz5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICApO1xuICB9XG4gIFxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/styles.css":
/*!*******************************!*\
  !*** ./public/css/styles.css ***!
  \*******************************/
/***/ (function() {



/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@ant-design/icons");;

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","context_index_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();