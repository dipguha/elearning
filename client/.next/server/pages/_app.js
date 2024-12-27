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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/Users/chandradipguha/Documents/Github/elearning/client/components/TopNav.js\";\n\n\n\n\n\n\n\n\nconst {\n  Item,\n  SubMenu,\n  ItemGroup\n} = antd__WEBPACK_IMPORTED_MODULE_2__.Menu;\n\nconst TopNav = () => {\n  const {\n    0: current,\n    1: setCurrent\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    state,\n    dispatch\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.Context);\n  const {\n    user\n  } = state;\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n     false && 0;\n  }, [ false && 0]);\n\n  const logout = async () => {\n    dispatch({\n      type: \"LOGOUT\"\n    });\n    window.localStorage.removeItem(\"user\");\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"/api/logout\");\n    (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(data.message);\n    router.push(\"/login\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n    mode: \"horizontal\",\n    selectedKeys: [current],\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n      onClick: e => setCurrent(e.key),\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AppstoreOutlined, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 62\n      }, undefined),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, undefined)\n    }, \"/\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, undefined), user && user.role && user.role.includes(\"Instructor\") ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n      onClick: e => setCurrent(e.key),\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CarryOutOutlined, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, undefined),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/instructor/course/create\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"Create Course\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, undefined)\n    }, \"/instructor/course/create\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n      onClick: e => setCurrent(e.key),\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.TeamOutlined, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, undefined),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/user/become-instructor\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"Become Instructor\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 11\n      }, undefined)\n    }, \"/user/become-instructor\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, undefined), user === null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n        onClick: e => setCurrent(e.key),\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.LoginOutlined, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 19\n        }, undefined),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/login\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \"Login\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, undefined)\n      }, \"/login\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n        onClick: e => setCurrent(e.key),\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserAddOutlined, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 19\n        }, undefined),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/register\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \"Register\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 13\n        }, undefined)\n      }, \"/register\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true), user !== null &&\n    /*#__PURE__*/\n    //<div style={{ marginLeft: \"auto\" }}>\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CoffeeOutlined, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 23\n      }, undefined),\n      title: user && user.name //className=\"float-right\"\n      ,\n      style: {\n        marginLeft: \"auto\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemGroup, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/user\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: \"Dashboard\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 23\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 21\n          }, undefined)\n        }, \"/user\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 19\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n          onClick: logout,\n          children: \"Logout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 19\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 15\n    }, undefined) //</div>\n    ]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL1RvcE5hdi5qcz83ZTU3Il0sIm5hbWVzIjpbIkl0ZW0iLCJTdWJNZW51IiwiSXRlbUdyb3VwIiwiTWVudSIsIlRvcE5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9nb3V0IiwidHlwZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJkYXRhIiwiYXhpb3MiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJwdXNoIiwiZSIsImtleSIsInJvbGUiLCJpbmNsdWRlcyIsIm5hbWUiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTTtBQUFFQSxNQUFGO0FBQVFDLFNBQVI7QUFBaUJDO0FBQWpCLElBQStCQyxzQ0FBckM7O0FBR0EsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDakIsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFFQSxRQUFNO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxNQUFzQkMsaURBQVUsQ0FBQ0MsNkNBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBV0osS0FBakI7QUFFQSxRQUFNSyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkLGNBQW1CVCxDQUFuQjtBQUNELEdBRlEsRUFFTixDQUFDLFVBQW1CVSxDQUFwQixDQUZNLENBQVQ7O0FBSUEsUUFBTUMsTUFBTSxHQUFHLFlBQVk7QUFDekJSLFlBQVEsQ0FBQztBQUFFUyxVQUFJLEVBQUU7QUFBUixLQUFELENB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LG1CQVhGO0FBQUEsb0JBOUJKLEVBcURHZixJQUFJLEtBQUssSUFBVDtBQUFBO0FBQ0c7QUFDSSxrRUFBQyxPQUFEO0FBQ0UsVUFBSSxlQUFFLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFI7QUFFRSxXQUFLLEVBQUVBLElBQUksSUFBSUEsSUFBSSxDQUFDa0IsSUFGdEIsQ0FHRTtBQUhGO0FBSUUsV0FBSyxFQUFFO0FBQUVDLGtCQUFVLEVBQUU7QUFBZCxPQUpUO0FBQUEsNkJBTUUsOERBQUMsU0FBRDtBQUFBLGdDQUNFLDhEQUFDLElBQUQ7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsT0FBWDtBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVUsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBT0UsOERBQUMsSUFBRDtBQUFNLGlCQUFPLEVBQUVkLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGUCxDQW1CRztBQXhFTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQThFRCxDQWxHRDs7QUFvR0EsK0RBQWViLE1BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcE5hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgQXBwc3RvcmVPdXRsaW5lZCxcbiAgQ29mZmVlT3V0bGluZWQsXG4gIExvZ2luT3V0bGluZWQsXG4gIFVzZXJBZGRPdXRsaW5lZCxcbiAgQ2FycnlPdXRPdXRsaW5lZCxcbiAgVGVhbU91dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcblxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCI7XG5cblxuY29uc3QgeyBJdGVtLCBTdWJNZW51LCBJdGVtR3JvdXAgfSA9IE1lbnU7XG5cblxuY29uc3QgVG9wTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gICAgY29uc3QgeyB1c2VyIH0gPSBzdGF0ZTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHByb2Nlc3MuYnJvd3NlciAmJiBzZXRDdXJyZW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgfSwgW3Byb2Nlc3MuYnJvd3NlciAmJiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVdKTtcblxuICAgIGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJMT0dPVVRcIiB9KTtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvbG9nb3V0XCIpO1xuICAgICAgdG9hc3QoZGF0YS5tZXNzYWdlKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xufTtcblxuICByZXR1cm4gKFxuICAgIDxNZW51IG1vZGU9XCJob3Jpem9udGFsXCIgc2VsZWN0ZWRLZXlzPXtbY3VycmVudF19PlxuICAgICAgPEl0ZW0ga2V5PVwiL1wiIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX0gaWNvbj17PEFwcHN0b3JlT3V0bGluZWQgLz59PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvSXRlbT5cblxuICAgICAge3VzZXIgJiYgdXNlci5yb2xlICYmIHVzZXIucm9sZS5pbmNsdWRlcyhcIkluc3RydWN0b3JcIikgPyAoXG4gICAgICAgIDxJdGVtXG4gICAgICAgICAga2V5PVwiL2luc3RydWN0b3IvY291cnNlL2NyZWF0ZVwiXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfVxuICAgICAgICAgIGljb249ezxDYXJyeU91dE91dGxpbmVkIC8+fVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9pbnN0cnVjdG9yL2NvdXJzZS9jcmVhdGVcIj5cbiAgICAgICAgICAgIDxhPkNyZWF0ZSBDb3Vyc2U8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICApIDogKFxuICAgICAgICA8SXRlbVxuICAgICAgICAgIGtleT1cIi91c2VyL2JlY29tZS1pbnN0cnVjdG9yXCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XG4gICAgICAgICAgaWNvbj17PFRlYW1PdXRsaW5lZCAvPn1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlci9iZWNvbWUtaW5zdHJ1Y3RvclwiPlxuICAgICAgICAgICAgPGE+QmVjb21lIEluc3RydWN0b3I8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICApfVxuXG4gICAgICB7dXNlciA9PT0gbnVsbCAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgIGtleT1cIi9sb2dpblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XG4gICAgICAgICAgICBpY29uPXs8TG9naW5PdXRsaW5lZCAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgIDxhPkxvZ2luPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvSXRlbT5cblxuICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICBrZXk9XCIvcmVnaXN0ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfVxuICAgICAgICAgICAgaWNvbj17PFVzZXJBZGRPdXRsaW5lZCAvPn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgIDxhPlJlZ2lzdGVyPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgPC8+XG4gICAgICApfVxuXG4gICAgICB7dXNlciAhPT0gbnVsbCAmJiAoXG4gICAgICAgICAgLy88ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiYXV0b1wiIH19PlxuICAgICAgICAgICAgICA8U3ViTWVudVxuICAgICAgICAgICAgICAgIGljb249ezxDb2ZmZWVPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgICB0aXRsZT17dXNlciAmJiB1c2VyLm5hbWV9XG4gICAgICAgICAgICAgICAgLy9jbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCJhdXRvXCJ9fVxuICAgICAgICAgICAgICA+ICAgIFxuICAgICAgICAgICAgICAgIDxJdGVtR3JvdXA+XG4gICAgICAgICAgICAgICAgICA8SXRlbSBrZXk9XCIvdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgPGE+RGFzaGJvYXJkPC9hPiBcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8SXRlbSBvbkNsaWNrPXtsb2dvdXR9PkxvZ291dDwvSXRlbT5cbiAgICAgICAgICAgICAgICA8L0l0ZW1Hcm91cD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICAgIC8vPC9kaXY+XG4gICAgICApfVxuXG4gICAgPC9NZW51PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wTmF2O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TopNav.js\n");

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