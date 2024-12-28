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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_8__);\n\n\nvar _jsxFileName = \"/Users/chandradipguha/Documents/Github/elearning/client/components/TopNav.js\";\n\n\n\n\n\n\n\n\nconst {\n  Item,\n  SubMenu,\n  ItemGroup\n} = antd__WEBPACK_IMPORTED_MODULE_2__.Menu;\n\nconst TopNav = () => {\n  const {\n    0: current,\n    1: setCurrent\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n  const {\n    state,\n    dispatch\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.Context);\n  const {\n    user\n  } = state;\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n     false && 0;\n  }, [ false && 0]);\n\n  const logout = async () => {\n    dispatch({\n      type: \"LOGOUT\"\n    });\n    window.localStorage.removeItem(\"user\");\n    const {\n      data\n    } = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(\"/api/logout\");\n    (0,react_toastify__WEBPACK_IMPORTED_MODULE_8__.toast)(data.message);\n    router.push(\"/login\");\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n    mode: \"horizontal\",\n    selectedKeys: [current],\n    className: \"mb-2\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n      onClick: e => setCurrent(e.key),\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AppstoreOutlined, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 62\n      }, undefined),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, undefined)\n    }, \"/\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, undefined), user && user.role && user.role.includes(\"Instructor\") ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n      onClick: e => setCurrent(e.key),\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CarryOutOutlined, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, undefined),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/instructor/course/create\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"Create Course\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 11\n      }, undefined)\n    }, \"/instructor/course/create\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n      onClick: e => setCurrent(e.key),\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.TeamOutlined, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 17\n      }, undefined),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/user/become-instructor\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"Become Instructor\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 11\n      }, undefined)\n    }, \"/user/become-instructor\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, undefined), user === null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n        onClick: e => setCurrent(e.key),\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.LoginOutlined, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 19\n        }, undefined),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/login\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \"Login\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 80,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, undefined)\n      }, \"/login\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n        onClick: e => setCurrent(e.key),\n        icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UserAddOutlined, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 19\n        }, undefined),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n          href: \"/register\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            children: \"Register\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 15\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 13\n        }, undefined)\n      }, \"/register\", false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true), user && user.role && user.role.includes(\"Instructor\") && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n      onClick: e => setCurrent(e.key),\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.TeamOutlined, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 17\n      }, undefined) //className=\"float-right\"\n      ,\n      style: {\n        marginLeft: \"auto\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n        href: \"/instructor\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          children: \"Instructor\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 13\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 11\n      }, undefined)\n    }, \"/instructor\", false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }, undefined), user !== null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SubMenu, {\n      icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CoffeeOutlined, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 19\n      }, undefined),\n      title: user && user.name //className=\"float-right\"\n      ,\n      style: {\n        marginLeft: \"auto\"\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ItemGroup, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n            href: \"/user\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              children: \"Dashboard\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 120,\n              columnNumber: 19\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 17\n          }, undefined)\n        }, \"/user\", false, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 15\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Item, {\n          onClick: logout,\n          children: \"Logout\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 15\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 13\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 11\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopNav);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9jb21wb25lbnRzL1RvcE5hdi5qcz83ZTU3Il0sIm5hbWVzIjpbIkl0ZW0iLCJTdWJNZW51IiwiSXRlbUdyb3VwIiwiTWVudSIsIlRvcE5hdiIsImN1cnJlbnQiLCJzZXRDdXJyZW50IiwidXNlU3RhdGUiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJ1c2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9nb3V0IiwidHlwZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJkYXRhIiwiYXhpb3MiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJwdXNoIiwiZSIsImtleSIsInJvbGUiLCJpbmNsdWRlcyIsIm1hcmdpbkxlZnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTTtBQUFFQSxNQUFGO0FBQVFDLFNBQVI7QUFBaUJDO0FBQWpCLElBQStCQyxzQ0FBckM7O0FBR0EsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFDakIsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBdEM7QUFFQSxRQUFNO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxNQUFzQkMsaURBQVUsQ0FBQ0MsNkNBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBV0osS0FBakI7QUFFQSxRQUFNSyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkLGNBQW1CVCxDQUFuQjtBQUNELEdBRlEsRUFFTixDQUFDLFVBQW1CVSxDQUFwQixDQUZNLENBQVQ7O0FBSUEsUUFBTUMsTUFBTSxHQUFHLFlBQVk7QUFDekJSLFlBQVEsQ0FBQztBQUFFUyxVQUFJLEVBQUU7QUFBUixLQUFELENBQVI7QUFDQUYsVUFBTSxDQUFDRyxZQUFQLENBQW9CQyxVQUFwQixDQUErQixNQUEvQjtBQUNBLFVBQU07QUFBRUM7QUFBRixRQUFXLE1BQU1DLGdEQUFBLENBQVUsYUFBVixDQUF2QjtBQUNBQyx5REFBSyxDQUFDRixJQUFJLENBQUNHLE9BQU4sQ0FBTDtBQUNBWCxVQUFNLENBQUNZLElBQVAsQ0FBWSxRQUFaO0FBQ0wsR0FORzs7QUFRRixzQkFDRSw4REFBQyxzQ0FBRDtBQUFNLFFBQUksRUFBQyxZQUFYO0FBQXdCLGdCQUFZLEVBQUUsQ0FBQ3BCLE9BQUQsQ0FBdEM7QUFBaUQsYUFBUyxFQUFDLE1BQTNEO0FBQUEsNEJBQ0UsOERBQUMsSUFBRDtBQUFjLGFBQU8sRUFBR3FCLENBQUQsSUFBT3BCLFVBQVUsQ0FBQ29CLENBQUMsQ0FBQ0MsR0FBSCxDQUF4QztBQUFpRCxVQUFJLGVBQUUsOERBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdkQ7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBVSxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUFPR2YsSUFBSSxJQUFJQSxJQUFJLENBQUNnQixJQUFiLElBQXFCaEIsSUFBSSxDQUFDZ0IsSUFBTCxDQUFVQyxRQUFWLENBQW1CLFlBQW5CLENBQXJCLGdCQUNDLDhEQUFDLElBQUQ7QUFFRSxhQUFPLEVBQUdILENBQUQsSUFBT3BCLFVBQVUsQ0FBQ29CLENBQUMsQ0FBQ0MsR0FBSCxDQUY1QjtBQUdFLFVBQUksZUFBRSw4REFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhSO0FBQUEsNkJBS0UsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsMkJBQVg7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRixPQUNNLDJCQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZ0JBV0MsOERBQUMsSUFBRDtBQUVFLGFBQU8sRUFBR0QsQ0FBRCxJQUFPcEIsVUFBVSxDQUFDb0IsQ0FBQyxDQUFDQyxHQUFILENBRjVCO0FBR0UsVUFBSSxlQUFFLDhEQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSFI7QUFBQSw2QkFLRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyx5QkFBWDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGLE9BQ00seUJBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkosRUE2QkdmLElBQUksS0FBSyxJQUFULGlCQUNDO0FBQUEsOEJBQ0UsOERBQUMsSUFBRDtBQUVFLGVBQU8sRUFBR2MsQ0FBRCxJQUFPcEIsVUFBVSxDQUFDb0IsQ0FBQyxDQUFDQyxHQUFILENBRjVCO0FBR0UsWUFBSSxlQUFFLDhEQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSFI7QUFBQSwrQkFLRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxRQUFYO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEYsU0FDTSxRQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFXRSw4REFBQyxJQUFEO0FBRUUsZUFBTyxFQUFHRCxDQUFELElBQU9wQixVQUFVLENBQUNvQixDQUFDLENBQUNDLEdBQUgsQ0FGNUI7QUFHRSxZQUFJLGVBQUUsOERBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIUjtBQUFBLCtCQUtFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFdBQVg7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRixTQUNNLFdBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFYRjtBQUFBLG9CQTlCSixFQXFER2YsSUFBSSxJQUFJQSxJQUFJLENBQUNnQixJQUFiLElBQXFCaEIsSUFBSSxDQUFDZ0IsSUFBTCxDQUFVQyxRQUFWLENBQW1CLFlBQW5CLENBQXJCLGlCQUNDLDhEQUFDLElBQUQ7QUFFRSxhQUFPLEVBQUdILENBQUQsSUFBT3BCLFVBQVUsQ0FBQ29CLENBQUMsQ0FBQ0MsR0FBSCxDQUY1QjtBQUdFLFVBQUksZUFBRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhSLENBSUU7QUFKRjtBQUtFLFdBQUssRUFBRTtBQUFFRyxrQkFBVSxFQUFFO0FBQWQsT0FMVDtBQUFBLDZCQU9FLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixPQUNNLGFBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0REosRUFtRUdsQixJQUFJLEtBQUssSUFBVCxpQkFDRyw4REFBQyxPQUFEO0FBQ0UsVUFBSSxlQUFFLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFI7QUFFRSxXQUFLLEVBQUVBLElBQUksSUFBSUEsSUFBSSxDQUFDbUIsSUFGdEIsQ0FHRTtBQUhGO0FBSUUsV0FBSyxFQUFFO0FBQUVELGtCQUFVLEVBQUU7QUFBZCxPQUpUO0FBQUEsNkJBTUUsOERBQUMsU0FBRDtBQUFBLGdDQUNFLDhEQUFDLElBQUQ7QUFBQSxpQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsT0FBWDtBQUFBLG1DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQVUsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBT0UsOERBQUMsSUFBRDtBQUFNLGlCQUFPLEVBQUViLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwRU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEwRkQsQ0E5R0Q7O0FBZ0hBLCtEQUFlYixNQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Ub3BOYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNZW51IH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7XG4gIEFwcHN0b3JlT3V0bGluZWQsXG4gIENvZmZlZU91dGxpbmVkLFxuICBMb2dpbk91dGxpbmVkLFxuICBVc2VyQWRkT3V0bGluZWQsXG4gIENhcnJ5T3V0T3V0bGluZWQsXG4gIFRlYW1PdXRsaW5lZCxcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuXG5cbmNvbnN0IHsgSXRlbSwgU3ViTWVudSwgSXRlbUdyb3VwIH0gPSBNZW51O1xuXG5cbmNvbnN0IFRvcE5hdiA9ICgpID0+IHtcbiAgICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KENvbnRleHQpO1xuICAgIGNvbnN0IHsgdXNlciB9ID0gc3RhdGU7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBwcm9jZXNzLmJyb3dzZXIgJiYgc2V0Q3VycmVudCh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH0sIFtwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lXSk7XG5cbiAgICBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiTE9HT1VUXCIgfSk7XG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL2xvZ291dFwiKTtcbiAgICAgIHRvYXN0KGRhdGEubWVzc2FnZSk7XG4gICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbn07XG5cbiAgcmV0dXJuIChcbiAgICA8TWVudSBtb2RlPVwiaG9yaXpvbnRhbFwiIHNlbGVjdGVkS2V5cz17W2N1cnJlbnRdfSBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICA8SXRlbSBrZXk9XCIvXCIgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfSBpY29uPXs8QXBwc3RvcmVPdXRsaW5lZCAvPn0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9JdGVtPlxuXG4gICAgICB7dXNlciAmJiB1c2VyLnJvbGUgJiYgdXNlci5yb2xlLmluY2x1ZGVzKFwiSW5zdHJ1Y3RvclwiKSA/IChcbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBrZXk9XCIvaW5zdHJ1Y3Rvci9jb3Vyc2UvY3JlYXRlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XG4gICAgICAgICAgaWNvbj17PENhcnJ5T3V0T3V0bGluZWQgLz59XG4gICAgICAgID5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2luc3RydWN0b3IvY291cnNlL2NyZWF0ZVwiPlxuICAgICAgICAgICAgPGE+Q3JlYXRlIENvdXJzZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICkgOiAoXG4gICAgICAgIDxJdGVtXG4gICAgICAgICAga2V5PVwiL3VzZXIvYmVjb21lLWluc3RydWN0b3JcIlxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX1cbiAgICAgICAgICBpY29uPXs8VGVhbU91dGxpbmVkIC8+fVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi91c2VyL2JlY29tZS1pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICA8YT5CZWNvbWUgSW5zdHJ1Y3RvcjwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICl9XG5cbiAgICAgIHt1c2VyID09PSBudWxsICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAga2V5PVwiL2xvZ2luXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRDdXJyZW50KGUua2V5KX1cbiAgICAgICAgICAgIGljb249ezxMb2dpbk91dGxpbmVkIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cbiAgICAgICAgICAgICAgPGE+TG9naW48L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9JdGVtPlxuXG4gICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgIGtleT1cIi9yZWdpc3RlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0Q3VycmVudChlLmtleSl9XG4gICAgICAgICAgICBpY29uPXs8VXNlckFkZE91dGxpbmVkIC8+fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgPGE+UmVnaXN0ZXI8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9JdGVtPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG5cbiAgICAgIHt1c2VyICYmIHVzZXIucm9sZSAmJiB1c2VyLnJvbGUuaW5jbHVkZXMoXCJJbnN0cnVjdG9yXCIpICYmIChcbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBrZXk9XCIvaW5zdHJ1Y3RvclwiXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHNldEN1cnJlbnQoZS5rZXkpfVxuICAgICAgICAgIGljb249ezxUZWFtT3V0bGluZWQgLz59XG4gICAgICAgICAgLy9jbGFzc05hbWU9XCJmbG9hdC1yaWdodFwiXG4gICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCJhdXRvXCJ9fVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9pbnN0cnVjdG9yXCI+XG4gICAgICAgICAgICA8YT5JbnN0cnVjdG9yPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgKX1cblxuICAgICAge3VzZXIgIT09IG51bGwgJiYgKFxuICAgICAgICAgIDxTdWJNZW51XG4gICAgICAgICAgICBpY29uPXs8Q29mZmVlT3V0bGluZWQgLz59XG4gICAgICAgICAgICB0aXRsZT17dXNlciAmJiB1c2VyLm5hbWV9XG4gICAgICAgICAgICAvL2NsYXNzTmFtZT1cImZsb2F0LXJpZ2h0XCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiYXV0b1wifX1cbiAgICAgICAgICA+ICAgIFxuICAgICAgICAgICAgPEl0ZW1Hcm91cD5cbiAgICAgICAgICAgICAgPEl0ZW0ga2V5PVwiL3VzZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3VzZXJcIj4gXG4gICAgICAgICAgICAgICAgICA8YT5EYXNoYm9hcmQ8L2E+IFxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPEl0ZW0gb25DbGljaz17bG9nb3V0fT5Mb2dvdXQ8L0l0ZW0+XG4gICAgICAgICAgICA8L0l0ZW1Hcm91cD5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvU3ViTWVudT4gICAgICAgIFxuICAgICAgKX1cblxuICAgIDwvTWVudT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcE5hdjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TopNav.js\n");

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