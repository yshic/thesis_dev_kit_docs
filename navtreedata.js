/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "XIAO ESP32S3 Sense Development Kit", "index.html", [
    [ "HUSKYLENS Protocol", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html", [
      [ "Commands List:", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md35", [
        [ "Version:", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md26", null ],
        [ "Designer:", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md27", null ],
        [ "Init parameter:", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md28", [
          [ "Serial", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md29", null ],
          [ "I2C", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md30", null ]
        ] ],
        [ "Communication Command Frame Format:", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md31", null ],
        [ "General concept:", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md32", [
          [ "ID Meaning:", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md33", null ]
        ] ],
        [ "Protocol flow:", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md34", null ],
        [ "COMMAND_REQUEST (0x20):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md36", null ],
        [ "COMMAND_REQUEST_BLOCKS (0x21):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md37", null ],
        [ "COMMAND_REQUEST_ARROWS (0x22):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md38", null ],
        [ "COMMAND_REQUEST_LEARNED (0x23):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md39", null ],
        [ "COMMAND_REQUEST_BLOCKS_LEARNED (0x24):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md40", null ],
        [ "COMMAND_REQUEST_ARROWS_LEARNED (0x25):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md41", null ],
        [ "COMMAND_REQUEST_BY_ID (0x26):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md42", null ],
        [ "COMMAND_REQUEST_BLOCKS_BY_ID (0x27):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md43", null ],
        [ "COMMAND_REQUEST_ARROWS_BY_ID (0x28):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md44", null ],
        [ "COMMAND_RETURN_INFO (0x29):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md45", null ],
        [ "COMMAND_RETURN_BLOCK(0x2A):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md46", null ],
        [ "COMMAND_RETURN_ARROW(0x2B):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md47", null ],
        [ "COMMAND_REQUEST_KNOCK(0x2C):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md48", null ],
        [ "COMMAND_REQUEST_ALGORITHM(0x2D):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md49", null ],
        [ "COMMAND_RETURN_OK(0x2E):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md50", null ],
        [ "autotoc_md51", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md51", null ],
        [ "COMMAND_REQUEST_CUSTOMNAMES (0x2F):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md52", null ],
        [ "COMMAND_REQUEST_PHOTO (0x30):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md53", null ],
        [ "COMMAND_REQUEST_SEND_KNOWLEDGES (0x32):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md54", null ],
        [ "COMMAND_REQUEST_RECEIVE_KNOWLEDGES (0x33):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md55", null ],
        [ "COMMAND_REQUEST_CUSTOM_TEXT (0x34):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md56", null ],
        [ "COMMAND_REQUEST_CLEAR_TEXT (0x35):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md57", null ],
        [ "COMMAND_REQUEST_LEARN (0x36):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md58", null ],
        [ "COMMAND_REQUEST_FORGET (0x37):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md59", null ],
        [ "COMMAND_REQUEST_SAVE_SCREENSHOT (0x39):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md60", null ],
        [ "COMMAND_REQUEST_IS_PRO (0x3B):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md61", null ],
        [ "COMMAND_RETURN_IS_PRO (0x3B):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md62", null ],
        [ "COMMAND_REQUEST_FIRMWARE_VERSION(0x3C):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md63", null ],
        [ "COMMAND_RETURN_BUSY(0x3D):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md64", null ],
        [ "COMMAND_RETURN_NEED_PRO(0x3E):", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md65", null ],
        [ "autotoc_md66", "md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md66", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", null ],
        [ "Functions", "globals_func.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"_adapters_2_json_string_8hpp_source.html",
"class_bsp_uart.html",
"class_static_json_document.html",
"md_thesis__mdt266__iotdevkit_2lib_2_h_u_s_k_y_l_e_n_s_2docs_2_h_u_s_k_y_l_e_n_s_01_protocol.html#autotoc_md34",
"structremove__cv_3_01const_01volatile_01_t_01_4.html"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';