
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson.h:

Program Listing for File ArduinoJson.h
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson.h>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #ifdef __cplusplus
   
   #  include "ArduinoJson.hpp"
   
   using namespace ArduinoJson;
   
   #else
   
   #error ArduinoJson requires a C++ compiler, please change file extension to .cc or .cpp
   
   #endif
